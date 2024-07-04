import Slider, { Settings } from "react-slick";
import { Container } from "../../../components/shared";
import { Button, PageHeading } from "../../../components/ui";
import { DiscoverList } from "../../../utils/fakeData";
import "./index.scss";
import { useRef } from "react";

const SectionBanner = () => {
    const slider = useRef<Slider>(null);
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 554,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="banner">
            <Container>
                <PageHeading
                    heading={"Discover more."}
                    subHeading="Good things are waiting for you"
                    onPrevClick={() => slider.current?.slickPrev()}
                    onNextClick={() => slider.current?.slickNext()}
                />
                <div className="banner__slider-list">
                    <Slider ref={slider} {...settings}>
                        {DiscoverList &&
                            DiscoverList.map((item, index) => (
                                <div
                                    key={index}
                                    className="banner__slider-item"
                                >
                                    <div
                                        className="banner__slider-content"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <div className="banner__slider-img">
                                            <img
                                                loading="lazy"
                                                src={item?.url}
                                                alt={item.title || ""}
                                                decoding="async"
                                            />
                                        </div>
                                        <h5>{item.title}</h5>
                                        <h3>{item.description}</h3>
                                        <Button variant="contain" color="white">
                                            Show me all
                                        </Button>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default SectionBanner;
