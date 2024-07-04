import * as yup from "yup";

export const AVAILABLE_SIZES = ["S", "M", "L"] as const;
export const AVAILABLE_COLORS = [
    "white",
    "beige",
    "green",
    "purple",
    "blue",
] as const;
export const AVAILABLE_SORT_FIELD = [
    "none",
    "price-asc",
    "price-desc",
] as const;
export const AVAILABLE_SORT_TYPE = ["1", "-1"] as const;

export const ProductFilterValidator = yup.object({
    offset: yup.number().integer().required(),
    limit: yup.number().integer().required(),
    size: yup.array(yup.mixed().oneOf([...AVAILABLE_SIZES])),
    color: yup.array(yup.mixed().oneOf([...AVAILABLE_COLORS])),
    sortField: yup.mixed().oneOf([...AVAILABLE_SORT_FIELD]),
    sortType: yup.mixed().oneOf([...AVAILABLE_SORT_TYPE]),
    price: yup.object().shape({
        isCustom: yup.boolean().required(),
        range: yup.array().of(yup.number().required()).required(),
    }),
});

export type ProductState = Omit<
    yup.InferType<typeof ProductFilterValidator>,
    "price"
> & {
    price: { isCustom: boolean; range: [number, number] };
};
