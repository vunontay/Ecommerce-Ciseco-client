import { Link } from "react-router-dom";
import { Container } from "../../../components/shared";
import "./index.scss";
import { ROUTE } from "../../../utils/constant";
import { Button } from "../../../components/ui";
import Logo from "../../../assets/images/logo.svg";
import RightLargeImg from "../../../assets/images/rightLargeImg.webp";
const SectionPromo = () => {
    return (
        <section className="promo">
            <Container>
                <div className="promo__content">
                    <div className="promo__wrapper">
                        <div className="promo__logo">
                            <Link to={ROUTE.INDEX}>
                                <img
                                    loading="lazy"
                                    src={Logo}
                                    alt="logo"
                                    decoding="async"
                                />
                            </Link>
                        </div>
                        <h1>Earn free money with Ciseco</h1>
                        <p>
                            With Ciseco you will get freeship & savings combo...
                        </p>
                        <div className="promo__button">
                            <Button variant="contain" color="black">
                                Savings combo
                            </Button>
                            <Button variant="outline" color="white">
                                Discover more
                            </Button>
                        </div>
                    </div>
                    <div className="promo__banner">
                        <img
                            src={RightLargeImg}
                            alt="earnMoney_homepage"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SectionPromo;
