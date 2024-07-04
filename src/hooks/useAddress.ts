import { UseQueryResult, useQuery } from "@tanstack/react-query";
import addressService from "../services/address-service";
import { TCommunes, TDistrict, TProvince } from "../types/address-type";

const useFetchProvince = (): UseQueryResult<TProvince[]> => {
    return useQuery({
        queryKey: ["address"],
        queryFn: () => addressService.apiGetProvinces(),
        select: (response) => response.data || [],
        retry: false,
        staleTime: Infinity,
    });
};

const useFetchDistrict = (idProvince: string): UseQueryResult<TDistrict[]> => {
    return useQuery({
        queryKey: ["address", idProvince],
        queryFn: () => addressService.apiGetDistrict(idProvince),
        select: (response) => response.data || [],
        retry: false,
        staleTime: Infinity,
    });
};

const useFetchCommunes = (idDistrict: string): UseQueryResult<TCommunes[]> => {
    return useQuery({
        queryKey: ["address", idDistrict],
        queryFn: () => addressService.apiGetCommune(idDistrict),
        select: (response) => response.data || [],
        retry: false,
        staleTime: Infinity,
    });
};

export const useAddress = {
    useFetchProvince,
    useFetchDistrict,
    useFetchCommunes,
};
