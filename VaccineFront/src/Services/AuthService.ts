import ApiClient from '../util/ApiClient'

interface LoginResponse {
  token: string;
}
interface loginUser{
    username: string;
    password: string;
}
const client = new ApiClient()
const endpoint = 'api/auth/login';

export class AuthService{
 public static async Login(login: loginUser): Promise<LoginResponse>
    {
        const response = await client.DoRequest('POST',endpoint,login);
        return response
    }
}