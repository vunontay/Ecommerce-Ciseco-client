// [APP ROUTE]
export const ROUTE = {
    //MAIN
    INDEX: "/",
    COLLECTION: "/collection",
    CART: "/cart",
    CHECKOUT: "/checkout",
    NOT_FOUND: "/not-found",
    PRODUCT_DETAIL: "/product-detail",
    COMPONENT: "/component",

    //Authentication
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-pass",

    //Authorziations
    ACCOUNT: "/account",
    WISHLIST: "/account/wishlist",
    ACCOUNT_ORDER: "/account/order",
    ACCOUNT_CHANGE_PASS: "/account/password",
    ACCOUNT_BILLING: "/account/billing",

    //OTHERS
    COLLECTION_SEARCH: "/collection/search",
    COLLECTION_ALL: "collection/all",
    COLLECTION_MEN: "/collection/men",
    COLLECTION_WOMAN: "/collection/woman",
    COLLECTION_BEAUTY: "/collection/beauty",
    ABOUT: "/about",
    CONTACT: "/contact",

    //BLOG
    BLOG: "/blog",
    BLOG_DETAIL: "blog/detail",

    // PRODUCTS
    PRODUCT_COLLECTION: "/collection",
};

export const API_URL = {
    //Authentication
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    REFRESH_TOKEN: "/auth/accessToken-generate",
    GET_USER: "/users/",

    // Product

    PRODUCTS: "/products",

    // Cart
    CART: "/carts",

    // Wishlist

    WISHLIST: "/productLiked",

    // Categories

    CATEGORY: "/categorys",

    // ORDER
    ORDER: "/orders/",

    // PAYMENTS
    PAYMENT_ONLINE: "/payment_online",
};

export const PAYMENTS_METHOD = {
    ONLINE: "Pay with vnpay",
    OFFLINE: "Cash on delivery",
};
