
import type { Person } from "../Interfaces/PersonsI";
import ApiClient from "../util/ApiClient"



const client = new ApiClient()
const endpoint = 'api/person';


export class PersonService{
    public static async list(): Promise<Person[]>
    {
        const result = await client.DoRequest('GET', endpoint)
        return result
    }

    public static async create(person: Person): Promise<Person>
    {
        const result = await client.DoRequest('POST',endpoint,person);
        return result
    }
}