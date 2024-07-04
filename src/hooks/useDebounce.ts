import { useEffect, useRef, useState } from "react";

export const useDebounce = (value: string | number, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<string | number>(
        value
    );
    const timerRef = useRef<number | undefined>();

    useEffect(() => {
        // Clear the previous timer if value or delay changes before it expires
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set a new timer to update debouncedValue after delay
        timerRef.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timer if the component unmounts or if value/delay changes
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [value, delay]);

    return debouncedValue;
};
