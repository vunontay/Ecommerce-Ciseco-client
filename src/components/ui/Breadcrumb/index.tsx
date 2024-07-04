import { useLocation } from "react-router-dom";
import { Container } from "../../shared";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./index.scss";

export const Breadcrumb = () => {
    const location = useLocation();

    const crumbPath = _.compact(location.pathname.split("/")).map(
        (crumb, index, arr) => {
            const crumbLink = `/${_.take(arr, index + 1).join("/")}`;
            return (
                <Link to={crumbLink} key={crumb}>
                    {_.startCase(crumb)}
                </Link>
            );
        }
    );

    return (
        <div className="breadcrumb">
            <Container>
                <h2>
                    <span> Home</span> {crumbPath.length > 0 && " / "}{" "}
                    {crumbPath}
                </h2>
            </Container>
        </div>
    );
};

export default Breadcrumb;
