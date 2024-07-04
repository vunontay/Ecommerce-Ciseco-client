import { Toaster } from "react-hot-toast";
import Router from "./routers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function App() {
    return (
        <>
            <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f8f8f8">
                <Toaster position="top-right" reverseOrder={false} />
                <Router />
            </SkeletonTheme>
        </>
    );
}

export default App;
