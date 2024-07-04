import { TOderData, TOrderResponseWithSuccess } from "../types/order-type";
import { ROUTE } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiCreateOrder = async (orderData: TOderData) => {
    const response = await axiosConfig.post(`${ROUTE.ORDER}`, orderData);
    return response.data;
};

const apiGetOrderByUserId = async (
    uid: string
): Promise<TOrderResponseWithSuccess> => {
    const response = await axiosConfig.get<TOrderResponseWithSuccess>(
        `${ROUTE.ORDER}user/${uid}`
    );
    return response.data;
};

export const orderService = {
    apiCreateOrder,
    apiGetOrderByUserId,
};
