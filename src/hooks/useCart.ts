import { useMutation, useQuery } from "@tanstack/react-query";
import {
    TCartResponseWithSuccess,
    TCartItem,
    TAddCart,
    TUpdateCart,
} from "../types/cart-type";
import { TError } from "../types";
import { cartService } from "../services/cart-service";
import { useDispatch } from "react-redux";
import { setCart } from "../store/cart-slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import toast from "react-hot-toast";

const useGetCartByUserId = (uid: string | undefined) => {
    const dispatch = useDispatch();

    const cartQuery = useQuery<TCartResponseWithSuccess, TError, TCartItem>({
        queryKey: ["products", uid],
        queryFn: () => cartService.apiGetCartByUserId(uid),
        select: (data) => data.cart,
        enabled: !!uid,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (cartQuery.data) {
            dispatch(setCart(cartQuery.data));
        }
    }, [cartQuery.data, dispatch]);

    return cartQuery;
};

const useAddToCart = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const addToCartMutation = useMutation<
        TCartResponseWithSuccess,
        TError,
        TAddCart
    >({
        mutationFn: async (data) => {
            const userId = user?._id;
            if (!userId) {
                throw new Error("Please login to add to cart");
            }
            return await cartService.apiAddToCart(
                userId,
                data.product_id,
                data
            );
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error) => {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unknown error occurred");
            }
        },
    });

    return addToCartMutation;
};

const useDeleteCart = () => {
    const { user } = useSelector((state: RootState) => state?.user);

    const deleteCartMutation = useMutation<
        TCartResponseWithSuccess,
        TError,
        string
    >({
        mutationFn: async (productId: string) => {
            const userId = user?._id || "";
            return await cartService.apiDeleteCart(userId, productId);
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return deleteCartMutation;
};

const useUpdateCart = () => {
    const { user } = useSelector((state: RootState) => state?.user);

    const updateCartMutation = useMutation<
        TCartResponseWithSuccess,
        TError,
        TUpdateCart
    >({
        mutationFn: async (data) => {
            const userId = user?._id || "";
            return await cartService.apiUpdateCart(userId, data);
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return updateCartMutation;
};

const useCreateCartUser = () => {
    const createCartMutation = useMutation({
        mutationFn: (uid: string) => cartService.apiCreateCartByUserId(uid),
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return createCartMutation;
};

export const useCart = {
    useGetCartByUserId,
    useAddToCart,
    useDeleteCart,
    useUpdateCart,
    useCreateCartUser,
};
