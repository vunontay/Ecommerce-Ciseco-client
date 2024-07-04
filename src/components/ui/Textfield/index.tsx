import React, { InputHTMLAttributes } from "react";
import "./index.scss";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    helperText?: string | boolean;
    required?: boolean;
    type?: string;
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
    (props, ref) => {
        const {
            className,
            label,
            error,
            helperText = "Missing error message or label",
            required,
            type = "text",
            ...rest
        } = props;

        let textfieldClassName = "textfield";
        if (error && helperText !== "") {
            textfieldClassName += ` error`;
        }

        if (className) {
            textfieldClassName += ` ${className}`;
        }

        return (
            <fieldset className={textfieldClassName}>
                <input
                    className="textfield__input"
                    ref={ref}
                    required={Boolean(label) || required}
                    type={type}
                    {...rest}
                />
                {label && <p className="textfield__label">{label}</p>}
                {error && helperText && (
                    <small className="textfield__error">{helperText}</small>
                )}
            </fieldset>
        );
    }
);

const MemoizedTextfield = React.memo(Textfield);

export { MemoizedTextfield as Textfield };
