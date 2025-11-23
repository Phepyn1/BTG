import type { Person, PersonCreate } from "../Interfaces/PersonsI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/person';


export class PersonService{
    public static async list(): Promise<Person[]>
    {
        const result = await client.DoRequest('GET', endpoint);
        return result
    }

    public static async create(person: PersonCreate): Promise<Person>
    {
        const result = await client.DoRequest('POST',endpoint,person);
        return result
    }

    public static async delete(Id:string)
    {
        const result = await client.DoRequest('DELETE',`${endpoint}/${Id}`);
        return result
    }
}