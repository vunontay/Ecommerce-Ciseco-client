import React from "react";
import { OptionsFilter } from "../../../types/product-type";
import "./index.scss";
import { RadioBox } from "../../../components/ui";

interface FilterOptionRadioBoxProps {
    title: string;
    options: OptionsFilter[];
    setSortOption: (value: string) => void;
    filter: {
        sortField?: string;
        sortType?: string;
    };
}

const FilterOptionRadioBox: React.FC<FilterOptionRadioBoxProps> = ({
    filter,
    options,
    setSortOption,
    title,
}) => {
    return (
        <div className="filter-radio-box">
            <h3>{title}</h3>
            {options.map((item, index) => (
                <div key={index} className="filter-radio-box__field">
                    <RadioBox
                        name={item.label}
                        value={item.value}
                        id={`${item.label}-${item.value}`}
                        onChange={() => setSortOption(item.value)}
                        checked={
                            filter.sortField === item.value ||
                            filter.sortType === item.value ||
                            false
                        }
                        label={item.label}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterOptionRadioBox;
