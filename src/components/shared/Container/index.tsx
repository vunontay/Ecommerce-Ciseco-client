import { ReactNode, memo } from "react";
import "./index.scss";

interface IContainerProps {
    children: ReactNode;
}

export const Container = memo(({ children }: IContainerProps) => {
    return <div className="container">{children}</div>;
});
