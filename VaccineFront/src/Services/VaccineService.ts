import  type {Vaccine}  from "../Interfaces/VaccineI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/vaccine';


export class VaccineService{
    public static async list(): Promise<Vaccine[]>
    {
        const result = await client.DoRequest('GET', endpoint)
        return result
    }

    public static async create(vaccine:Vaccine): Promise<Vaccine>
    {
        const result = await client.DoRequest('POST',endpoint,vaccine);
        return result
    }
}