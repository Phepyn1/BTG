export interface Vaccine{
    id: string,
    name: string,
    doses: number,
    uniqueID: string,
}
export interface VaccineCreate{
    name: string,
    uniqueID: string,
}