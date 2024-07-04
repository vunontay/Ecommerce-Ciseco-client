import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "../services/auth-service";
import { setUser } from "../store/user-slice";
import { TAuthResponseWithSuccess } from "../types/auth-type";
import { TError } from "../types";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../utils/constant";

const useUserQuery = (
    uid: string | undefined
): UseQueryResult<TAuthResponseWithSuccess, TError> => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userQuery = useQuery<TAuthResponseWithSuccess, TError>({
        queryKey: ["user", uid],
        queryFn: () => authService.apiGetUserById(uid),
        enabled: uid !== undefined,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (userQuery.data?.user) {
            dispatch(setUser(userQuery.data.user));
            navigate(ROUTE.INDEX);
        } else if (userQuery.isError) {
            console.log(userQuery.error?.message);
        }
    }, [userQuery, dispatch, navigate]);

    return userQuery;
};

export const useUser = {
    useUserQuery,
};
