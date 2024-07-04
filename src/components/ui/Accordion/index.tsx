import { useState } from "react";
import "./index.scss";
import { AccordionItem } from "./AccordionItem";

interface AccordionData {
    _id: number;
    title: string;
    contents?: { title: string }[];
}

interface AccordionProps {
    data: AccordionData[];
}

export const Accordion = ({ data }: AccordionProps) => {
    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    };
    return (
        <div className="accordion">
            <ul className="accordion__list">
                {data.map((item) => (
                    <AccordionItem
                        key={item._id}
                        item={{
                            ...item,
                            contents: item.contents || [],
                        }}
                        active={active}
                        handleToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
};
