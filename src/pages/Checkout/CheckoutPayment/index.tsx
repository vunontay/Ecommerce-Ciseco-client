import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CartList from "../../Cart/CartList";
import "./index.scss";
import { useProduct } from "../../../hooks/useProduct";
import Skeleton from "react-loading-skeleton";
import CartOrder from "../../Cart/CartOrder";

const CheckoutPayment = () => {
    const { cart } = useSelector((state: RootState) => state.cart);
    const { orderDetail, paymentMethod } = useSelector(
        (state: RootState) => state.order
    );

    const cartId = cart?.map((cartItem) => cartItem.product_id) || [];

    const { data: products, isLoading } =
        useProduct.useGetProductsByIds(cartId);

    return (
        <div className="checkout-payment">
            <h3 className="checkout-payment__title">Order summary</h3>
            <div className="checkout-payment__list">
                {isLoading ? (
                    <Skeleton count={9} />
                ) : (
                    <CartList products={products} />
                )}
            </div>
            <div className="checkout-payment__detail">
                <CartOrder
                    paymentMethod={paymentMethod}
                    orderDetail={orderDetail}
                    products={products}
                    type="order"
                />
            </div>
        </div>
    );
};

export default CheckoutPayment;
