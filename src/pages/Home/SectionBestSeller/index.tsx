import Slider, { Settings } from "react-slick";
import { ProductCard, ProductDetailFrame } from "../../../components/products";
import { Container } from "../../../components/shared";
import { Modal, PageHeading } from "../../../components/ui";

import "./index.scss";
import { useRef } from "react";
import { useProduct } from "../../../hooks/useProduct";

import Skeleton from "react-loading-skeleton";
import useModal from "../../../hooks/useModal";

const SectionBestSeller = () => {
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

    const { data: products, isLoading } = useProduct.useGetAllProduct(1, 6);

    return (
        <>
            <Modal type="center" onClose={handleCloseModal} open={openModal}>
                <ProductDetailFrame productModal={dataModal} />
            </Modal>
            <section className="best-seller">
                <Container>
                    <PageHeading
                        heading={"Best Sellers."}
                        subHeading="Best selling of the month"
                        onPrevClick={() => slider.current?.slickPrev()}
                        onNextClick={() => slider.current?.slickNext()}
                    />
                    <div className="best-seller__list">
                        {isLoading ? (
                            <Skeleton count={4} height={100} />
                        ) : (
                            <Slider ref={slider} {...settings}>
                                {products?.map((product, index) => (
                                    <div
                                        key={index}
                                        className="best-seller__item"
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

export default SectionBestSeller;
