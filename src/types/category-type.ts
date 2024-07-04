import { TSuccess } from ".";
export type TCategory = {
    _id: string;
    name: string;
    path?: string;
    child?: TCategory[];
};

type CategoryTreeResponse = {
    tree: TCategory[];
};

export type TCategoryTreeResponseWithSuccess = CategoryTreeResponse & TSuccess;
