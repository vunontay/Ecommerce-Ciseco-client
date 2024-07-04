import { useState } from "react";
import { Textfield, SelectBox, Button } from "../../../components/ui";
import { useFormik } from "formik";
import { useAddress } from "../../../hooks/useAddress";
import { checkoutInfoValidationSchema } from "../../../lib/validators/checkout-validator";
import { TCommunes, TDistrict, TProvince } from "../../../types/address-type";
import "./index.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useOrder } from "../../../hooks/useOrder";
import { CheckoutOrderValues, TOderData } from "../../../types/order-type";

const CheckoutForm = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const { mutate: createOrder } = useOrder.useCreateOrder();

    const [selectedProvince, setSelectedProvince] = useState<TProvince>({
        idProvince: "01",
        name: "Default Province",
    });
    const [selectedDistrict, setSelectedDistrict] = useState<
        Omit<TDistrict, "idProvince">
    >({
        idDistrict: "001",
        name: "Default District",
    });
    const [selectedCommune, setSelectedCommune] = useState<
        Omit<TCommunes, "idDistrict">
    >({
        idCommune: "0001",
        name: "Default Commune",
    });

    const { data: provinces } = useAddress.useFetchProvince();
    const { data: districts } = useAddress.useFetchDistrict(
        selectedProvince.idProvince
    );
    const { data: communes } = useAddress.useFetchCommunes(
        selectedDistrict.idDistrict
    );

    const formik = useFormik<CheckoutOrderValues>({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            street: "",
            province: selectedProvince.name,
            district: selectedDistrict.name,
            commune: selectedCommune.name,
        },
        validationSchema: checkoutInfoValidationSchema,
        onSubmit: (values: CheckoutOrderValues) => {
            const data: TOderData = {
                user_id: user?._id || "",
                shipping_detail: {
                    fullName: values.fullName,
                    address: {
                        provinceName: selectedProvince.name,
                        districtName: selectedDistrict.name,
                        wardName: selectedCommune.name,
                        detail: values.street,
                        zipCode: "530000",
                        country: "VietNam",
                    },
                    phone: values.phone,
                    email: values.email,
                },
            };

            createOrder(data);
            setSelectedCommune({ idCommune: "0001", name: "Default Commune" });
            setSelectedDistrict({
                idDistrict: "001",
                name: "Default District",
            });
            setSelectedProvince({ idProvince: "01", name: "Default Province" });
            // formik.resetForm();
        },
    });

    const handleChangeProvince = (value: TProvince) => {
        setSelectedProvince(value);
        formik.setFieldValue("province", value.name);
    };

    const handleChangeDistrict = (value: Omit<TDistrict, "idProvince">) => {
        setSelectedDistrict(value);
        formik.setFieldValue("district", value.name);
    };

    const handleChangeCommune = (value: Omit<TCommunes, "idDistrict">) => {
        setSelectedCommune(value);
        formik.setFieldValue("commune", value.name);
    };

    return (
        <form className="checkout-info__wrapper" onSubmit={formik.handleSubmit}>
            <div className="checkout-info__field col-2">
                <Textfield
                    autoComplete="fullName"
                    label="Full Name"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.fullName &&
                        Boolean(formik.errors.fullName)
                    }
                    helperText={
                        formik.touched.fullName && formik.errors.fullName
                    }
                />
                <Textfield
                    autoComplete="email"
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
            </div>
            <div className="checkout-info__field col-2">
                <SelectBox
                    data={provinces}
                    onSelect={handleChangeProvince}
                    label="Provinces"
                    error={
                        !!formik.touched.province &&
                        Boolean(formik.errors.province)
                    }
                    helperText={
                        (formik.touched.province && formik.errors.province) ||
                        ""
                    }
                />
                <SelectBox
                    data={districts}
                    onSelect={handleChangeDistrict}
                    label="Districts"
                    error={
                        !!formik.touched.district &&
                        Boolean(formik.errors.district)
                    }
                    helperText={
                        (formik.touched.district && formik.errors.district) ||
                        ""
                    }
                />
            </div>
            <div className="checkout-info__field col-2">
                <SelectBox
                    data={communes}
                    onSelect={handleChangeCommune}
                    label="Communes"
                    error={
                        !!formik.touched.commune &&
                        Boolean(formik.errors.commune)
                    }
                    helperText={
                        (formik.touched.commune && formik.errors.commune) || ""
                    }
                />
                <Textfield
                    autoComplete="phone"
                    label="Phone Number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
            </div>
            <div className="checkout-info__field">
                <Textfield
                    autoComplete="street"
                    label="Street"
                    name="street"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.street && Boolean(formik.errors.street)
                    }
                    helperText={formik.touched.street && formik.errors.street}
                />
            </div>
            <Button
                className="checkout-info__submit"
                type="submit"
                variant="contain"
                color="black"
            >
                Save and next to Payment
            </Button>
        </form>
    );
};

export default CheckoutForm;
