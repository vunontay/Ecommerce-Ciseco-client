import { memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../../utils/constant";
import { Container } from "../../shared";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ProductSearch } from "../../products";
import { getCartTotal } from "../../../store/cart-slice";
import { Button, Dropdown, Modal, Popup } from "../../ui";
import { usePopup } from "../../../hooks/usePopup";
import { useProduct } from "../../../hooks/useProduct";
import { HeaderMobile } from "./HeaderMobile";
import useModal from "../../../hooks/useModal";
import { PopupUser } from "./PopupUser";
import { PopupCart } from "./PopupCart";
import Logo from "../../../assets/images/logo.svg";
import { useCategory } from "../../../hooks/useCategory";

const HeaderComponent = () => {
    const [isSticky, setSticky] = useState(false);
    const { totalQuantity, cart } = useSelector(
        (state: RootState) => state?.cart
    );
    const { user } = useSelector((state: RootState) => state?.user);
    const cartIds = cart?.map((cartItem) => cartItem.product_id) || [];
    const quantities = cart?.map((cartItem) => cartItem.quantity) || [];
    const { data: products } = useProduct.useGetProductsByIds(cartIds);
    const { data: categories } = useCategory.useGetCategoryTree();

    const { openModal, handleCloseModal, handleOpenModal, id } = useModal();

    const userPopup = usePopup();
    const cartPopup = usePopup();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const isSticky = offset > 60;
            setSticky(isSticky);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleOpenUserPopup = () => {
        if (!user) {
            navigate(ROUTE.LOGIN);
        } else {
            userPopup.togglePopup();
        }
    };
    const generateCategoryUrl = (categoryId: string) => {
        const newUrl = `${ROUTE.PRODUCT_COLLECTION}?category_id=${categoryId}`;
        return newUrl;
    };

    return (
        <>
            <header className={`header ${isSticky ? "scrolled" : ""}`}>
                {id === "mobile-modal" ? (
                    <Modal
                        type="left"
                        onClose={handleCloseModal}
                        open={openModal}
                    >
                        <HeaderMobile onClose={handleCloseModal} />
                    </Modal>
                ) : (
                    <Modal
                        type="center"
                        onClose={handleCloseModal}
                        open={openModal}
                    >
                        <ProductSearch onClose={handleCloseModal} />
                    </Modal>
                )}
                <Container>
                    <div className="header__container">
                        <div className="header__button-mobile">
                            <Button
                                onClick={() =>
                                    handleOpenModal("mobile-modal", null)
                                }
                                className="header__control--item"
                            >
                                <Icon icon={"ion:menu"} />
                            </Button>
                        </div>
                        <div className="header__logo">
                            <Link to={ROUTE.INDEX}>
                                <img
                                    loading="lazy"
                                    src={Logo}
                                    alt="Logo"
                                    decoding="async"
                                />
                            </Link>
                        </div>
                        <div className="header__navbar">
                            <span>
                                Category
                                <Dropdown
                                    generateUrl={generateCategoryUrl}
                                    data={categories ? categories : []}
                                />
                            </span>
                            <Link to={ROUTE.PRODUCT_COLLECTION}>
                                Collection
                            </Link>
                            <Link to={ROUTE.ABOUT}>About</Link>
                            <Link to={ROUTE.CONTACT}>Contact</Link>
                            <Link to={ROUTE.BLOG}>Blog</Link>
                        </div>
                        <div className="header__control">
                            <span
                                onClick={() =>
                                    handleOpenModal(
                                        "product-search-modal",
                                        null
                                    )
                                }
                                className="header__control--item"
                            >
                                <Icon icon={"iconamoon:search-light"} />
                            </span>
                            {/* Desktop */}
                            <div className="header__control--cart-popup">
                                <span
                                    className="header__control--item "
                                    ref={cartPopup.triggerRef}
                                    onClick={cartPopup.togglePopup}
                                >
                                    <Icon
                                        icon={
                                            "solar:cart-large-minimalistic-outline"
                                        }
                                    />
                                    <div className="hide">
                                        <Popup ref={cartPopup.popupRef}>
                                            <PopupCart
                                                products={products || []}
                                                quantities={quantities}
                                            />
                                        </Popup>
                                    </div>
                                    <span className="cart-quantity">
                                        {totalQuantity ? totalQuantity : 0}
                                    </span>
                                </span>
                            </div>
                            {/* Desktop */}

                            {/* Mobile */}
                            <div className="header__control--cart-link">
                                <Link
                                    to={ROUTE.CART}
                                    className="header__control--item "
                                >
                                    <Icon
                                        icon={
                                            "solar:cart-large-minimalistic-outline"
                                        }
                                    />
                                    <span className="cart-quantity">
                                        {totalQuantity ? totalQuantity : 0}
                                    </span>
                                </Link>
                            </div>
                            {/* Mobile */}

                            <span
                                ref={userPopup.triggerRef}
                                onClick={handleOpenUserPopup}
                                className="header__control--item"
                            >
                                <Icon icon="mage:user" />
                                <Popup ref={userPopup.popupRef}>
                                    <PopupUser user={user} />
                                </Popup>
                            </span>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export const Header = memo(HeaderComponent);
