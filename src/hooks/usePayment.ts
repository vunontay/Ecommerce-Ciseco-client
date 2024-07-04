import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiPayment } from "../services/payment-service";
import { TPaymentData } from "../types/payment-type";
import { useDispatch } from "react-redux";
import { resetOrder } from "../store/order-slice";

const usePaymentOnline = () => {
    const dispatch = useDispatch();
    const paymentOnlineMutation = useMutation({
        mutationFn: async ({ orderId, data }: TPaymentData) => {
            return await apiPayment.apiPaymentOnline(orderId, data);
        },
        onSuccess: (response) => {
            toast.success(response.message);
            dispatch(resetOrder());
            window.location.href = response.vpnUrl;
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return paymentOnlineMutation;
};

export const usePayment = {
    usePaymentOnline,
};
