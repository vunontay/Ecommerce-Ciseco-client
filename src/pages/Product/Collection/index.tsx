import { Container } from "../../../components/shared";
import { useProduct } from "../../../hooks/useProduct";
import {
    COLOR_FILTERS,
    SIZE_FILTERS,
    SORT_FILED_FILTERS,
    SORT_TYPE_FILTERS,
} from "../../../utils/enum";
import { useFilterProduct } from "../../../hooks/useFilterProduct";
import { Button, Pagination } from "../../../components/ui";
import ProductList from "../ProductList";
import FilterOptionCheckbox from "../FilterCheckbox";
import FilterRange from "../FilterRange";
import "./index.scss";
import Skeleton from "react-loading-skeleton";
import { Icon } from "@iconify/react/dist/iconify.js";
import FilterOptionRadioBox from "../FilterRadioBox";
import { Breadcrumb } from "../../../components/ui/Breadcrumb";

const Collection = () => {
    const {
        filter,
        applyArrayFilter,
        applyRangeFilter,
        setPage,
        setSortField,
        setSortType,
        resetFilters,
    } = useFilterProduct();

    const { data: filteredProducts, isLoading } =
        useProduct.useFilterProductByParams(filter);

    const totalPages = Number(filteredProducts?.params?.totalPage) ?? 0;
    const handleResetFilters = () => {
        resetFilters();
    };
    return (
        <div className="collection-page">
            <Breadcrumb />
            <Container>
                <p className="collection-page__description">
                    We not only help you design exceptional products, but also
                    make it easy for you to share your designs with more
                    like-minded people.
                </p>
                <hr />
                <div className="collection-page__main">
                    <div className="collection-page__content">
                        <div className="collection-page__content--left">
                            <FilterOptionCheckbox
                                title="Colors"
                                category="color"
                                options={COLOR_FILTERS.options}
                                applyArrayFilter={applyArrayFilter}
                                filter={{ color: filter.color }}
                            />
                            <FilterOptionCheckbox
                                title="Sizes"
                                category="size"
                                options={SIZE_FILTERS.options}
                                applyArrayFilter={applyArrayFilter}
                                filter={{ size: filter.size }}
                            />
                            <FilterRange
                                min={"0"}
                                max={"500000"}
                                step={1}
                                applyRangeFilter={applyRangeFilter}
                                filter={filter}
                                title="Price range"
                            />
                            <FilterOptionRadioBox
                                title="Sort By Field"
                                options={SORT_FILED_FILTERS.options}
                                setSortOption={setSortField}
                                filter={{ sortField: filter.sortField }}
                            />
                            <FilterOptionRadioBox
                                title="Sort By Type"
                                options={SORT_TYPE_FILTERS.options}
                                setSortOption={setSortType}
                                filter={{ sortType: filter.sortType }}
                            />
                            <Button
                                className="collection-page__button"
                                size="sm"
                                variant="contain"
                                color="black"
                                onClick={handleResetFilters}
                            >
                                Reset Value
                            </Button>
                        </div>
                        <div className="collection-page__content--center"></div>
                        <div className="collection-page__content--right">
                            {isLoading ? (
                                <Skeleton count={9} />
                            ) : (
                                filteredProducts &&
                                filteredProducts.products && (
                                    <>
                                        <ProductList
                                            products={filteredProducts.products}
                                        />
                                        {filteredProducts.products.length >
                                        0 ? (
                                            <div className="collection-page__pagination">
                                                <Pagination
                                                    totalPages={totalPages}
                                                    filter={filter}
                                                    setPage={setPage}
                                                />
                                            </div>
                                        ) : (
                                            <h2 className="collection-page__not-found">
                                                Not Found Product!
                                                <Icon icon="iconoir:file-not-found" />
                                            </h2>
                                        )}
                                    </>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Collection;
