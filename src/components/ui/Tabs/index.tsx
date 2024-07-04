import { memo, useState, useEffect, useMemo } from "react";
import "./index.scss";
import { useLocation } from "react-router-dom";
import _ from "lodash";

export type DataTabItem = {
    title: string;
    id: number;
    path?: string;
};

interface TabProps {
    data: DataTabItem[];
    onChangeTab: (tab: DataTabItem) => void;
    ignoredPaths?: string[];
}

const TabComponent = ({ data, onChangeTab, ignoredPaths }: TabProps) => {
    const location = useLocation();

    const path = useMemo(() => {
        return _.chain(location.pathname)
            .split("/")
            .filter((part) => !ignoredPaths?.includes(part) && part !== "")
            .last()
            .defaultTo("default")
            .value();
    }, [location.pathname, ignoredPaths]);

    const [activeTabId, setActiveTabId] = useState<number | undefined>();

    useEffect(() => {
        const activeTab = data.find((tab) =>
            tab.path ? tab.path.endsWith(path) : path === "default"
        );

        if (activeTab) {
            setActiveTabId(activeTab.id);
        } else {
            setActiveTabId(data[0]?.id);
        }
    }, [path, data]);

    const handleActive = (tab: DataTabItem) => {
        onChangeTab(tab);
        setActiveTabId(tab.id);
    };

    return (
        <div className="tabs">
            <div className="tabs__menu">
                <div className="tabs__menu--list">
                    {data.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tabs__menu--item ${
                                activeTabId === tab.id ? "active" : ""
                            }`}
                            onClick={() => handleActive(tab)}
                        >
                            <span className="tabs__menu--item-link">
                                {tab.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Tabs = memo(TabComponent);
