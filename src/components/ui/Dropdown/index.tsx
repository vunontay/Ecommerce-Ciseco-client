import { memo } from "react";
import { TCategory } from "../../../types/category-type";
import { DropdownItem } from "./DropdownItem";
import "./index.scss";

interface DropdownProps<T extends TCategory> {
    data: T[];
    generateUrl: (itemId: string) => string; // Callback function to generate URL
}

const DropdownComponent = <T extends TCategory>({
    data,
    generateUrl,
}: DropdownProps<T>) => {
    return (
        <div className="dropdown">
            {data.map((item) => (
                <DropdownItem
                    generateUrl={generateUrl}
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
    );
};
export const Dropdown = memo(DropdownComponent);
