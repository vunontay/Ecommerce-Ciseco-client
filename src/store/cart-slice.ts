import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartDetail } from "../types/cart-type";

interface CartState {
    cart: TCartDetail[] | null;
    totalQuantity: number;
}

const initialState: CartState = {
    cart: [],
    totalQuantity: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartTotal: (state) => {
            if (state.cart) {
                const totalQuantity = state.cart.reduce(
                    (acc, cartItem) => acc + cartItem.quantity,
                    0
                );
                state.totalQuantity = totalQuantity;
            }
        },
        setCart: (state, action) => {
            state.cart = action.payload.cart_details
                ? action.payload.cart_details
                : null;
        },
        resetCart: (state) => {
            state.cart = null;
            state.totalQuantity = 0;
        },
        addToCart: (
            state,
            action: PayloadAction<{ productId: string; quantity: number }>
        ) => {
            if (state.cart) {
                const itemIndex = state.cart.findIndex(
                    (item) => item.product_id === action.payload.productId
                );
                if (itemIndex !== -1) {
                    state.cart[itemIndex].quantity += action.payload.quantity;
                } else {
                    state.cart.push({
                        product_id: action.payload.productId,
                        quantity: action.payload.quantity,
                        isActive: true,
                    });
                }
            } else {
                state.cart = [
                    {
                        product_id: action.payload.productId,
                        quantity: action.payload.quantity,
                        isActive: true,
                    },
                ];
            }
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ productId: string; quantity: number }>
        ) => {
            if (state.cart) {
                const itemIndex = state.cart.findIndex(
                    (item) => item.product_id === action.payload.productId
                );
                if (itemIndex !== -1) {
                    state.cart[itemIndex].quantity = action.payload.quantity;
                }
            }
        },
        removeCartItem: (
            state,
            action: PayloadAction<{ productId: string }>
        ) => {
            if (state.cart) {
                state.cart = state.cart.filter(
                    (item) => item.product_id !== action.payload.productId
                );
            }
        },
    },
});

export const {
    setCart,
    addToCart,
    updateQuantity,
    removeCartItem,
    getCartTotal,
    resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
