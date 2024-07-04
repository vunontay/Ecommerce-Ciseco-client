import { ProductDetailFrame } from "../../components/products";
import { Container } from "../../components/shared";
import "./index.scss";

const ProductDetail = () => {
    return (
        <div className="product-detail-page">
            <Container>
                <ProductDetailFrame isPage />
            </Container>
        </div>
    );
};
export default ProductDetail;
