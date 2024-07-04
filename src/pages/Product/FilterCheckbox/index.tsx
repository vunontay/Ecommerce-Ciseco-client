import React from "react";
import { CheckBox } from "../../../components/ui/Checkbox";
import { OptionsFilter } from "../../../types/product-type";
import "./index.scss";

type FilterCategory = "color" | "size";

interface FilterOptionCheckboxProps {
    title: string;
    category: FilterCategory;
    options: OptionsFilter[];
    applyArrayFilter: (data: {
        category: FilterCategory;
        value: string;
    }) => void;
    filter: Record<string, string[]> | undefined;
}

const FilterOptionCheckbox: React.FC<FilterOptionCheckboxProps> = ({
    category,
    options,
    applyArrayFilter,
    filter,
    title,
}) => {
    const handleCheckboxChange = (itemValue: string) => {
        applyArrayFilter({
            category: category,
            value: itemValue,
        });
    };

    return (
        <div className="filter-checkbox">
            <h3>{title}</h3>
            {options.map((item, index) => (
                <div key={item.value} className="filter-checkbox__field">
                    <CheckBox
                        id={`${title}-${index}`}
                        onChange={() => handleCheckboxChange(item.value)}
                        checked={
                            filter?.[category]?.includes(item.value) || false
                        }
                    />
                    <label htmlFor={`${title}-${index}`}>{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterOptionCheckbox;
