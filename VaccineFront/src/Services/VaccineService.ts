import type { Vaccine, VaccineCreate } from "../Interfaces/VaccineI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/vaccine';


export class VaccineService{
    public static async list(): Promise<Vaccine[]>
    {
        const result = await client.DoRequest('GET', endpoint);
        return result
    }

    public static async create(Vaccine: VaccineCreate): Promise<Vaccine>
    {
        const result = await client.DoRequest('POST',endpoint,Vaccine);
        return result
    }

    public static async delete(Id:string)
    {
        const result = await client.DoRequest('DELETE',`${endpoint}/${Id}`);
        return result
    }
}