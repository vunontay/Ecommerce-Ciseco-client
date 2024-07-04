import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getArrayParam = (param: string): string[] => {
        const value = searchParams.get(param);
        return value ? value.split(",") : [];
    };

    const updateSearchParams = (params: URLSearchParams) => {
        setSearchParams(params);
    };

    return { searchParams, getArrayParam, updateSearchParams };
};
