import "./index.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../../components/shared";
import { DataTabItem, Tabs } from "../../components/ui/Tabs";
import { TabAccountData } from "../../utils/fakeData";
const Account = () => {
    const navigate = useNavigate();

    const handleChangeTab = (tab: DataTabItem) => {
        navigate(tab?.path || "");
    };

    return (
        <div className="account-page">
            <Container>
                <div className="account-page__top">
                    <div className="account-page__header">
                        <h2>Account</h2>
                        <span>
                            <b>Enrico Cole,</b> ciseco@gmail.com · Los Angeles,
                            CA
                        </span>
                    </div>
                    <hr />
                    <Tabs
                        data={TabAccountData}
                        onChangeTab={handleChangeTab}
                        ignoredPaths={["account"]}
                    />
                    <hr />
                </div>
                <div className="account-page__content">
                    <Outlet />
                </div>
            </Container>
        </div>
    );
};

export default Account;
