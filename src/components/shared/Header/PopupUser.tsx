import "./index.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TUser } from "../../../types/auth-type";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/user-slice";
import { resetCart } from "../../../store/cart-slice";
import { ROUTE } from "../../../utils/constant";
import toast from "react-hot-toast";
import { memo } from "react";
import DefaultAvatar from "../../../assets/images/default_avt.webp";
interface PopupUserProps {
    user: TUser | null;
}

const PopupUserComponent = ({ user }: PopupUserProps) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(resetCart());
        toast.success("Logout successfully");
    };

    return (
        <div className="popup-user">
            <div className="popup-user__info">
                <div className="popup-user__avatar">
                    <img
                        src={
                            user?.avatar.url !== ""
                                ? user?.avatar.url
                                : DefaultAvatar
                        }
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="popup-user__details">
                    <h4>{user?.userName}</h4>
                    <p>{user?.email}</p>
                </div>
            </div>
            <span></span>
            <Link className="popup-user__action" to={ROUTE.ACCOUNT}>
                <Icon icon="heroicons:user" />
                <p>My Account</p>
            </Link>
            <Link className="popup-user__action" to={ROUTE.ACCOUNT_ORDER}>
                <Icon icon="icon-park-outline:transaction-order" />
                <p>My Order</p>
            </Link>
            <Link className="popup-user__action" to={ROUTE.WISHLIST}>
                <Icon icon="ph:heart" />
                <p>Wishlist</p>
            </Link>
            <span></span>
            <Link className="popup-user__action" to={""}>
                <Icon icon="ep:help" />
                <p>Help</p>
            </Link>
            <Link className="popup-user__action" to={""}>
                <Icon icon="solar:logout-2-broken" />
                <p onClick={handleLogout}>Logout</p>
            </Link>
        </div>
    );
};

export const PopupUser = memo(PopupUserComponent);
