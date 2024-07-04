import _ from "lodash";
import queryString from "query-string";
import { FilterProductParams } from "../types/product-type";
import { TQueryParams } from "../types";

export const defaultDistancePrice: string[] = ["0", "500000"];

export const formatMoney = (money: number | string) => {
    return money.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
};

export const getArrayParam = (
    searchParams: URLSearchParams,
    param: string
): string[] => {
    const value = searchParams.get(param);
    return value ? value.split(",") : [];
};

export const validateParams = (params: TQueryParams) => {
    const validatedParams = _.omitBy(params, _.isNil) as FilterProductParams;

    if (_.isEmpty(validatedParams.color)) {
        delete validatedParams.color;
    }
    if (_.isEmpty(validatedParams.size)) {
        delete validatedParams.size;
    }

    if (_.isEqual(validatedParams.distancePrice, defaultDistancePrice)) {
        delete validatedParams.distancePrice;
    }

    return validatedParams;
};

export const buildQueryString = (params: TQueryParams) => {
    return queryString.stringify(params, { arrayFormat: "comma" });
};
