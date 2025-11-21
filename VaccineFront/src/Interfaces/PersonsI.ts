import type { Vaccine } from "./VaccineI"

export interface Person
{
    id: string,
    name: string,
    uniqueID: string,
    Vaccines: Vaccine[]
}