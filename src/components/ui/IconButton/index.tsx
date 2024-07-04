import React, { ButtonHTMLAttributes } from "react";
import "./index.scss";
import { Icon } from "@iconify/react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon: string;
}

export const IconButton: React.FC<IconButtonProps> = React.memo(
    ({ className = "", icon, ...rest }) => {
        return (
            <button {...rest} className={`icon__btn ${className}`}>
                <Icon icon={icon} />
            </button>
        );
    }
);
