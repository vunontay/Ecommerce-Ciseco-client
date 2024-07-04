import { Container } from "../../components/shared";
import Breadcrumb from "../../components/ui/Breadcrumb";
import CheckoutInfo from "./CheckoutInfo";
import CheckoutPayment from "./CheckoutPayment";
import "./index.scss";
const Checkout = () => {
    return (
        <div className="checkout-page">
            <Breadcrumb />
            <Container>
                <hr />
                <div className="checkout-page__main">
                    <div className="checkout-page__content">
                        <div className="checkout-page__content--left">
                            <CheckoutInfo />
                        </div>
                        <div className="checkout-page__content--center"></div>
                        <div className="checkout-page__content--right">
                            <CheckoutPayment />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;
