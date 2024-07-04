import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const useCachedData = (queryKey: string[]) => {
    return queryClient.getQueryData(queryKey);
};
