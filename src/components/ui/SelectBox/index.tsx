import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { Icon } from "@iconify/react";
import { Textfield } from "../Textfield";

interface SelectBoxProps {
    data: any;
    onSelect: (selectedItem: any | null) => void;
    label?: string;
    error: boolean;
    helperText: string;
}

const SelectBox: React.FC<SelectBoxProps> = React.memo(
    ({ data, onSelect, label, error, helperText }: SelectBoxProps) => {
        const [isOpen, setIsOpen] = useState(false);
        const [filteredData, setFilteredData] = useState(data);
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (data) {
                setFilteredData(data);
            }
        }, [data]);

        useEffect(() => {
            const handleDocumentClick = (e: MouseEvent) => {
                if (inputRef.current && e.target !== inputRef.current) {
                    setIsOpen(false);
                }
            };

            document.addEventListener("click", handleDocumentClick);
            return () =>
                document.removeEventListener("click", handleDocumentClick);
        }, []);

        const handleChange = () => {
            const filterValue = inputRef.current?.value.toLowerCase() || "";
            const filtered = data?.filter((item: any) =>
                item?.name.toLowerCase().includes(filterValue)
            );
            setFilteredData(filtered);
            setIsOpen(true);
        };

        const handleSelectItem = (item: any) => {
            if (inputRef.current) {
                inputRef.current.value = item?.name;
            }
            setIsOpen(false);
            onSelect(item);
            setFilteredData(data);
        };

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        const renderDropdown = () => {
            if (!isOpen) return null;

            const itemsToRender =
                filteredData?.length > 0 ? filteredData : data;

            if (filteredData?.length === 0 && inputRef.current?.value) {
                return (
                    <div className="select-box__not-found">
                        Result not found!
                        <Icon icon="bx:search-alt" width={20} height={20} />
                    </div>
                );
            }

            return itemsToRender?.map((item: any, index: number) => (
                <div
                    className="select-box__option"
                    key={index}
                    onClick={() => handleSelectItem(item)}
                >
                    {item.name}
                </div>
            ));
        };

        return (
            <div className="select-box">
                <Textfield
                    ref={inputRef}
                    label={label}
                    onChange={handleChange}
                    onClick={toggleDropdown}
                    error={error}
                    helperText={helperText}
                />
                <div
                    className={`select-box__options ${isOpen ? "open" : ""} ${
                        error ? "error" : ""
                    }`}
                >
                    {renderDropdown()}
                </div>
            </div>
        );
    }
);

export { SelectBox };
