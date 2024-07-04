import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE } from "../utils/constant";
import { Loading } from "../components/ui";

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ProductDetail = lazy(() => import("../pages/Detail"));
const Account = lazy(() => import("../pages/Account"));
const AccountInfo = lazy(() => import("../pages/Account/AccountInfo"));
const AccountWishlist = lazy(() => import("../pages/Account/AccountWishlist"));
const AccountOrder = lazy(() => import("../pages/Account/AccountOrder"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));
const MainLayout = lazy(() => import("../layouts/main-layout"));
const ProtectedRoute = lazy(() => import("./protected-route"));

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTE.INDEX} element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path={ROUTE.LOGIN} element={<Login />} />
                        <Route path={ROUTE.REGISTER} element={<Register />} />
                        <Route path={ROUTE.ABOUT} element={<About />} />
                        <Route path={ROUTE.CONTACT} element={<Contact />} />
                        <Route path={ROUTE.BLOG} element={<Blog />} />
                        <Route element={<Account />}>
                            <Route
                                path={ROUTE.ACCOUNT}
                                element={<AccountInfo />}
                            />
                            <Route
                                path={ROUTE.WISHLIST}
                                element={<AccountWishlist />}
                            />
                            <Route
                                path={ROUTE.ACCOUNT_ORDER}
                                element={<AccountOrder />}
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                        <Route
                            path={`${ROUTE.PRODUCT_COLLECTION}`}
                            element={<Product />}
                        />
                        <Route
                            path={`${ROUTE.PRODUCT_DETAIL}/:product_id`}
                            element={<ProductDetail />}
                        />
                        <Route element={<ProtectedRoute />}>
                            <Route path={ROUTE.CART} element={<Cart />} />
                            <Route
                                path={ROUTE.CHECKOUT}
                                element={<Checkout />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
export default Router;
