import { Link } from "react-router-dom";

import { ROUTE } from "../../../utils/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container } from "../../shared";
import Logo from "../../../assets/images/logo.svg";

import "./index.scss";
export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer">
                    <div className="footer__list">
                        <h2>Getting started</h2>
                        <ul>
                            <li>Release Notes</li>
                            <li>Upgrade Guide</li>
                            <li>Browser Support</li>
                            <li>Dark mode</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <h2>Explore</h2>
                        <ul>
                            <li>Prototyping</li>
                            <li>Design systems</li>
                            <li>Pricing</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <h2>Resources</h2>
                        <ul>
                            <li>Best pratices</li>
                            <li>Support</li>
                            <li>Developers</li>
                            <li>Learn design</li>
                        </ul>
                    </div>
                    <div className="footer__list">
                        <h2> Community</h2>
                        <ul>
                            <li>Discussion Forums</li>
                            <li>Code of Conduct</li>
                            <li>Contributing</li>
                            <li>API Reference</li>
                        </ul>
                    </div>
                    <div className="footer__list footer__list--logo">
                        <div className="logo">
                            <Link to={ROUTE.INDEX}>
                                <img
                                    src={Logo}
                                    decoding="async"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className="footer__list_link">
                            <Link
                                className="flex items-center gap-4"
                                to={ROUTE.INDEX}
                            >
                                <Icon icon={"logos:facebook"} />
                                <span>Facebook</span>
                            </Link>
                            <Link
                                className="flex items-center gap-4"
                                to={ROUTE.INDEX}
                            >
                                <Icon icon={"logos:twitter"} />
                                <span>Twitter</span>
                            </Link>
                            <Link
                                className="flex items-center gap-4"
                                to={ROUTE.INDEX}
                            >
                                <Icon icon="openmoji:youtube" />
                                <span>Youtube</span>
                            </Link>
                            <Link
                                className="flex items-center gap-4"
                                to={ROUTE.INDEX}
                            >
                                <Icon icon="logos:telegram" />
                                <span>Telegram</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
