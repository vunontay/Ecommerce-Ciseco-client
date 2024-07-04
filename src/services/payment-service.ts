import { TPaymentOnline } from "../types/payment-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiPaymentOnline = async (orderId: string, data: TPaymentOnline) => {
    const response = await axiosConfig.post(
        `${API_URL.ORDER}${orderId}${API_URL.PAYMENT_ONLINE}`,
        data
    );
    return response.data;
};
export const apiPayment = { apiPaymentOnline };
