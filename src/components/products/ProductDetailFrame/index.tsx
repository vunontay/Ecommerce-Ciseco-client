import { useLocation, useParams } from "react-router-dom";
import "./index.scss";
import { useProduct } from "../../../hooks/useProduct";
import { Accordion, Loading } from "../../ui";
import { memo, useEffect, useState, useCallback } from "react";
import { COLORS, SIZES } from "../../../utils/enum";
import { useCart } from "../../../hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { RootState } from "../../../store";
import { Product } from "../../../types/product-type";
import ProductDetails from "./ProductDetails";
import { DataProductDetailInfo } from "../../../utils/fakeData";
import { addToCart } from "../../../store/cart-slice";
import { ProductInfo } from "./ProductInfo";
import { ProductImage } from "./ProductImage";
import { ProductActions } from "./ProductActions";

interface ProductDetailFrameProps {
    isPage?: boolean;
    productModal?: Product;
}

const ProductDetailFrameComponent = ({
    isPage = false,
    productModal,
}: ProductDetailFrameProps) => {
    const [options, setOptions] = useState<{
        color: (typeof COLORS)[number];
        size: (typeof SIZES)[number];
    }>({
        color: COLORS[0],
        size: SIZES[0],
    });

    const location = useLocation();
    const productState: Product | undefined = location.state?.product;

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | undefined>(productState);

    const { user } = useSelector((state: RootState) => state.user);
    const { product_id } = useParams<{ product_id: string }>();
    const shouldFetchProduct = !productState && isPage && product_id;

    const { isLoading, refetch } = useProduct.useGetProductByProductId(
        shouldFetchProduct ? product_id : ""
    );
    const { mutate: addCart, isPending } = useCart.useAddToCart();
    const dispatch = useDispatch();

    useEffect(() => {
        if (shouldFetchProduct) {
            refetch();
        } else if (!isPage) {
            setProduct(productModal);
        } else {
            setProduct(productState);
        }
    }, [isPage, productModal, productState, refetch, shouldFetchProduct]);

    const handleColorChange = useCallback((color: (typeof COLORS)[number]) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            color,
        }));
    }, []);

    const handleSizeChange = useCallback((size: (typeof SIZES)[number]) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            size,
        }));
    }, []);

    const handleChangeQuantity = useCallback((value: number) => {
        setQuantity(value);
    }, []);

    const handleAddToCart = useCallback(() => {
        if (user) {
            const data = {
                product_id: product?._id || "",
                quantity: quantity,
            };
            dispatch(addToCart({ productId: product?._id || "", quantity }));
            addCart(data);
        } else {
            toast.error("You must be logged in!");
        }
    }, [user, product, quantity, dispatch, addCart]);

    return (
        <div className="product-detail-frame">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <ProductImage product={product} />
                    <div className="product-detail-frame__right">
                        <ProductInfo
                            product={product}
                            options={options}
                            onColorChange={handleColorChange}
                            onSizeChange={handleSizeChange}
                        />
                        <ProductActions
                            product={product}
                            quantity={quantity}
                            onChangeQuantity={handleChangeQuantity}
                            onAddToCart={handleAddToCart}
                            isPending={isPending}
                        />
                        <hr />
                        <Accordion data={DataProductDetailInfo} />
                        {isPage && <ProductDetails />}
                    </div>
                </>
            )}
        </div>
    );
};

export const ProductDetailFrame = memo(ProductDetailFrameComponent);
