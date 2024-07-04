import React, { useState } from "react";
import AccordionPayment from "./AccordionPayment";
import CheckoutForm from "./CheckoutForm";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, RadioBox } from "../../../components/ui";
import "./index.scss";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../store/order-slice";
import { PAYMENTS_METHOD } from "../../../utils/constant";
import toast from "react-hot-toast";

const CheckoutInfo = () => {
    const [selectPaymentMethod, setSelectPaymentMethod] = useState<string>("");
    const dispatch = useDispatch();

    const handleSelectPaymentMethod = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelectPaymentMethod(event.target.value);
    };
    const handleConfirmPaymentMethod = () => {
        if (selectPaymentMethod) {
            toast.success("Chosen payment method successfully");
            dispatch(setPaymentMethod(selectPaymentMethod));
        }
    };

    return (
        <div className="checkout-info">
            <AccordionPayment
                infoTitle="Enrico Smith+855 - 666 - 7744"
                title="CONTACT INFO"
                icon="ph:user-circle"
            >
                <span></span>
            </AccordionPayment>
            <AccordionPayment
                infoTitle="St. Paul's Road, Norris, SD 57560, Dakota, USA"
                title="SHIPPING ADDRESS"
                icon="hugeicons:pin-location-01"
            >
                <CheckoutForm />
            </AccordionPayment>
            <AccordionPayment
                infoTitle="Vnpay/Cash on delivery"
                title="PAYMENT METHOD"
                icon="hugeicons:credit-card-pos"
            >
                <div className="checkout-info__wrapper">
                    <div className="checkout-info__payment">
                        <RadioBox
                            name="payment"
                            value={PAYMENTS_METHOD.OFFLINE}
                            onChange={handleSelectPaymentMethod}
                        />
                        <div className="payment__icon">
                            <Icon icon="mdi:cash-on-delivery" />
                        </div>
                        <p>Cash on delivery</p>
                    </div>
                    <div className="checkout-info__payment">
                        <RadioBox
                            name="payment"
                            value={PAYMENTS_METHOD.ONLINE}
                            onChange={handleSelectPaymentMethod}
                        />
                        <div className="payment__icon">
                            <Icon icon="fluent:wallet-credit-card-16-regular" />
                        </div>
                        <p>Pay with vnpay</p>
                    </div>
                    <Button
                        className="checkout-info__submit"
                        type="submit"
                        variant="contain"
                        color="black"
                        onClick={handleConfirmPaymentMethod}
                    >
                        Confirm payment method
                    </Button>
                </div>
            </AccordionPayment>
        </div>
    );
};

export default CheckoutInfo;
