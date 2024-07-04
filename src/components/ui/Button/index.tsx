import React, { ButtonHTMLAttributes, memo } from "react";
import "./index.scss";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "contain" | "outline";
    size?: "sm" | "md" | "icon" | "lg";
    color?:
        | "black"
        | "white"
        | "green"
        | "basic"
        | "grey"
        | "primary"
        | "white-hv-black";
    border?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonPropsType> = memo(
    ({
        children,
        className = "",
        variant = "contain",
        size = "sm",
        color,
        ...rest
    }: ButtonPropsType) => {
        return (
            <button
                {...rest}
                className={`btn ${className} ${
                    variant ? `btn_${variant}` : ""
                }${color ? `--${color}` : ""} ${`btn--${size}`}`}
            >
                {children}
            </button>
        );
    }
);

export default Button;
