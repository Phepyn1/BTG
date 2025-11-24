import type { Vaccination } from "./VaccinationI"

export interface Person {
    id: string;
    name: string;
    uniqueID: string;         
    vaccinations: Vaccination[]; 
}

export interface PersonCreate{
    name: string,
    uniqueId: string,
}