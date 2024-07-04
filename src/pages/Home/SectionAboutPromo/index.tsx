import BackgroundLine from "../../../assets/images/BackgroundLineAbout.svg";
import Promo3 from "../../../assets/images/promo3.webp";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.scss";
const SectionAboutPromo = () => {
    return (
        <>
            <div className="about__promo">
                <div className="about__promo--content">
                    <div className="about__promo--img">
                        <img src={BackgroundLine} loading="lazy" alt="" />
                    </div>
                    <div className="about__promo--left">
                        <h2>Don't miss out on special offers</h2>
                        <p>
                            Register to receive news about the latest, savings
                            combos, discount codes...
                        </p>
                        <ul>
                            <li>
                                <span>01</span>
                                <span>Savings combos</span>
                            </li>
                            <li>
                                <span>02</span>
                                <span>Free ship</span>
                            </li>
                            <li>
                                <span>03</span>
                                <span>Premium magazines</span>
                            </li>
                        </ul>
                        <form>
                            <input placeholder="Enter your email" />
                            <button>
                                <Icon icon="icons8:right-arrow" />
                            </button>
                        </form>
                    </div>
                    <div className="about__promo--right">
                        <img src={Promo3} alt="" loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionAboutPromo;
