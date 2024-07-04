import "./index.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, IconButton } from "../../ui";
import { formatMoney } from "../../../utils/util";
import { Product } from "../../../types/product-type";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../utils/constant";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import toast from "react-hot-toast";
import { useWishlist } from "../../../hooks/useWishlist";
import { memo, useMemo } from "react";
import _ from "lodash";

type ProductCardType = Omit<
    Product,
    | "avaiable"
    | "description"
    | "tags"
    | "dimensions"
    | "category"
    | "isActive"
    | "__v"
    | "attribute_product"
>;

interface ProductCardProps {
    product: ProductCardType;
    handleOpenModal: (product_id: string, product: any) => void;
}

const ProductCardComponent = ({
    product,
    handleOpenModal,
}: ProductCardProps) => {
    const navigate = useNavigate();
    const { mutate: addCart, isPending } = useCart.useAddToCart();
    const { mutate: addWishlistMutation } = useWishlist.useAddToWishlist();
    const { mutate: deleteWishListMutation } = useWishlist.useDeleteWishlist();
    const { data, refetch } = useWishlist.useGetWishList();

    const wishListProductId = _.map(data?.products, "_id");

    const { user } = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const handleAddToCart = (
        event: React.MouseEvent<HTMLButtonElement>,
        product_id: string
    ) => {
        event.stopPropagation();
        if (user) {
            const data = {
                product_id: product_id,
                quantity: 1,
            };
            dispatch(addToCart({ productId: product_id, quantity: 1 }));
            addCart(data);
        } else {
            toast.error("You must be logged in!");
        }
    };

    const handleNavigateProductDetails = (product_id: string) => {
        navigate(`${ROUTE.PRODUCT_DETAIL}/${product_id}`, {
            state: { product },
        });
    };

    const handleAddToWishList = (
        event: React.MouseEvent<HTMLButtonElement>,
        product_id: string
    ) => {
        event.stopPropagation();
        addWishlistMutation(
            { product_id },
            {
                onSuccess: () => {
                    refetch();
                },
            }
        );
    };

    const handleDeleteFromWishList = (
        event: React.MouseEvent<HTMLButtonElement>,
        product_id: string
    ) => {
        event.stopPropagation();
        deleteWishListMutation(
            { product_id },
            {
                onSuccess: () => {
                    refetch();
                },
            }
        );
    };
    const isInWishList = useMemo(() => {
        return _.includes(wishListProductId, product._id);
    }, [wishListProductId, product._id]);
    return (
        <div
            className="product-card"
            onClick={() => handleNavigateProductDetails(product._id)}
        >
            <div className="product-card__image-container">
                <img
                    loading="lazy"
                    decoding="async"
                    src={product.images[0].url}
                    alt={product.name}
                />
                <div className="product-card__price">
                    {formatMoney(product.price)}
                </div>
            </div>
            <div className="product-card__actions">
                <IconButton
                    className={`product-card__favorite ${
                        isInWishList ? "added" : ""
                    }`}
                    icon="solar:heart-bold"
                    onClick={(event) =>
                        isInWishList
                            ? handleDeleteFromWishList(event, product._id)
                            : handleAddToWishList(event, product._id)
                    }
                />

                <IconButton
                    onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModal(product._id, product);
                    }}
                    className="product-card__view"
                    icon="heroicons:viewfinder-circle-solid"
                />
            </div>

            <div className="product-card__content">
                <div className="product-card__content-brand">
                    {product.brand}
                </div>
                <div className="product-card__content-name">{product.name}</div>
            </div>

            <div className="product-card__bottom">
                <Button
                    onClick={(event) => handleAddToCart(event, product._id)}
                    className="button"
                    variant="contain"
                    color="black"
                >
                    {isPending ? (
                        <Icon icon="eos-icons:bubble-loading" />
                    ) : (
                        <>
                            <Icon icon="streamline:shopping-cart-1-solid" />
                            Add to bag
                        </>
                    )}
                </Button>
                <span className="rating">
                    4.9
                    <Icon icon="fluent-emoji-flat:star" />
                    <div className="text-reviews">(98 reviews)</div>
                </span>
            </div>
        </div>
    );
};

export const ProductCard = memo(ProductCardComponent);
