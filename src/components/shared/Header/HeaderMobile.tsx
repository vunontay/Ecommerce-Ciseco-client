import { Link } from "react-router-dom";
import { ROUTE } from "../../../utils/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import { memo, useCallback } from "react";

interface HeaderMobileProps {
    onClose: () => void;
}
export const HeaderMobileComponent = ({ onClose }: HeaderMobileProps) => {
    const handleCategoryClick = useCallback(() => {
        onClose();
    }, [onClose]);
    return (
        <div className="header-mobile">
            <div className="header-mobile__top">
                <div className="header__logo">
                    <Link to={ROUTE.INDEX}>
                        <img
                            loading="lazy"
                            src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="header-mobile__social">
                    <p>
                        Discover the most outstanding articles on all topics of
                        life. Write your stories and share them
                    </p>
                    <div className="header-mobile__social--icon">
                        <Icon icon={"logos:facebook"} />
                        <Icon icon={"logos:twitter"} />
                        <Icon icon="openmoji:youtube" />
                        <Icon icon="logos:telegram" />
                    </div>
                </div>
            </div>
            <div className="header-mobile__categories">
                <Link to={ROUTE.INDEX} onClick={handleCategoryClick}>
                    HOME
                </Link>
                <Link
                    to={ROUTE.PRODUCT_COLLECTION}
                    onClick={handleCategoryClick}
                >
                    Collection
                </Link>
                <Link to={ROUTE.ABOUT} onClick={handleCategoryClick}>
                    About
                </Link>
                <Link to={ROUTE.CONTACT} onClick={handleCategoryClick}>
                    Contact
                </Link>
                <Link to={ROUTE.BLOG} onClick={handleCategoryClick}>
                    Blog
                </Link>
            </div>
        </div>
    );
};

export const HeaderMobile = memo(HeaderMobileComponent);
