import { ProductCard, ProductDetailFrame } from "../../../components/products";
import { Modal } from "../../../components/ui";
import useModal from "../../../hooks/useModal";
import { Product } from "../../../types/product-type";
import "./index.scss";

interface ProductWishlistProps {
    products: Product[] | [];
}

const ProductWishlist = ({ products }: ProductWishlistProps) => {
    const { openModal, handleCloseModal, handleOpenModal, dataModal } =
        useModal();

    return (
        <>
            <Modal type="center" onClose={handleCloseModal} open={openModal}>
                <ProductDetailFrame productModal={dataModal} />
            </Modal>
            <div className="product-wishlist">
                {products &&
                    products.map((item) => (
                        <div key={item._id} className="product-list__item">
                            <ProductCard
                                handleOpenModal={handleOpenModal}
                                product={item}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ProductWishlist;
