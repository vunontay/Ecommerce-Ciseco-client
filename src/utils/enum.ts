export const COLORS = [
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "purple", label: "Purple" },
    { value: "pink", label: "Pink" },
] as const;
export const SIZES = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "2XL", label: "2XL" },
    { value: "3XL", label: "3XL" },
] as const;

export const COLOR_FILTERS = {
    id: "color",
    name: "Color",
    options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
    ],
};

export const SIZE_FILTERS = {
    id: "size",
    name: "Size",
    options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
    ],
};

export const SORT_TYPE_FILTERS = {
    id: "sortType",
    name: "sortType",
    options: [
        { value: "1", label: "Ascending" },
        { value: "-1", label: "Descending" },
    ],
};

export const SORT_FILED_FILTERS = {
    id: "sortField",
    name: "sortField",
    options: [
        { value: "name", label: "Name" },
        { value: "price", label: "Price" },
    ],
};

export const PRICE_FILTERS = {
    id: "price",
    name: "Price",
    options: [
        { value: [0, 500000], label: "Any price" },
        {
            value: [0, 20],
            label: "Under 20€",
        },
        {
            value: [0, 40],
            label: "Under 40€",
        },
    ],
};

export const SHIPPING_PRICE = 15000;
export const TAX_PRICE = 5;
