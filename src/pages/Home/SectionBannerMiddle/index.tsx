import { Link } from "react-router-dom";
import { Container } from "../../../components/shared";
import { ROUTE } from "../../../utils/constant";
import "./index.scss";
import { Button } from "../../../components/ui";
import Promo2 from "../../../assets/images/promo2.webp";
import Moon1 from "../../../assets/images/Moon1.svg";
import Logo from "../../../assets/images/logo.svg";
const SectionBannerMiddle = () => {
    return (
        <section className="banner-middle">
            <Container>
                <div className="banner-middle__wrapper">
                    <div className="banner-middle__background-svg">
                        <img
                            loading="lazy"
                            src={Moon1}
                            alt=""
                            decoding="async"
                        />
                    </div>
                    <div className="banner-middle__content">
                        <div className="banner-middle__logo">
                            <Link to={ROUTE.INDEX}>
                                <img
                                    loading="lazy"
                                    src={Logo}
                                    alt="logo"
                                    decoding="async"
                                />
                            </Link>
                        </div>
                        <h2>
                            Special offer <br />
                            in kids products
                        </h2>
                        <p>
                            Fashion is a form of self-expression and autonomy at
                            a particular period and place.
                        </p>
                        <Button variant="contain" color="black">
                            Discover more
                        </Button>
                    </div>
                    <div className="banner-middle__background">
                        <img
                            loading="lazy"
                            alt=""
                            decoding="async"
                            src={Promo2}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SectionBannerMiddle;
