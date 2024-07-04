import { useQuery } from "@tanstack/react-query";
import categoryService from "../services/category-service";

const useGetCategoryTree = () => {
    return useQuery({
        queryKey: ["categoryTree"],
        queryFn: () => categoryService.apiGetCategoryTree(),
        select: ({ tree }) => tree || [],
        retry: false,
        staleTime: Infinity,
    });
};

export const useCategory = {
    useGetCategoryTree,
};
