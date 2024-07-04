import { useMutation, useQuery } from "@tanstack/react-query";
import { orderService } from "../services/order-service";
import toast from "react-hot-toast";
import { TOderData } from "../types/order-type";
import { useDispatch } from "react-redux";
import { setOrderDetail } from "../store/order-slice";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const useCreateOrder = () => {
    const dispatch = useDispatch();

    const createOrderMutation = useMutation({
        mutationFn: async (orderData: TOderData) => {
            return await orderService.apiCreateOrder(orderData);
        },
        onSuccess: (response) => {
            dispatch(setOrderDetail(response.newOrder));
            toast.success(response.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return createOrderMutation;
};

const useGetOrder = () => {
    const { user } = useSelector((state: RootState) => state?.user);
    const uid = user?._id || "";
    return useQuery({
        queryKey: ["orders", uid],
        queryFn: () => orderService.apiGetOrderByUserId(uid),
        select: (order) => order || [],
        retry: false,
        staleTime: Infinity,
    });
};

export const useOrder = {
    useCreateOrder,
    useGetOrder,
};
