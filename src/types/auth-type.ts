import { TSuccess } from ".";
import { TCartDetail } from "./cart-type";

export type TToken = {
    accessToken: string;
    refreshToken: string;
};

export type TRegisterFormValues = {
    userName: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
};

export type TLoginFormValues = {
    userName: string;
    password: string;
};

export type TUser = {
    avatar: {
        url: string;
    };
    _id?: string;
    id?: string;
    userName: string;
    email: string;
    isActive: boolean;
    cart: TCartDetail[];
};

export type TAuthResponse = {
    user: TUser;
    tokenList: TToken;
};

export type TAuthResponseWithSuccess = TAuthResponse & TSuccess;
