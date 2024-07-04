import Skeleton from "react-loading-skeleton";
import "./index.scss";
interface SkeletonCardProps {
    cards: number;
}

export const SkeletonCard = ({ cards }: SkeletonCardProps) => {
    return (
        <div>
            {[...Array(cards)].map((_, i) => (
                <div className="card-skeleton" key={i}>
                    <div className="left-col">
                        <Skeleton circle width={40} height={40} />
                    </div>
                    <div className="right-col">
                        <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
                    </div>
                </div>
            ))}
        </div>
    );
};
