import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { wishlistService } from "../services/wishlist-service";
import { TValueWishlist } from "../types/wishlist-type";
import toast from "react-hot-toast";
import { has } from "lodash";
import { TError } from "../types";
const useAddToWishlist = () => {
    const queryClient = useQueryClient();
    const { user } = useSelector((state: RootState) => state?.user);
    const { mutate: createWishList } = useWishlist.useCreateWishlist();
    const uid = user?._id || "";

    const addWishlistMutation = useMutation({
        mutationFn: async (data: TValueWishlist) => {
            return await wishlistService.addWishlist(uid, data);
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error: TError, variables) => {
            if (
                error.status === 500 &&
                error.message === "Add product failed"
            ) {
                createWishList(variables, {
                    onSuccess: () => {
                        queryClient.invalidateQueries({
                            queryKey: ["wishlist"],
                        });
                    },
                });
            } else {
                toast.error(error.message);
            }
        },
    });

    return addWishlistMutation;
};

const useCreateWishlist = () => {
    const { user } = useSelector((state: RootState) => state?.user);
    const createWishlistMutation = useMutation({
        mutationFn: async (data: TValueWishlist) => {
            const uid = user?._id || "";
            return await wishlistService.createWishlist(uid, data);
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return createWishlistMutation;
};

const useGetWishList = () => {
    const { user } = useSelector((state: RootState) => state?.user);
    const uid = user?._id || "";
    return useQuery({
        queryKey: ["wishlist", uid],
        queryFn: () => wishlistService.getWishlistByUserId(uid),
        select: (data) => data.productLiked,
        retry: false,
        staleTime: Infinity,
        enabled: !!uid && has(user, "productLiked"),
    });
};

const useDeleteWishlist = () => {
    const { user } = useSelector((state: RootState) => state?.user);
    const deleteMutation = useMutation({
        mutationFn: async (data: TValueWishlist) => {
            const uid = user?._id || "";
            return await wishlistService.deleteWishlist(uid, data);
        },
        onSuccess: (response) => {
            toast.success(response.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return deleteMutation;
};

export const useWishlist = {
    useAddToWishlist,
    useGetWishList,
    useDeleteWishlist,
    useCreateWishlist,
};
