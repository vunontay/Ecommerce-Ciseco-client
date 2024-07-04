import { TPaymentOnline } from "../types/payment-type";
import { ROUTE } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiPaymentOnline = async (orderId: string, data: TPaymentOnline) => {
    const response = await axiosConfig.post(
        `${ROUTE.ORDER}${orderId}${ROUTE.PAYMENT_ONLINE}`,
        data
    );
    return response.data;
};
export const apiPayment = { apiPaymentOnline };
