import { Icon } from "@iconify/react/dist/iconify.js";
import { InputQuantity } from "../../../components/ui";
import { Product } from "../../../types/product-type";
import "./index.scss";
import { formatMoney } from "../../../utils/util";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { removeCartItem, updateQuantity } from "../../../store/cart-slice";
import { useCart } from "../../../hooks/useCart";

type CartItemType = Omit<
    Product,
    | "description"
    | "tags"
    | "dimensions"
    | "category"
    | "isActive"
    | "__v"
    | "attribute_product"
>;

interface CartItemProps {
    product: CartItemType;
}

const CartItem = ({ product }: CartItemProps) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);
    const { mutate: deleteCartItem } = useCart.useDeleteCart();
    const { mutate: updateCartItem } = useCart.useUpdateCart();

    const initialQuantity =
        cart?.find((item) => item.product_id === product._id)?.quantity || 1;
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleQuantityChange = (value: number) => {
        setQuantity(value);
        dispatch(updateQuantity({ productId: product._id, quantity: value }));

        const updatedCart = cart?.map((item) =>
            item.product_id === product._id
                ? { ...item, quantity: value }
                : item
        ) || [
            {
                product_id: product._id,
                quantity: value,
                isActive: true,
            },
        ];

        updateCartItem({
            cart_details: updatedCart,
        });
    };

    const handleRemove = () => {
        dispatch(removeCartItem({ productId: product._id }));
        deleteCartItem(product._id);
    };

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img
                    loading="lazy"
                    src={product.images[0].url}
                    alt={product.name}
                />
            </div>
            <div className="cart-item__content">
                <div className="cart-item__top">
                    <div className="cart-item__info">
                        <h3>{product.name}</h3>
                        <div className="cart-item__info--sub">
                            <div className="sub-item">
                                <Icon icon="iconoir:fill-color" />
                                {product.brand}
                            </div>
                            <span></span>
                            <div className="sub-item">
                                <Icon icon="radix-icons:size" /> {product.code}
                            </div>
                        </div>
                    </div>
                    <div>
                        <InputQuantity
                            quantity={quantity}
                            max={product.avaiable}
                            onChangeQuantity={handleQuantityChange}
                        />
                    </div>
                    <div className="cart-item__price">
                        <span>{formatMoney(product.price)}</span>
                    </div>
                </div>
                <div className="cart-item__bottom">
                    <div className="cart-item__stock">
                        {product.avaiable > 0 ? (
                            <button>
                                <Icon icon="iconamoon:check-bold" /> In Stock
                            </button>
                        ) : (
                            <button>
                                <Icon icon="radix-icons:value-none" /> Sold Out
                            </button>
                        )}
                    </div>
                    <div className="cart-item__remove" onClick={handleRemove}>
                        Remove
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
