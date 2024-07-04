import { HTMLAttributes } from "react";
import "./index.scss";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean;
}

export const CheckBox = ({
    id,
    className,
    checked,
    ...rest
}: CheckBoxProps) => {
    let checkboxClassName = "checkbox";

    if (className) {
        checkboxClassName += " " + className;
    }

    return (
        <label htmlFor={id} className={checkboxClassName}>
            <input
                type="checkbox"
                id={id}
                className="checkbox__input"
                checked={checked}
                {...rest}
            />
        </label>
    );
};
