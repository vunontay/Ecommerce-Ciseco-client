import { memo } from "react";
import { IconButton } from "../IconButton";
import "./index.scss";

interface PageHeadingProps {
    heading: string;
    subHeading: string;
    onPrevClick?: () => void;
    onNextClick?: () => void;
}

const PageHeadingComponent = ({
    heading,
    subHeading,
    onPrevClick,
    onNextClick,
}: PageHeadingProps) => {
    return (
        <div className="page-heading">
            <h2 className="page-heading__title">
                {heading} <span>{subHeading}</span>
            </h2>
            <div className="page-heading__arrows">
                <div
                    className="page-heading__arrows--prev"
                    onClick={onPrevClick}
                >
                    <IconButton icon="icons8:left-arrow" />
                </div>
                <div
                    className="page-heading__arrows--next"
                    onClick={onNextClick}
                >
                    <IconButton icon="icons8:right-arrow" />
                </div>
            </div>
        </div>
    );
};

export const PageHeading = memo(PageHeadingComponent);
