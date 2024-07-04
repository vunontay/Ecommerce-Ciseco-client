import { API_URL } from "../utils/constant";
import axiosConfig from "./axios-config";
import { TCategoryTreeResponseWithSuccess } from "../types/category-type";

class CategoryService {
    async apiGetCategoryTree(): Promise<TCategoryTreeResponseWithSuccess> {
        const response =
            await axiosConfig.get<TCategoryTreeResponseWithSuccess>(
                `${API_URL.CATEGORY}/tree_category`
            );
        return response.data;
    }
}

export default new CategoryService();
