import { AxiosResponse } from "axios";
import axiosConfig from "./axios-config";
import { TCommunes, TDistrict, TProvince } from "../types/address-type";

class AddressService {
    private apiUrl =
        "https://vietnam-administrative-division-json-server-swart.vercel.app";

    async apiGetProvinces(): Promise<AxiosResponse<TProvince[]>> {
        const response = await axiosConfig.get<TProvince[]>(
            `${this.apiUrl}/province`
        );
        return response;
    }

    async apiGetDistrict(
        idProvince: string
    ): Promise<AxiosResponse<TDistrict[]>> {
        const response = await axiosConfig.get<TDistrict[]>(
            `${this.apiUrl}/district/?idProvince=${idProvince}`
        );
        return response;
    }

    async apiGetCommune(
        idDistrict: string
    ): Promise<AxiosResponse<TCommunes[]>> {
        const response = await axiosConfig.get<TCommunes[]>(
            `${this.apiUrl}/commune/?idDistrict=${idDistrict}`
        );
        return response;
    }
}

export default new AddressService();
