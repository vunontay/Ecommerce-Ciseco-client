import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useRef } from "react";

interface SubContent {
    title: string;
}

interface AccordionItemProps {
    item: {
        _id: number;
        title: string;
        contents: SubContent[];
    };

    active: number | null;
    handleToggle: (id: number) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    item,
    active,
    handleToggle,
}) => {
    const contentEl = useRef<HTMLDivElement | null>(null);

    return (
        <li className="accordion__item">
            <h2
                onClick={() => handleToggle(item._id)}
                className={`accordion__title ${
                    active === item._id ? "active" : ""
                }`}
            >
                {item.title}
                {item.contents.length > 0 && (
                    <span
                        className={`accordion__icon ${
                            active === item._id ? "active" : ""
                        }`}
                    >
                        <Icon icon="mingcute:right-fill" />
                    </span>
                )}
            </h2>

            <div
                ref={contentEl}
                className={`accordion__content ${
                    active === item._id ? "active" : ""
                }`}
                style={
                    active === item._id
                        ? { height: contentEl?.current?.scrollHeight }
                        : { height: "0px" }
                }
            >
                <ul>
                    {item.contents?.map((content, index) => (
                        <li key={index}>{content.title}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
};
