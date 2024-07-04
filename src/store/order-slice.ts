import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOderDetails } from "../types/order-type";

interface OrderState {
    paymentMethod: string;
    orderDetail: TOderDetails | null;
}
const initialState: OrderState = {
    paymentMethod: "",
    orderDetail: null,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setPaymentMethod: (state, action: PayloadAction<string>) => {
            state.paymentMethod = action.payload;
        },
        setOrderDetail: (state, action: PayloadAction<null | TOderDetails>) => {
            state.orderDetail = action.payload;
        },
        resetOrder: (state) => {
            state.paymentMethod = "";
            state.orderDetail = null;
        },
    },
});

export const { setPaymentMethod, setOrderDetail, resetOrder } =
    orderSlice.actions;

export default orderSlice.reducer;
