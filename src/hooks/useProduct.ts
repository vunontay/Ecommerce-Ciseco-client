import {
    UseQueryResult,
    keepPreviousData,
    useQuery,
} from "@tanstack/react-query";
import productService from "../services/product-service";
import {
    FilterProductParams,
    Product,
    TProductListResponse,
} from "../types/product-type";

const useGetAllProduct = (
    offset: string | number,
    limit: string | number
): UseQueryResult<Product[]> => {
    return useQuery({
        queryKey: ["products", offset, limit],
        queryFn: () => productService.getAllProduct(offset, limit),
        select: ({ data }) => data?.list || [],
        retry: false,
        staleTime: 3600000,
        refetchInterval: 60 * 60 * 1000,
    });
};

const useGetProductByProductId = (
    id: string
): UseQueryResult<TProductListResponse> => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => productService.getProductById(id),
        select: ({ data }) => data || [],
        retry: false,
        staleTime: Infinity,
        enabled: !!id,
    });
};

const useGetProductsByIds = (ids: string[]): UseQueryResult<Product[]> => {
    return useQuery<Product[], Error>({
        queryKey: ["product ids", ids],
        queryFn: async () => {
            const response = await productService.getProductIds(ids);
            const products = response.flatMap(
                (axiosResponse) => axiosResponse.data?.product || []
            );
            return products as Product[];
        },
        retry: false,
        staleTime: Infinity,
    });
};
const useFilterProductByParams = (
    params: FilterProductParams
): UseQueryResult<TProductListResponse> => {
    return useQuery({
        queryKey: ["products", params],
        queryFn: () => productService.filterProductByParams(params),
        select: ({ data }) => data || [],
        retry: false,
        staleTime: 0,
        placeholderData: keepPreviousData,
    });
};

const useGetProductByName = (
    name: string
): UseQueryResult<TProductListResponse> => {
    return useQuery({
        queryKey: ["product", name],
        queryFn: () => productService.searchProductByName(name),
        select: ({ data }) => data || [],
        retry: false,
        staleTime: Infinity,
        enabled: !!name,
    });
};

export const useProduct = {
    useGetAllProduct,
    useFilterProductByParams,
    useGetProductByProductId,
    useGetProductsByIds,
    useGetProductByName,
};
