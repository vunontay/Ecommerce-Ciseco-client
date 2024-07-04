import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "../../../components/shared";
import "./index.scss";
import { ExploreList } from "../../../utils/fakeData";
import { Link } from "react-router-dom";
const SectionExploring = () => {
    return (
        <section className="exploring">
            <Container>
                <div className="exploring__heading">
                    <h2>Start exploring.</h2>
                </div>
                <nav className="exploring__categories">
                    <ul className="exploring__categories-list">
                        <li className="exploring__categories-item">
                            <Icon width={20} icon="mynaui:female" />
                            <Link to={""}>Women</Link>
                        </li>
                        <li className="exploring__categories-item">
                            <Icon width={20} icon="mynaui:male" />{" "}
                            <Link to={""}>Man</Link>
                        </li>
                        <li className="exploring__categories-item">
                            <Icon width={20} icon="hugeicons:kid" />{" "}
                            <Link to={""}>Kids</Link>
                        </li>
                        <li className="exploring__categories-item">
                            <Icon
                                width={20}
                                icon="material-symbols-light:sports-baseball-outline"
                            />
                            <Link to={""}> Sports</Link>
                        </li>
                        <li className="exploring__categories-item">
                            <Icon width={20} icon="fa6-regular:chess-queen" />{" "}
                            <Link to={""}> Beauty</Link>
                        </li>
                        <li className="exploring__categories-item">
                            <Icon width={20} icon="map:jewelry-store" />{" "}
                            <Link to={""}>Jewelry</Link>
                        </li>
                    </ul>
                </nav>
                <div className="exploring__cards">
                    {ExploreList.map((item, index) => (
                        <div key={index} className="exploring__cards-item">
                            <div className="background">
                                <img
                                    loading="lazy"
                                    src={item.bg_main}
                                    alt=""
                                    decoding="async"
                                />
                            </div>
                            <div className="card">
                                <div className="card__top">
                                    <div
                                        className="card__img"
                                        style={{ backgroundColor: item.bg_img }}
                                    >
                                        <img
                                            loading="lazy"
                                            src={item.img}
                                            alt="card img"
                                            decoding="async"
                                        />
                                    </div>
                                    <span>
                                        {item.product_quantity} products
                                    </span>
                                </div>
                                <div className="card__title">
                                    <span>Manufacturar</span>
                                    <h2>{item.title}</h2>
                                </div>
                                <Link to={""} className="card__button">
                                    <span> See Collection </span>
                                    <Icon width={20} icon="ep:right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SectionExploring;
