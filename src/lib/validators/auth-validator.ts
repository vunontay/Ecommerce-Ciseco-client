import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
    userName: Yup.string()
        .required("Username is required")
        .min(8, "Username must be at least 8 characters")
        .max(32, "Username must be no more than 32 characters")
        .matches(/[A-Za-z]/, "Username must include at least one letter")
        .matches(/\d/, "Username must include at least one number")
        .matches(
            /^[a-zA-Z0-9]+$/,
            "Username cannot include special characters"
        ),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        ),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
});

export const loginValidationSchema = Yup.object({
    userName: Yup.string()
        .required("Username is required")
        .min(8, "Username must be at least 8 characters")
        .max(32, "Username must be no more than 32 characters")
        .matches(/[A-Za-z]/, "Username must include at least one letter")
        .matches(/\d/, "Username must include at least one number")
        .matches(
            /^[a-zA-Z0-9]+$/,
            "Username cannot include special characters"
        ),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        ),
});

export const authValidations = {
    registerValidationSchema,
    loginValidationSchema,
};
