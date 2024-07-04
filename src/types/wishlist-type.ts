import { TSuccess } from ".";
import { Product } from "./product-type";

export type TValueWishlist = {
    product_id: string;
};

export type TWishlistResponse = {
    productLiked?: {
        user_id: string;
        products: Product[];
        _id: string;
    };
    products?: {
        products: string[];
    };
};

export type TWishlistResponseWithSuccess = TWishlistResponse & TSuccess;
