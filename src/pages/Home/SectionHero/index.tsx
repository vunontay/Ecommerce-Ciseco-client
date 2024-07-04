import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { HomeSlide } from "../../../utils/fakeData";
import "./index.scss";
import { Container } from "../../../components/shared";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, IconButton } from "../../../components/ui";

const SectionHero: React.FC = () => {
    const slider = useRef<Slider>(null);

    const settings: Settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <section className="hero">
            <div className="hero__background">
                <IconButton
                    onClick={() => slider.current?.slickPrev()}
                    icon={"iconamoon:arrow-left-2-light"}
                    className="hero__arrows previous"
                />

                <IconButton
                    onClick={() => slider.current?.slickNext()}
                    icon={"iconamoon:arrow-right-2-light"}
                    className="hero__arrows next"
                />
                <Container>
                    <Slider ref={slider} className={""} {...settings}>
                        {HomeSlide?.map((slide) => (
                            <div key={slide?.id}>
                                <div className="hero__slider">
                                    <div className="hero__slider-content">
                                        <h4>{slide?.title}</h4>
                                        <h2>{slide?.description}</h2>
                                        <Button
                                            className="hero__slider-button"
                                            variant="contain"
                                            color="black"
                                        >
                                            Explore now
                                            <Icon
                                                icon={"iconamoon:search-light"}
                                            />
                                        </Button>
                                    </div>
                                    <img
                                        src={slide?.url}
                                        sizes="(max-width: 600px) 100vw, 800px"
                                        alt={slide?.title}
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
};

export default SectionHero;
