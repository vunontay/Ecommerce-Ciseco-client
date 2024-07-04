import { Product } from "../../../types/product-type";
import CartItem from "../CartItem";
import "./index.scss";

interface CartListProps {
    products?: Product[];
}

const CartList: React.FC<CartListProps> = ({ products }) => {
    return (
        <div className="cart-list">
            {products?.length ? (
                products.map((item) => (
                    <div key={item._id} className="cart-list__item">
                        <CartItem product={item} />
                    </div>
                ))
            ) : (
                <p className="cart-list__empty">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartList;
