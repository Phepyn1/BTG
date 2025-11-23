import type { VaccinetionDashboard, VaccinationCreate, Vaccination } from "../Interfaces/VaccinationI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/Vaccination';


export class VaccinationService{
    public static async list(): Promise<Vaccination[]>
    {
        const result = await client.DoRequest('GET', endpoint);
        return result
    }

    public static async create(Vaccination: VaccinationCreate): Promise<Vaccination>
    {
        const result = await client.DoRequest('POST',endpoint,Vaccination);
        return result
    }

    public static async delete(Id:string)
    {
        const result = await client.DoRequest('DELETE',`${endpoint}/${Id}`);
        return result
    }
}