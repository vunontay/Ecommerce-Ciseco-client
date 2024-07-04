import { Icon } from "@iconify/react/dist/iconify.js";
import "./index.scss";
import { memo, useMemo } from "react";

interface PaginationProps {
    totalPages: number;
    filter: {
        offset: number;
    };
    setPage: (page: number) => void;
}

const PaginationComponent = ({
    totalPages,
    filter,
    setPage,
}: PaginationProps) => {
    const currentPage = filter.offset;

    const getPages = () => {
        const pages: (number | string)[] = [];
        const totalPaginationItem = 5;

        pages.push(1);

        if (totalPages > totalPaginationItem) {
            if (currentPage > 3) {
                pages.push("...");
            }

            for (
                let i = Math.max(2, currentPage - 1);
                i <= Math.min(currentPage + 1, totalPages - 1);
                i++
            ) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push("...");
            }
        } else {
            for (let i = 2; i < totalPages; i++) {
                pages.push(i);
            }
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };
    const pages = useMemo(getPages, [currentPage, totalPages]);
    const navigateToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="pagination">
            <span
                className={`pagination__button ${
                    currentPage === 1 ? "disabled" : ""
                }`}
                onClick={() => navigateToPage(currentPage - 1)}
            >
                <Icon icon="mingcute:left-fill" />
            </span>

            <nav className="pagination__list" aria-label="Pagination">
                {pages?.map((page, index) => (
                    <span
                        key={index}
                        className={`pagination__item ${
                            page === currentPage ? "active" : ""
                        }`}
                        onClick={() =>
                            typeof page === "number" && navigateToPage(page)
                        }
                    >
                        {page}
                    </span>
                ))}
            </nav>

            <span
                className={`pagination__button ${
                    currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() => navigateToPage(currentPage + 1)}
            >
                <Icon icon="mingcute:right-fill" />
            </span>
        </div>
    );
};

export const Pagination = memo(PaginationComponent);
