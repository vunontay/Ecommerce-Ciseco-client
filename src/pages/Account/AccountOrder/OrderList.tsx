import { TOrderList } from "../../../types/order-type";
import { formatMoney } from "../../../utils/util";
import "./index.scss";

interface OrderListProps {
    list: TOrderList;
}

const OrderList = ({ list }: OrderListProps) => {
    return (
        <>
            {list?.map((list) => (
                <div key={list._id} className="order-list">
                    <div className="order-list__header">
                        <div className="order-list__info">
                            <p>{list.code}</p>
                            <div className="timer">
                                <span>{list.dateCreated}</span>
                                <span>·</span>
                                <span>{list.status}</span>
                            </div>
                        </div>
                        <button>View Order</button>
                    </div>
                    <div className="order-list__list">
                        {list.orderDetails.map((item, index) => (
                            <div key={index} className="order-list__item">
                                <div className="order-list__img">
                                    <img
                                        src={item.product.images[0].url}
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                                <div className="order-list__details">
                                    <div className="order-list__details--top">
                                        <div>
                                            <h3>{item.product.name}</h3>
                                            <p className="info">
                                                <span>{item.product.tags}</span>
                                                <span className="order-list__details--border"></span>
                                                <span>
                                                    {item.product.brand}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="order-list__details--price">
                                            <span>
                                                {formatMoney(
                                                    item.product.price
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="order-list__details--bottom">
                                        <p className="total">
                                            x{item.quantity}
                                        </p>
                                        <span className="price">
                                            Total Price:{" "}
                                            <b>{list.totalOrderItem}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default OrderList;
