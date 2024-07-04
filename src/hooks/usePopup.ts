import { useEffect, useRef } from "react";

export const usePopup = () => {
    const popupRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popupRef.current &&
            !popupRef.current.contains(event.target as Node) &&
            !triggerRef.current?.contains(event.target as Node)
        ) {
            popupRef.current.classList.remove("open");
            popupRef.current.classList.add("close");
            setTimeout(() => {
                if (popupRef.current) popupRef.current.style.display = "none";
            }, 500);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const togglePopup = () => {
        if (popupRef.current) {
            if (popupRef.current.style.display === "block") {
                popupRef.current.classList.remove("open");
                popupRef.current.classList.add("close");
                setTimeout(() => {
                    if (popupRef.current)
                        popupRef.current.style.display = "none";
                }, 500);
            } else {
                popupRef.current.style.display = "block";
                popupRef.current.classList.remove("close");
                popupRef.current.classList.add("open");
            }
        }
    };

    return { popupRef, triggerRef, togglePopup };
};
