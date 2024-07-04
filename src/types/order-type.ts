import { TSuccess } from ".";
import { Product } from "./product-type";

export type TOderData = {
    user_id: string;
    shipping_detail: {
        fullName: string;
        address: {
            provinceName: string;
            districtName: string;
            wardName: string;
            detail: string;
            zipCode: string;
            country: string;
        };
        phone: string;
        email: string;
    };
};

export type CheckoutOrderValues = {
    fullName: string;
    email: string;
    phone: string;
    street: string;
    province: string;
    district: string;
    commune: string;
};

export type TOderDetails = {
    totalOrderItem: number;
    status: string;
    _id: string;
};

export type OrderDetail = {
    product: Product;
    quantity: number;
};

export type TOrderList = {
    code: string;
    countOrderItem: number;
    dateCreated: string;
    orderDetails: OrderDetail[];
    shipping_detail: TOderData["shipping_detail"];
    status: string;
    totalOrderItem: number;
    user_id: string;
    __v: number;
    _id: string;
}[];

export type TOrderResponse = {
    order:
        | TOrderList
        | {
              shipping_detail: Omit<TOderData, "user_id">;
              _id: string;
              code: string;
              orderDetails: OrderDetail[];
              countOrderItem: number;
              totalOrderItem: number;
              status: string;
          };
};

export type TOrderResponseWithSuccess = TOrderResponse & TSuccess;
