import { useLocation } from "react-router-dom";
import "./index.scss";
import { Link } from "react-router-dom";

export const ProductHeading = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <nav aria-label="product-heading">
            <ol className="product-heading">
                {pathnames.length > 0 ? (
                    <li className="product-heading__item">
                        <Link to="/">
                            <h2>Home</h2>
                        </Link>
                    </li>
                ) : (
                    <li className="product-heading__item active">Home</li>
                )}
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                    return index === pathnames.length - 1 ? (
                        <li key={to} className="product-heading__item active">
                            <h2> {value}</h2>
                        </li>
                    ) : (
                        <li key={to} className="product-heading__item">
                            <Link to={to}>
                                <h2>{value}</h2>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
