import { TOderData, TOrderResponseWithSuccess } from "../types/order-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiCreateOrder = async (orderData: TOderData) => {
    const response = await axiosConfig.post(`${API_URL.ORDER}`, orderData);
    return response.data;
};

const apiGetOrderByUserId = async (
    uid: string
): Promise<TOrderResponseWithSuccess> => {
    const response = await axiosConfig.get<TOrderResponseWithSuccess>(
        `${API_URL.ORDER}user/${uid}`
    );
    return response.data;
};

export const orderService = {
    apiCreateOrder,
    apiGetOrderByUserId,
};
