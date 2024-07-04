import { useSelector } from "react-redux";
import { Container } from "../../../components/shared";
import "./index.scss";
import { RootState } from "../../../store";
import CartList from "../CartList";
import { useProduct } from "../../../hooks/useProduct";
import Skeleton from "react-loading-skeleton";
import CartOrder from "../CartOrder";
import Breadcrumb from "../../../components/ui/Breadcrumb";

const CartDetail = () => {
    const { cart } = useSelector((state: RootState) => state.cart);
    const cartId = cart?.map((cartItem) => cartItem.product_id) || [];

    const { data: products, isLoading } =
        useProduct.useGetProductsByIds(cartId);

    return (
        <div className="cart-page">
            <Breadcrumb />
            <Container>
                <hr />
                <div className="cart-page__main">
                    <div className="cart-page__content">
                        <div className="cart-page__content--left">
                            {isLoading ? (
                                <Skeleton count={9} />
                            ) : (
                                <CartList products={products} />
                            )}
                        </div>
                        <div className="cart-page__content--center"></div>
                        <div className="cart-page__content--right">
                            <CartOrder products={products} type={"cart"} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartDetail;
