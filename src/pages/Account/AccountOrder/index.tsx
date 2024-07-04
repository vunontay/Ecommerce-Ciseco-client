import { useOrder } from "../../../hooks/useOrder";
import { TOrderList } from "../../../types/order-type";
import OrderList from "./OrderList";
import "./index.scss";

const AccountOrder = () => {
    const { data } = useOrder.useGetOrder();

    return (
        <div className="account-order">
            <h2>Order History</h2>
            <OrderList list={(data?.order as TOrderList) ?? []} />
        </div>
    );
};

export default AccountOrder;
