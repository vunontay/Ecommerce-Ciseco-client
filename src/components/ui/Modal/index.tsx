import { Icon } from "@iconify/react";
import React from "react";

import "./index.scss";

interface ModalPropsType extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    open: boolean;
    type?: "left" | "center";
    onClose: () => void;
}

const Modal: React.FC<ModalPropsType> = React.memo((props) => {
    const { children, open, type = "center", onClose, ...rest } = props;

    return (
        <div {...rest} className={`modal ${open ? "open" : ""}`}>
            <div className="modal__content">
                <div className="modal__overlay" onClick={onClose}></div>
                <div className="modal__wrap">
                    <div className={`modal__body--${type} `}>
                        <button className="modal__button" onClick={onClose}>
                            <Icon icon={"mingcute:close-fill"} />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
});

export { Modal };
