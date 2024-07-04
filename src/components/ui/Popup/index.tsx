import React, { forwardRef, memo } from "react";
import "./index.scss";

interface PopupProps {
    children: React.ReactNode;
}

const PopupComponent = forwardRef<HTMLDivElement, PopupProps>(
    ({ children }, ref) => {
        return (
            <div className="popup" ref={ref}>
                <div className="popup__content">{children}</div>
            </div>
        );
    }
);

export const Popup = memo(PopupComponent);
