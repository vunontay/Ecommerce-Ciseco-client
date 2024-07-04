import { TSuccess } from ".";

export type TCartDetail = {
    product_id: string;
    quantity: number;
    isActive: boolean;
};

export type TCartItem = {
    cart_details?: TCartDetail[];
};

export type TCartResponse = {
    cart: TCartItem;
};

export type TAddCartValue = {
    uid: string | number | undefined;
    productId: string;
    data: TAddCart;
};

export type TAddCart = {
    product_id: string;
    quantity: number;
};

export type TUpdateCart = {
    cart_details: {
        product_id: string;
        quantity: number | string;
    }[];
};

export type TCartResponseWithSuccess = TCartResponse & TSuccess;
