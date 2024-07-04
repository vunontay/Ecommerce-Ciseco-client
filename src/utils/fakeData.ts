import hsl1 from "../assets/images/home_slide1.webp";
import hsl2 from "../assets/images/home_slide2.webp";
// import hsl3 from "../assets/images/home_slide3.png";

import discover_img1 from "../assets/images/discover_img1.webp";
import discover_img2 from "../assets/images/discover_img2.webp";
import discover_img3 from "../assets/images/discover_img3.webp";
import discover_img4 from "../assets/images/discover_img4.webp";

import homeHot1 from "../assets/images/homeHot1.webp";
import homeHot2 from "../assets/images/homeHot2.webp";
import homeHot3 from "../assets/images/homeHot3.webp";
import homeHot4 from "../assets/images/homeHot4.webp";

import explore1 from "../assets/images/explore1.png";
import explore2 from "../assets/images/explore2.png";
import explore3 from "../assets/images/explore3.png";
import explore5 from "../assets/images/explore5.png";
import explore6 from "../assets/images/explore6.png";
import explore9 from "../assets/images/explore9.png";

import explore_bg1 from "../assets/images/explore_bg1.svg";
import explore_bg2 from "../assets/images/explore_bg2.svg";
import explore_bg3 from "../assets/images/explore_bg3.svg";
import explore_bg4 from "../assets/images/explore_bg4.svg";
import explore_bg5 from "../assets/images/explore_bg5.svg";
import explore_bg6 from "../assets/images/explore_bg6.svg";
import { ROUTE } from "./constant";

export const HomeSlide = [
    {
        id: 1,
        url: hsl1,
        title: "In this season, find the best 🔥",
        description: "Exclusive collection for everyone",
    },
    {
        id: 2,
        url: hsl2,
        title: "In this season, find the best 🔥",
        description: "Exclusive collection for everyone",
    },
    // {
    //     id: 3,
    //     url: hsl3,
    //     title: "In this season, find the best 🔥",
    //     description: "Exclusive collection for everyone",
    // },
];

export const DiscoverList = [
    {
        color: "#fefce8",
        title: "Explore new arrivals",
        description: "Shop the latest from top brands",
        url: discover_img3,
    },
    {
        color: "#fef2f2",
        title: "Digital gift cards",
        description: "Give the gift of choice",
        url: discover_img2,
    },
    {
        color: "#eff6ff",
        title: "Sale collection",
        description: "Up to 80% off retail",
        url: discover_img1,
    },
    {
        color: "#f0fdf4",
        title: "Sale collection",
        description: "Up to 80% off retail",
        url: discover_img4,
    },
];

export const HowItWorkList = [
    {
        color: "#991e1b",
        bg_color: "#fee2e2",
        step: "step 1",
        img: homeHot3,
        title: "Filter & Discover",
        desc: "Smart filtering and suggestions make it easy to find",
    },
    {
        color: "#6333a3",
        bg_color: "#e0e7ff",
        step: "step 2",
        img: homeHot1,
        title: "Add to bag",
        desc: "Easily select the correct items and add them to the cart",
    },
    {
        color: "#854d0e",
        bg_color: "#fef9c3",
        step: "step 3",
        img: homeHot4,
        title: "Fast shipping",
        desc: "The carrier will confirm and ship quickly to you",
    },
    {
        color: "#7857cf",
        bg_color: "#f3e8ff",
        step: "step 4",
        img: homeHot2,
        title: "Enjoy the product",
        desc: "Have fun and enjoy your 5-star quality products",
    },
];

export const ExploreList = [
    {
        category: "bags",
        img: explore1,
        bg_img: "#eef2ff",
        bg_main: explore_bg1,
        product_quantity: "155",
        title: "Backpack",
    },
    {
        category: "shoes",
        img: explore2,
        bg_img: "#f4f7fa",
        bg_main: explore_bg2,
        product_quantity: "22",
        title: "Shoes",
    },
    {
        category: "blanket",
        img: explore3,
        bg_img: "#f5f3ff",
        bg_main: explore_bg3,
        product_quantity: "144",
        title: "Recycled Blanket",
    },
    {
        category: "shorts",
        img: explore5,
        bg_img: "#eef2ff",
        bg_main: explore_bg4,
        product_quantity: "343",
        title: "Cycling Shorts",
    },
    {
        category: "jersey",
        img: explore6,
        bg_img: "#eff6ff",
        bg_main: explore_bg5,
        product_quantity: "222",
        title: "Cycling Jersey",
    },
    {
        category: "coat",
        img: explore9,
        bg_img: "#fff7ed ",
        bg_main: explore_bg6,
        product_quantity: "155",
        title: "Car Coat",
    },
];

export const DataProductDetailInfo = [
    {
        _id: 1,
        title: "Description",
        contents: [
            {
                title: "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
            },
        ],
    },
    {
        _id: 2,
        title: "Fabric + Care",
        contents: [
            {
                title: "Made from a sheer Belgian power micromesh.",
            },
            {
                title: "74% Polyamide (Nylon) 26% Elastane (Spandex)",
            },
            {
                title: "Adjustable hook & eye closure and straps",
            },
            {
                title: "Hand wash in cold water, dry flat",
            },
        ],
    },
    {
        _id: 3,
        title: "How it Fits",
        contents: [
            {
                title: "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
            },
        ],
    },
    {
        _id: 4,
        title: "FAQ",
        contents: [
            {
                title: "All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.",
            },
            {
                title: "Please note, packs must be returned in full. We do not accept partial returns of packs.",
            },
            { title: "Want to know our full returns policies? Here you go." },
            {
                title: "Want more info about shipping, materials or care instructions? Here!",
            },
        ],
    },
];

export const ListBenefit = [
    {
        icon: "hugeicons:container-truck",
        title: "Free shipping",
        desc: "On orders over $50.00",
        color: "#fef2f2",
    },
    {
        icon: "hugeicons:card-exchange-02",
        title: "Very easy to return",
        desc: "Just phone number.",
        color: "#f0f9ff",
    },
    {
        icon: "clarity:world-line",
        title: "Nationwide Delivery",
        desc: "Fast delivery nationwide.",
        color: "#f0fdf4",
    },
    {
        icon: "ri:refund-2-line",
        title: "Refunds policy",
        desc: "60 days return for any reason",
        color: "#fffbeb",
    },
];

export const TabAccountData = [
    {
        id: 1,
        title: "Account info",
        path: ROUTE.ACCOUNT,
    },
    {
        id: 2,
        title: "Save lists",
        path: ROUTE.WISHLIST,
    },
    {
        id: 3,
        title: "My order",
        path: ROUTE.ACCOUNT_ORDER,
    },
];
