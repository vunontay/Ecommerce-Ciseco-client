import { HTMLAttributes, memo } from "react";
import "./index.scss";

interface InputQuantityProps extends HTMLAttributes<HTMLInputElement> {
    quantity: number;
    onChangeQuantity: (value: number) => void;
    max?: number;
    fullWidth?: boolean;
}

const InputQuantityComponent: React.FC<InputQuantityProps> = ({
    quantity,
    className = "",
    onChangeQuantity,
    max,
    fullWidth,
    ...rest
}) => {
    const updateQuantityByIcon = (value: number) => {
        const newQuantity = Math.max(quantity + value, 1);

        if (max && newQuantity > max) {
            return;
        }
        if (newQuantity <= 0) {
            onChangeQuantity(1);
            return;
        }
        onChangeQuantity(newQuantity);
    };

    const entryQuantity = (value: string) => {
        const newValue = Number(value);
        if (max && newValue > max) {
            onChangeQuantity(max);
            return;
        }
        onChangeQuantity(newValue);
    };
    const handleBlur = (value: string) => {
        if (value === "" || value === "0") {
            onChangeQuantity(1);
        }
    };

    if (fullWidth) className += " full-width";
    return (
        <div className={`quantity ${className}`} {...rest}>
            <span
                className="quantity__btn right"
                onClick={() => updateQuantityByIcon(1)}
            >
                +
            </span>
            <input
                onKeyDown={(event) => {
                    if (
                        !/[0-9]/.test(event.key) &&
                        event.key !== "Delete" &&
                        event.key !== "Backspace" &&
                        event.key !== "ArrowRight" &&
                        event.key !== "ArrowLeft"
                    ) {
                        event.preventDefault();
                    }
                }}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                    handleBlur(e.currentTarget.value.trim())
                }
                type="tel"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    entryQuantity(e.target.value.trim())
                }
                pattern="[0-9]*"
                className="quantity__textfield"
                value={quantity < 1 ? "" : quantity}
                min="1"
                max={max}
            />
            <span
                className="quantity__btn left"
                onClick={() => updateQuantityByIcon(-1)}
            >
                -
            </span>
        </div>
    );
};

export const InputQuantity = memo(InputQuantityComponent);
