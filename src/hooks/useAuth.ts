import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth-service";
import { tokenService } from "../services/token-service";
import { ROUTE } from "../utils/constant";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import {
    TAuthResponseWithSuccess,
    TLoginFormValues,
    TRegisterFormValues,
} from "../types/auth-type";
import { TError } from "../types";
import { useDispatch } from "react-redux";
import { setCart } from "../store/cart-slice";
import { useCart } from "./useCart";

export const useAuth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mutate: createCart } = useCart.useCreateCartUser();
    const loginMutation = useMutation<
        TAuthResponseWithSuccess,
        TError,
        TLoginFormValues
    >({
        mutationFn: authService.apiLogin,
        onSuccess: async (response: TAuthResponseWithSuccess) => {
            dispatch(setCart(response.user.cart));
            toast.success(response.message);
            tokenService().setTokenList(response.tokenList);
        },
        onError: (error: TError) => {
            toast.error(error.message);
        },
    });

    const registerMutation = useMutation<
        TAuthResponseWithSuccess,
        TError,
        TRegisterFormValues
    >({
        mutationFn: authService.apiRegister,
        onSuccess: (response: TAuthResponseWithSuccess) => {
            console.log(response);
            tokenService().setTokenList(response.tokenList);
            toast.success(`${response.message}`);
            navigate(ROUTE.LOGIN);
            createCart(response.user._id || "");
        },
        onError: (error: TError) => {
            toast.error(error.message);
        },
    });

    return {
        loginMutation,
        registerMutation,
    };
};
