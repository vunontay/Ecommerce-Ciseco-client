import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/auth-type";
import { tokenService } from "../services/token-service";

interface UserState {
    user: TUser | null;
}
const initialState: UserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TUser | null>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            const { removeTokenList } = tokenService();
            removeTokenList();
            state.user = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
