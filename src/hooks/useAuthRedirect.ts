import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

const useAuthRedirect = () => {
    const isAuthenticated = useSelector((state: RootState) => state.user?.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);
};

export default useAuthRedirect;
