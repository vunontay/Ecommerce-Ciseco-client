export type TSuccess = {
    success: boolean;
    status: number;
    message: string;
};

export type TError = {
    status: number;
    message: string;
};

export type TSliderType = {
    id: number;
    url: string;
};

export type TQueryParams = {
    [key: string]: string | string[] | number | undefined;
};
