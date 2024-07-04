import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.scss";

interface AccordionPaymentProps {
    title: string;
    infoTitle: string;
    icon: string;
    children: React.ReactNode;
}

const AccordionPayment: React.FC<AccordionPaymentProps> = ({
    title,
    infoTitle,
    icon,
    children,
}) => {
    const [active, setActive] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setActive((prevActive) => !prevActive);
    };

    return (
        <div className="checkout-info__item" onClick={toggleAccordion}>
            <div className="checkout-info__header">
                <div className="checkout-info__icon">
                    <Icon icon={icon} />
                </div>
                <div className="checkout-info__title">
                    <h3>
                        {title} <Icon icon="iconamoon:check-bold" />
                    </h3>
                    {infoTitle && <span>{infoTitle}</span>}
                </div>
                <button className="checkout-info__btn">Change</button>
            </div>
            <div
                ref={contentRef}
                className={`checkout-info__content ${active ? "active" : ""}`}
                style={{
                    height: active ? contentRef.current?.scrollHeight : 0,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionPayment;
