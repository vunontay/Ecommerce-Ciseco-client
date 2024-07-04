import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";
import { API_URL } from "../utils/constant";
import { tokenService } from "./token-service";

// Define the configuration for the Axios instance
const axiosConfig: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

// Set default headers for all requests
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";

// Request interceptor
axiosConfig.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const accessToken = tokenService().getLocalAccessToken();

        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error: AxiosError): Promise<never> => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _retry?: boolean;
        };

        if (
            error.response?.status === 403 &&
            originalRequest &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const refreshToken = tokenService().getLocalRefreshToken();
            const accessToken = tokenService().getLocalAccessToken();

            if (refreshToken && accessToken) {
                try {
                    const response = await axiosConfig.post<{
                        accessToken: string;
                    }>(
                        API_URL.REFRESH_TOKEN,
                        {
                            refreshToken: refreshToken,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                            },
                        }
                    );

                    const newAccessToken = response.data.accessToken;
                    tokenService().updateLocalAccessToken(newAccessToken);

                    // Update the Authorization header with the new access token
                    if (originalRequest.headers) {
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    }
                    return axiosConfig(originalRequest);
                } catch (err) {
                    tokenService().removeTokenList();
                    return Promise.reject(err);
                }
            }
        }
        return Promise.reject(error.response?.data);
    }
);

// Adding _retry property to AxiosRequestConfig
declare module "axios" {
    export interface InternalAxiosRequestConfig {
        _retry?: boolean;
    }
}

export default axiosConfig;
