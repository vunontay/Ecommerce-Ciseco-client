import { TToken } from "../types/auth-type";

export const tokenService = () => {
    function getLocalRefreshToken(): string | null {
        const tokenList = localStorage.getItem("token_list");
        if (tokenList) {
            const parsedTokenList: TToken = JSON.parse(tokenList);
            return parsedTokenList.refreshToken;
        }
        return null;
    }

    function getLocalAccessToken(): string | null {
        const tokenList = localStorage.getItem("token_list");
        if (tokenList) {
            const parsedTokenList: TToken = JSON.parse(tokenList);
            return parsedTokenList.accessToken;
        }
        return null;
    }

    function updateLocalAccessToken(token: string): TToken | null {
        const tokenList = localStorage.getItem("token_list");
        if (tokenList) {
            const parsedTokenList: TToken = JSON.parse(tokenList);
            parsedTokenList.accessToken = token;
            localStorage.setItem("token_list", JSON.stringify(parsedTokenList));
            return parsedTokenList;
        }
        return null;
    }

    function removeTokenList(): void {
        localStorage.removeItem("token_list");
    }

    function setTokenList(tokenList: TToken): void {
        localStorage.setItem("token_list", JSON.stringify(tokenList));
    }

    function getTokenList(): TToken | null {
        const tokenList = localStorage.getItem("token_list");
        if (tokenList) {
            return JSON.parse(tokenList);
        }
        return null;
    }

    return {
        getLocalRefreshToken,
        getLocalAccessToken,
        updateLocalAccessToken,
        removeTokenList,
        setTokenList,
        getTokenList,
    };
};
