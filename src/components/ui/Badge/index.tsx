import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.scss";

interface BadgeProps {
    name: string;
    className?: string;
}

export const Badge = ({ name, className }: BadgeProps) => {
    return (
        <div className={`${className} badge`}>
            <Icon icon="mdi:stars-outline" />
            <span>{name}</span>
        </div>
    );
};
