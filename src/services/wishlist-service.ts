import {
    TValueWishlist,
    TWishlistResponseWithSuccess,
} from "../types/wishlist-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";

const addWishlist = async (
    uid: string,
    data: TValueWishlist
): Promise<TWishlistResponseWithSuccess> => {
    const response = await axiosConfig.put<TWishlistResponseWithSuccess>(
        `${API_URL.WISHLIST}/${uid}`,
        data
    );
    return response.data;
};

const getWishlistByUserId = async (
    uid: string
): Promise<TWishlistResponseWithSuccess> => {
    const response = await axiosConfig.get<TWishlistResponseWithSuccess>(
        `${API_URL.WISHLIST}/${uid}`
    );
    return response.data;
};

const deleteWishlist = async (
    uid: string,
    data: TValueWishlist
): Promise<TWishlistResponseWithSuccess> => {
    const response = await axiosConfig.delete<TWishlistResponseWithSuccess>(
        `${API_URL.WISHLIST}/${uid}`,
        {
            data: data,
        }
    );
    return response.data;
};

const createWishlist = async (
    uid: string,
    data: TValueWishlist
): Promise<TWishlistResponseWithSuccess> => {
    const response = await axiosConfig.post<TWishlistResponseWithSuccess>(
        `${API_URL.WISHLIST}/${uid}`,
        data
    );
    return response.data;
};

export const wishlistService = {
    addWishlist,
    deleteWishlist,
    getWishlistByUserId,
    createWishlist,
};
