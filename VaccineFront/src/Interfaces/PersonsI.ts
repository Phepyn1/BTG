import type { Vaccine } from "./VaccineI"

export interface Person
{
    id: string,
    name: string,
    uniqueID: string,
    Vaccines: Vaccine[]
}


export interface PersonCreate{
    name: string,
    uniqueID: string,
}