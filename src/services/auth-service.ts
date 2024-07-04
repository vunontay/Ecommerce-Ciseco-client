import {
    TAuthResponseWithSuccess,
    TLoginFormValues,
    TRegisterFormValues,
} from "../types/auth-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";

const apiLogin = async (
    data: TLoginFormValues
): Promise<TAuthResponseWithSuccess> => {
    const response = await axiosConfig.post<TAuthResponseWithSuccess>(
        API_URL.LOGIN,
        data
    );
    return response.data;
};

const apiGetUserById = async (
    uid: string | undefined
): Promise<TAuthResponseWithSuccess> => {
    const response = await axiosConfig.get(`${API_URL.GET_USER}${uid}`);
    return response.data;
};

const apiRegister = async (
    data: TRegisterFormValues
): Promise<TAuthResponseWithSuccess> => {
    const response = await axiosConfig.post<TAuthResponseWithSuccess>(
        API_URL.REGISTER,
        data
    );
    return response.data;
};

const authService = {
    apiLogin,
    apiGetUserById,
    apiRegister,
};

export default authService;
