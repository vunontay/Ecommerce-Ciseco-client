import { useReducer, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";
import { defaultDistancePrice } from "../utils/util";
import { TFilterAction, TFilterState } from "../types/product-type";

const initialState: TFilterState = {
    offset: 1,
    limit: 9,
    sortType: undefined,
    sortField: undefined,
    color: [],
    size: [],
    distancePrice: defaultDistancePrice,
    category_id: undefined,
};

function reducer(state: TFilterState, action: TFilterAction): TFilterState {
    switch (action.type) {
        case "SET_OFFSET":
            return { ...state, offset: action.payload };
        case "SET_LIMIT":
            return { ...state, limit: action.payload };
        case "SET_SORT_TYPE":
            return { ...state, sortType: action.payload };
        case "SET_SORT_FIELD":
            return { ...state, sortField: action.payload };
        case "SET_COLOR":
            return { ...state, color: action.payload };
        case "SET_SIZE":
            return { ...state, size: action.payload };
        case "SET_DISTANCE_PRICE":
            return { ...state, distancePrice: action.payload };
        case "SET_CATEGORY_ID":
            return { ...state, category_id: action.payload };
        case "APPLY_ARRAY_FILTER":
            return {
                ...state,
                [action.payload.category]: _.xor(
                    state[action.payload.category],
                    [action.payload.value]
                ),
            };
        case "RESET_FILTERS":
            return initialState;
        default:
            throw new Error(`Unknown action type`);
    }
}

export const useFilterProduct = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, dispatch] = useReducer(reducer, initialState);

    const categoryId = searchParams.get("category_id");
    useEffect(() => {
        if (categoryId) {
            dispatch({ type: "SET_CATEGORY_ID", payload: categoryId });
        }
    }, [categoryId]);

    useEffect(() => {
        const params = new URLSearchParams();
        params.set("offset", filter.offset.toString());
        params.set("limit", filter.limit.toString());
        if (filter.sortType) {
            params.set("sortType", filter.sortType);
        }
        if (filter.sortField) {
            params.set("sortField", filter.sortField);
        }
        if (!_.isEmpty(filter.color)) {
            params.set("color", filter.color.join(","));
        }
        if (!_.isEmpty(filter.size)) {
            params.set("size", filter.size.join(","));
        }
        if (!_.isEmpty(filter.distancePrice)) {
            params.set("distancePrice", filter.distancePrice.join(","));
        }

        setSearchParams(params);
    }, [filter, setSearchParams, searchParams]);

    const applyArrayFilter = ({
        category,
        value,
    }: {
        category: "color" | "size";
        value: string;
    }) => {
        dispatch({ type: "APPLY_ARRAY_FILTER", payload: { category, value } });
    };

    const applyRangeFilter = (distancePrice: { min: string; max: string }) => {
        dispatch({
            type: "SET_DISTANCE_PRICE",
            payload: [distancePrice.min, distancePrice.max],
        });
    };

    const setPage = (page: number) => {
        dispatch({ type: "SET_OFFSET", payload: page });
    };

    const setSortField = (sortField: string) => {
        dispatch({ type: "SET_SORT_FIELD", payload: sortField });
    };

    const setSortType = (sortType: string) => {
        dispatch({ type: "SET_SORT_TYPE", payload: sortType });
    };

    const setCategory = (categoryId: string) => {
        dispatch({ type: "SET_CATEGORY_ID", payload: categoryId });
    };

    const resetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
        setSearchParams({});
    };

    return {
        filter,
        applyArrayFilter,
        applyRangeFilter,
        setPage,
        setSortField,
        setSortType,
        setCategory,
        resetFilters,
    };
};
