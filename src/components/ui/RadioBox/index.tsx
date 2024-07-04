import { InputHTMLAttributes } from "react";
import "./index.scss";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string;
    label?: string;
}

export const RadioBox = ({ name, value, label, ...rest }: RadioProps) => {
    const id = `${name}-${value}`;

    return (
        <div className="input-radio">
            <input
                id={id}
                className="input-radio__input"
                type="radio"
                name={name}
                value={value}
                {...rest}
            />
            <label htmlFor={id} className="input-radio__label">
                {label}
            </label>
            <span className="input-radio__span"></span>
        </div>
    );
};
