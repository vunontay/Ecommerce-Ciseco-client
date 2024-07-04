import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Button, Textfield } from "../../../components/ui";
import { ROUTE } from "../../../utils/constant";
import { Container } from "../../../components/shared";
import { registerValidationSchema } from "../../../lib/validators/auth-validator";
import { useAuth } from "../../../hooks/useAuth";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TRegisterFormValues } from "../../../types/auth-type";
import "./index.scss";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const Register: React.FC = () => {
    useAuthRedirect();
    const { registerMutation } = useAuth();

    const formik = useFormik<TRegisterFormValues>({
        initialValues: {
            userName: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values: TRegisterFormValues) => {
            registerMutation.mutate(values);
        },
    });

    return (
        <Container>
            <div className="register">
                <h2>Register</h2>
                <form className="register__form" onSubmit={formik.handleSubmit}>
                    <Textfield
                        className="register__field"
                        autoComplete="username"
                        label="Username"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.userName &&
                            Boolean(formik.errors.userName)
                        }
                        helperText={
                            formik.touched.userName && formik.errors.userName
                        }
                    />
                    <Textfield
                        className="register__field"
                        autoComplete="current-password"
                        label="Password"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Textfield
                        className="register__field"
                        autoComplete="email"
                        label="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <Textfield
                        className="register__field"
                        autoComplete="given-name"
                        label="First Name"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.first_name &&
                            Boolean(formik.errors.first_name)
                        }
                        helperText={
                            formik.touched.first_name &&
                            formik.errors.first_name
                        }
                    />
                    <Textfield
                        className="register__field"
                        autoComplete="family-name"
                        label="Last Name"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.last_name &&
                            Boolean(formik.errors.last_name)
                        }
                        helperText={
                            formik.touched.last_name && formik.errors.last_name
                        }
                    />
                    <Button
                        type="submit"
                        className="register__btn"
                        variant="contain"
                        color="black"
                    >
                        {registerMutation.isPending ? (
                            <Icon icon="eos-icons:bubble-loading" />
                        ) : (
                            <>Continue</>
                        )}
                    </Button>
                </form>
                <div className=""></div>
                <p>
                    Already have an account?{" "}
                    <Link to={ROUTE.LOGIN}>Sign in</Link>
                </p>
            </div>
        </Container>
    );
};
export default Register;
