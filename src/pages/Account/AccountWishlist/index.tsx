import { useWishlist } from "../../../hooks/useWishlist";
import "./index.scss";
import ProductWishlist from "./ProductWishlist";

const AccountWishlist = () => {
    const { data } = useWishlist.useGetWishList();

    return (
        <div className="account-wishlist">
            <h2>List of saved products</h2>
            <ProductWishlist products={data?.products ? data.products : []} />
        </div>
    );
};
export default AccountWishlist;
