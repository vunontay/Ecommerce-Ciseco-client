import { Link } from "react-router-dom";
import { Container } from "../../components/shared";
import "./index.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../components/ui";
import SectionPromo from "../Home/SectionPromo";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <Container>
                <div className="contact__main">
                    <div className="contact__left">
                        <div className="contact__left--item">
                            <h3>🗺 ADDRESS</h3>
                            <p>
                                Photo booth tattooed prism, portland taiyaki
                                hoodie neutra typewriter
                            </p>
                        </div>
                        <div className="contact__left--item">
                            <h3>💌 EMAIL</h3>
                            <p>nc.example@example.com</p>
                        </div>
                        <div className="contact__left--item">
                            <h3>☎ PHONE</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className="contact__left--item">
                            <h3>🌏 SOCIALS</h3>
                            <nav>
                                <Link to={""}>
                                    <Icon icon={"logos:facebook"} />
                                </Link>
                                <Link to={""}>
                                    <Icon icon={"logos:twitter"} />
                                </Link>
                                <Link to={""}>
                                    <Icon icon="openmoji:youtube" />
                                </Link>
                                <Link to={""}>
                                    <Icon icon="logos:telegram" />
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="contact__right">
                        <form>
                            <label>
                                <label>Full name</label>
                                <input
                                    placeholder="Example CR7"
                                    name="Full name"
                                />
                            </label>
                            <label>
                                <label>Email address</label>

                                <input
                                    placeholder="Example@gmail.com"
                                    name="Email"
                                />
                            </label>
                            <label>
                                <label>Message</label>
                                <textarea rows={6}></textarea>
                            </label>
                            <Button variant="contain" color="black">
                                Send message
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
            <div className="contact__bottom">
                <SectionPromo />
            </div>
        </div>
    );
};

export default Contact;
