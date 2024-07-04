import { Container } from "../../components/shared";
import SectionAboutPromo from "../Home/SectionAboutPromo";
import "./index.scss";
import Founder1 from "../../assets/images/founder1.jpg";
import Founder2 from "../../assets/images/founder2.jpg";

const About = () => {
    return (
        <>
            <div className="about-page">
                <div className="about-page__background">
                    <span></span>
                    <span></span>
                </div>
                <Container>
                    <div className="about-page__main">
                        <div className="about-page__hero">
                            <div className="about-page__hero--content">
                                <h2>👋 About Us.</h2>
                                <span>
                                    We’re impartial and independent, and every
                                    day we create distinctive, world-class
                                    programmes and content which inform, educate
                                    and entertain millions of people in the
                                    around the world.
                                </span>
                            </div>
                            <div className="about-page__hero--img">
                                <img
                                    src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right1.a04e2be1.png&w=1920&q=75"
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="about-page__founder">
                            <div className="about-page__founder--heading">
                                <div>
                                    <h2>⛱ Founder</h2>
                                    <span>
                                        We’re impartial and independent, and
                                        every day we create distinctive,
                                        world-class programmes and content
                                    </span>
                                </div>
                            </div>
                            <div className="about-page__founder--list">
                                <div className="about-page__founder--item">
                                    <div className="about-page__founder--item img">
                                        <img
                                            src={Founder1}
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3>Nguyễn Hoàng Vũ</h3>
                                    <span>Co-founder and Chief Executive</span>
                                </div>
                                <div className="about-page__founder--item">
                                    <div className="about-page__founder--item img">
                                        <img
                                            src={Founder2}
                                            alt=""
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3>Lê Minh Quang</h3>
                                    <span>Co-founder, Chairman</span>
                                </div>
                            </div>
                        </div>
                        <SectionAboutPromo />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default About;
