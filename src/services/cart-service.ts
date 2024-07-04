import {
    TAddCart,
    TCartResponseWithSuccess,
    TUpdateCart,
} from "../types/cart-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiGetCartByUserId = async (
    uid: string | undefined
): Promise<TCartResponseWithSuccess> => {
    const response = await axiosConfig.get(`${API_URL.CART}/${uid}`);
    return response.data;
};

const apiDeleteCart = async (
    uid: string | number,
    productId: string
): Promise<TCartResponseWithSuccess> => {
    const response = await axiosConfig.delete<TCartResponseWithSuccess>(
        `${API_URL.CART}/${uid}${API_URL.PRODUCTS}/${productId}`
    );
    return response.data;
};

const apiAddToCart = async (
    uid: string | undefined,
    productId: string | number,
    data: TAddCart
): Promise<TCartResponseWithSuccess> => {
    const response = await axiosConfig.post<TCartResponseWithSuccess>(
        `${API_URL.CART}/${uid}${API_URL.PRODUCTS}/${productId}`,
        data
    );
    return response.data;
};

const apiUpdateCart = async (
    uid: string | undefined,
    data: TUpdateCart
): Promise<TCartResponseWithSuccess> => {
    const response = await axiosConfig.put<TCartResponseWithSuccess>(
        `${API_URL.CART}/${uid}`,
        data
    );
    return response.data;
};

const apiCreateCartByUserId = async (uid: string) => {
    const response = await axiosConfig.post(`${API_URL.CART}/${uid}`);
    return response.data;
};

export const cartService = {
    apiGetCartByUserId,
    apiAddToCart,
    apiDeleteCart,
    apiUpdateCart,
    apiCreateCartByUserId,
};
