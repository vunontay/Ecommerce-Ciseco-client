import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Button, Textfield } from "../../../components/ui";
import { ROUTE } from "../../../utils/constant";
import { loginValidationSchema } from "../../../lib/validators/auth-validator";
import { Container } from "../../../components/shared";
import { useAuth } from "../../../hooks/useAuth";
import { Icon } from "@iconify/react";
import { TLoginFormValues } from "../../../types/auth-type";
import { useUser } from "../../../hooks/useUser";
import "./index.scss";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const Login = () => {
    useAuthRedirect();
    const { loginMutation } = useAuth();
    useUser.useUserQuery(loginMutation?.data?.user?.id);

    const formik = useFormik<TLoginFormValues>({
        initialValues: {
            userName: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values: TLoginFormValues) => {
            loginMutation.mutate(values);
        },
    });

    return (
        <Container>
            <div className="login">
                <h2>Login</h2>
                <form className="login__form" onSubmit={formik.handleSubmit}>
                    <Textfield
                        className="login__field"
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
                        className="login__field"
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
                    <Button
                        type="submit"
                        className="login__btn"
                        variant="contain"
                        color="black"
                    >
                        {loginMutation.isPending ? (
                            <Icon icon="eos-icons:bubble-loading" />
                        ) : (
                            <>Continue</>
                        )}
                    </Button>
                </form>
                <div className=""></div>
                <p>
                    New user? <Link to={ROUTE.REGISTER}>Create an account</Link>
                </p>
            </div>
        </Container>
    );
};

export default Login;
