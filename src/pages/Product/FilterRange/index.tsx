import React from "react";
import "./index.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FilterRangeProps {
    title: string;
    min: string;
    max: string;
    step: number;
    applyRangeFilter: (distancePrice: { min: string; max: string }) => void;
    filter: {
        distancePrice: string[];
    };
}

const FilterRange = ({
    title,
    min,
    max,
    step,
    applyRangeFilter,
    filter,
}: FilterRangeProps) => {
    const handleFilterRangeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newRangeValue = parseFloat(event.target.value);
        applyRangeFilter({
            min: newRangeValue.toString(),
            max: max,
        });
    };
    return (
        <div className="filter-range">
            <h3>{title}</h3>
            <div className="filter-range__slider">
                <input
                    className="filter-range__input"
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleFilterRangeChange}
                />

                <div className="filter-range__info">
                    <div className="filter-range__item">
                        <label htmlFor="minPrice">Min price</label>
                        <div className="filter-range__value">
                            <Icon icon="hugeicons:money-bag-02" />
                            <input
                                disabled
                                id="minPrice"
                                name="minPrice"
                                value={filter.distancePrice[0]}
                            />
                        </div>
                    </div>
                    <div className="filter-range__item">
                        <label htmlFor="maxPrice">Max price</label>
                        <div className="filter-range__value">
                            <input
                                disabled
                                id="maxPrice"
                                name="maxPrice"
                                value={filter.distancePrice[1]}
                            />
                            <Icon icon="hugeicons:money-bag-02" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterRange;
