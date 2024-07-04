import { Icon } from "@iconify/react/dist/iconify.js";
import { TCategory } from "../../../types/category-type";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface DropdownItemProps<T extends TCategory> {
    item: T;
    generateUrl: (itemId: string) => string;
}

const DropdownItemComponent = <T extends TCategory>({
    item,
    generateUrl,
}: DropdownItemProps<T>) => {
    const navigate = useNavigate();

    const handleItemClick = (itemId: string) => {
        const newUrl = generateUrl(itemId);
        navigate(newUrl, { replace: true });
    };

    return (
        <div className="dropdown__item">
            <div
                className="dropdown__item--name"
                onClick={() => handleItemClick(item._id)}
            >
                {item.name}
                {item.child && <Icon icon="iconamoon:arrow-down-2-duotone" />}
            </div>
            {item.child && item.child.length > 0 && (
                <div className="dropdown__submenu">
                    {item.child.map((childItem) => (
                        <div
                            key={childItem._id}
                            className="dropdown__item--name"
                            onClick={() => handleItemClick(childItem._id)}
                        >
                            {childItem.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const DropdownItem = memo(DropdownItemComponent);
