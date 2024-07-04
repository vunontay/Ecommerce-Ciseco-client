import { Badge } from "../../ui";
import { Product } from "../../../types/product-type";
import { Icon } from "@iconify/react";
import { memo } from "react";

interface ProductImageProps {
    product?: Product;
}

const ProductImageComponent = ({ product }: ProductImageProps) => (
    <div className="product-detail-frame__left">
        <div className="product-detail-frame__img">
            <img src={product?.images[0]?.url} alt="img" loading="lazy" />
            <Badge name="New in" className="product-detail-frame__badge" />
            <button className="product-detail-frame__favorite">
                <Icon icon="solar:heart-outline" />
            </button>
        </div>
    </div>
);

export const ProductImage = memo(ProductImageComponent);
