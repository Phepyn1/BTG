export interface VaccinetionDashboard{
    persons: number;
    vaccine: number;
    total: number;
}
export interface VaccinationCreate {
  personId: string;
  vaccineId: string;
  doseId: string;
  date: string;
} 

export interface Vaccination {
    id: string;
    vaccineName: string;
    dose: string;
    date: string; 
}