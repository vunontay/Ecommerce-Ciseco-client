import * as Yup from "yup";

export const checkoutInfoValidationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    street: Yup.string().required("Street is required"),
    province: Yup.string().required("Province is required"),
    district: Yup.string().required("District is required"),
    commune: Yup.string().required("Commune is required"),
});
