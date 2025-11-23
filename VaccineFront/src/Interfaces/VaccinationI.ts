export interface VaccinetionDashboard{
    persons: number;
    vaccine: number;
    total: number;
}
export interface VaccinationCreate {
  personId: string;
  vaccineId: string;
  doseId: string;
  date: Date;
}

export interface Vaccination
{
    id: string;
    vaccineName: string;
    DoseName: string;
    date: Date;
}
