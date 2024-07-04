import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useProduct } from "../../../hooks/useProduct";
import { useDebounce } from "../../../hooks/useDebounce";
import { formatMoney } from "../../../utils/util";
import { ROUTE } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from "../../../types/product-type";
import "./index.scss";

interface ProductSearchProps {
    onClose: () => void;
}

const ProductSearchComponent = ({ onClose }: ProductSearchProps) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedSearchValue = useDebounce(searchValue, 500);
    const { data: products, isFetching } = useProduct.useGetProductByName(
        debouncedSearchValue as string
    );

    const formik = useFormik({
        initialValues: {
            query: "",
        },
        onSubmit: (values) => {
            setSearchValue(values.query);
        },
    });

    useEffect(() => {
        if (formik.values.query !== searchValue) {
            setSearchValue(formik.values.query);
        }
    }, [formik.values.query, searchValue]);

    const handleNavigateProductDetails = (
        product_id: string,
        product: Product
    ) => {
        onClose();
        navigate(`${ROUTE.PRODUCT_DETAIL}/${product_id}`, {
            state: { product },
        });
    };

    return (
        <div className="search">
            <form onSubmit={formik.handleSubmit} className="search__form">
                <input
                    id="query"
                    name="query"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.query}
                    placeholder="Type your search keywords"
                    className="search__input"
                />
                <button className="search__button" type="submit">
                    <Icon icon="icons8:right-arrow" />
                </button>
                <span>
                    <Icon icon={"iconamoon:search-light"} />
                </span>
            </form>
            <div className="search__result">
                {isFetching && (
                    <Skeleton
                        style={{ marginTop: "3.2rem" }}
                        height={100}
                        count={2}
                    />
                )}
                {!isFetching && searchValue !== "" && products?.list_product
                    ? products.list_product.map((product) => (
                          <div
                              onClick={() =>
                                  handleNavigateProductDetails(
                                      product._id,
                                      product
                                  )
                              }
                              key={product._id}
                              className="search__result--link"
                          >
                              <div className="search__result--thumb">
                                  <img
                                      className="img-fluid"
                                      src={product?.images[0]?.url}
                                      alt={product.name}
                                      loading="lazy"
                                  />
                              </div>
                              <div className="search__result--col">
                                  <div className="search__result--col-title">
                                      {product?.name}
                                  </div>
                                  <div className="search__result--col-desc">
                                      <p>{product?.description}</p>
                                  </div>
                                  <div className="search__result--col-price">
                                      <span>{formatMoney(product?.price)}</span>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
                {!isFetching &&
                    products?.list_product &&
                    products.list_product.length === 0 && (
                        <h2 className="no-result">
                            Not Found Product!
                            <Icon icon="iconoir:file-not-found" />
                        </h2>
                    )}
            </div>
        </div>
    );
};

export const ProductSearch = React.memo(ProductSearchComponent);
