import { useDispatch } from "react-redux";
import { useCart } from "../../../hooks/useCart";
import { Product } from "../../../types/product-type";
import { formatMoney } from "../../../utils/util";
import { removeCartItem } from "../../../store/cart-slice";
import emptyCart from "../../../assets/images/empty_cart.webp";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../utils/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { memo, useMemo } from "react";

interface PopupCartProps {
    products?: Product[];
    quantities: number[];
}

const PopupCartComponent = ({ products, quantities }: PopupCartProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mutate: deleteCartItem, isPending } = useCart.useDeleteCart();

    const handleRemove = (
        event: React.MouseEvent<HTMLButtonElement>,
        productId: string
    ) => {
        event.stopPropagation();
        dispatch(removeCartItem({ productId }));
        deleteCartItem(productId);
    };

    const calculateTotal = useMemo(() => {
        let total = 0;
        if (products && quantities && products.length === quantities.length) {
            total = products.reduce(
                (accumulator, product, index) =>
                    accumulator + product.price * quantities[index],
                0
            );
        }
        return total;
    }, [products, quantities]);

    return (
        <div className="popup-cart">
            <div className="popup-cart__list">
                <h3>Shopping cart</h3>
                <div>
                    {isPending ? (
                        <div className="popup-cart__loading">
                            <Icon icon="eos-icons:bubble-loading" />
                        </div>
                    ) : (
                        <>
                            {products && products.length ? (
                                products.map((product, index) => (
                                    <div
                                        key={product._id}
                                        className="popup-cart__item"
                                    >
                                        <div className="popup-cart__img">
                                            <img
                                                loading="lazy"
                                                src={product.images[0].url}
                                                alt={product.name}
                                                decoding="async"
                                            />
                                        </div>
                                        <div className="popup-cart__details">
                                            <div className="popup-cart__details--top">
                                                <div>
                                                    <h3>{product.name}</h3>
                                                    <p className="info">
                                                        <span>
                                                            {product.tags}
                                                        </span>
                                                        <span className="popup-cart__details--border"></span>
                                                        <span>
                                                            {product.brand}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="popup-cart__details--price">
                                                    <span>
                                                        {formatMoney(
                                                            product.price
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="popup-cart__details--bottom">
                                                <p className="total">
                                                    x{quantities[index]}
                                                </p>
                                                <button
                                                    className="remove"
                                                    onClick={(event) =>
                                                        handleRemove(
                                                            event,
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="popup-cart__empty">
                                    <img
                                        decoding="async"
                                        loading="lazy"
                                        src={emptyCart}
                                        alt="Empty Cart"
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="popup-cart__actions">
                <div className="popup-cart__actions--info">
                    <span>
                        <span>Subtotal</span>
                        <p>Shipping and taxes calculated at checkout.</p>
                    </span>
                    <span>{formatMoney(calculateTotal)}</span>
                </div>
                <div className="popup-cart__actions--buttons">
                    <Button
                        variant="contain"
                        color="white"
                        onClick={() => {
                            navigate(ROUTE.CART);
                        }}
                    >
                        View Cart
                    </Button>
                    <Button
                        variant="contain"
                        color="black"
                        onClick={() => {
                            navigate(ROUTE.CHECKOUT);
                        }}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const PopupCart = memo(PopupCartComponent);
