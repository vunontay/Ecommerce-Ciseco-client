import { Button, InputQuantity } from "../../ui";
import { Icon } from "@iconify/react";
import { Product } from "../../../types/product-type";
import { memo } from "react";

interface ProductActionsProps {
    product?: Product;
    quantity: number;
    onChangeQuantity: (value: number) => void;
    onAddToCart: () => void;
    isPending: boolean;
}

const ProductActionsComponent = ({
    product,
    quantity,
    onChangeQuantity,
    onAddToCart,
    isPending,
}: ProductActionsProps) => (
    <div className="product-detail-frame__actions">
        <InputQuantity
            quantity={quantity}
            max={product?.avaiable || 1}
            onChangeQuantity={onChangeQuantity}
        />
        <Button
            onClick={onAddToCart}
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
    </div>
);

export const ProductActions = memo(ProductActionsComponent);
