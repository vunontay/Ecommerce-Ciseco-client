interface IImage {
    url: string;
    public_id: string;
    _id: string;
}

interface IDimensions {
    length: number;
    width: number;
    weight: number;
    height: number;
}

interface ICategory {
    _id: string;
    code: string;
    name: string;
    total: number;
    description: string;
    __v: number;
    path: string;
    isActive: boolean;
}

interface IAttributeProduct {
    code: string;
    name: string;
    value: string;
    avaiable: number;
}

export type TProductListResponse = {
    success: boolean;
    status: number;
    message: string;
    product?: Product;
    list?: Product[];
    list_product?: Product[];
    products?: Product[];
    params: {
        limit: string;
        page: string;
        totalPage: string;
    };
};
export type Product = {
    _id: string;
    code: string;
    name: string;
    images: IImage[];
    price: number;
    avaiable: number;
    description: string;
    tags: string[];
    brand: string;
    dimensions: IDimensions;
    category: ICategory | null;
    isActive: boolean;
    __v: number;
    attribute_product: IAttributeProduct[];
};

export type FilterProductParams = {
    offset?: string | number;
    limit?: string | number;
    sortField?: string;
    sortType?: string;
    category_id?: string;
    brand?: string;
    distancePrice?: string | string[];
    color?: string | string[];
    size?: string | string[];
    tags?: string;
    keywords?: string;
    searchType?: string;
};

export type OptionsFilter = {
    value: string;
    label: string;
};

export type TFilterState = {
    offset: number;
    limit: number;
    sortType?: string;
    sortField?: string;
    color: string[];
    size: string[];
    distancePrice: string[];
    category_id?: string;
};

export type TFilterAction =
    | { type: "SET_OFFSET"; payload: number }
    | { type: "SET_LIMIT"; payload: number }
    | { type: "SET_SORT_TYPE"; payload: string }
    | { type: "SET_SORT_FIELD"; payload: string }
    | { type: "SET_COLOR"; payload: string[] }
    | { type: "SET_SIZE"; payload: string[] }
    | { type: "SET_DISTANCE_PRICE"; payload: string[] }
    | { type: "SET_CATEGORY_ID"; payload: string }
    | {
          type: "APPLY_ARRAY_FILTER";
          payload: { category: "color" | "size"; value: string };
      }
    | { type: "RESET_FILTERS" };
