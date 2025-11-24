import type { Dose, DoseCreate } from "../Interfaces/DoseI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/dose';


export class DoseService{
    public static async list(): Promise<Dose[]>
    {
        const result = await client.DoRequest('GET', endpoint);
        return result
    }

    public static async getByid(Id:string)
    {
        const result = await client.DoRequest('GET',`${endpoint}/${Id}`);
        return result
    }
}