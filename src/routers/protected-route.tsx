import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

const ProtectedRoute: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        if (!user) {
            toast.error("You do not have access!, Please login.");
        }
    }, [user]);

    return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
