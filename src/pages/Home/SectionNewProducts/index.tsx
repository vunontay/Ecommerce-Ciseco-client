import Slider, { Settings } from "react-slick";
import { ProductCard, ProductDetailFrame } from "../../../components/products";
import { Container } from "../../../components/shared";
import { Modal, PageHeading } from "../../../components/ui";

import "./index.scss";
import { useRef } from "react";
import { useProduct } from "../../../hooks/useProduct";

import Skeleton from "react-loading-skeleton";
import useModal from "../../../hooks/useModal";

const SectionNewProducts = () => {
    const slider = useRef<Slider>(null);
    const { openModal, handleCloseModal, handleOpenModal, dataModal } =
        useModal();
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const { data, isLoading } = useProduct.useGetAllProduct(6, 6);

    return (
        <>
            <Modal type="center" onClose={handleCloseModal} open={openModal}>
                <ProductDetailFrame productModal={dataModal} />
            </Modal>
            <section className="new-product">
                <Container>
                    <PageHeading
                        heading={"New Arrivals."}
                        subHeading="REY backpacks & bags"
                        onPrevClick={() => slider.current?.slickPrev()}
                        onNextClick={() => slider.current?.slickNext()}
                    />
                    <div className="new-product__list">
                        {isLoading ? (
                            <Skeleton count={4} height={100} />
                        ) : (
                            <Slider ref={slider} {...settings}>
                                {data?.map((product, index) => (
                                    <div
                                        key={index}
                                        className="new-product__item"
                                    >
                                        <ProductCard
                                            handleOpenModal={handleOpenModal}
                                            product={product}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default SectionNewProducts;
