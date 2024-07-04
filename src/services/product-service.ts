import { AxiosResponse } from "axios";
import {
    FilterProductParams,
    TProductListResponse,
} from "../types/product-type";
import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";
import { buildQueryString, validateParams } from "../utils/util";

class ProductService {
    async getAllProduct(
        offset: string | number,
        limit: string | number
    ): Promise<AxiosResponse<TProductListResponse>> {
        const response = await axiosConfig.get<TProductListResponse>(
            `${API_URL.PRODUCTS}?offset=${offset}&limit=${limit}`
        );
        return response;
    }

    async getProductById(
        id: string
    ): Promise<AxiosResponse<TProductListResponse>> {
        const response = await axiosConfig.get<TProductListResponse>(
            `${API_URL.PRODUCTS}/${id}`
        );
        return response;
    }

    async getProductIds(
        ids: string[]
    ): Promise<AxiosResponse<TProductListResponse>[]> {
        const promises = ids.map((id) =>
            axiosConfig.get<TProductListResponse>(`${API_URL.PRODUCTS}/${id}`)
        );

        const responses = await Promise.allSettled(promises);

        const successfulResponses = responses
            .filter((result) => result.status === "fulfilled")
            .map(
                (result) =>
                    (
                        result as PromiseFulfilledResult<
                            AxiosResponse<TProductListResponse>
                        >
                    ).value
            );

        return successfulResponses;
    }

    async filterProductByParams(
        params: FilterProductParams
    ): Promise<AxiosResponse<TProductListResponse>> {
        const validatedParams = validateParams(params);
        const queryString = buildQueryString(validatedParams);
        const url = `${API_URL.PRODUCTS}/filter?${queryString}`;
        const response = await axiosConfig.get<TProductListResponse>(url);
        return response;
    }

    async searchProductByName(
        name: string
    ): Promise<AxiosResponse<TProductListResponse>> {
        const response = await axiosConfig.get<TProductListResponse>(
            `${API_URL.PRODUCTS}/search?code=&name=${name}`
        );
        return response;
    }
}

export default new ProductService();
