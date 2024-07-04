import { Footer, Header } from "../components/shared";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="main_layout">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
