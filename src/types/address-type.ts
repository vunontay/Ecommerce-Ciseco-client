export type TProvince = {
    idProvince: string;
    name: string;
};

export type TDistrict = {
    idDistrict: string;
} & TProvince;

export type TCommunes = {
    idCommune: string;
} & Omit<TDistrict, "idProvince">;
