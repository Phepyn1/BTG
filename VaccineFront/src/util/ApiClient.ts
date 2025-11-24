import axios, { type Method } from 'axios'

const baseURL = import.meta.env.VITE_API_URI;

export const api = axios.create({
  baseURL,
})

class ApiClient {
  public async DoRequest(
    method: Method = 'GET',
    endpoint: string,
    data: any = {},
  ) {
    const url = endpoint.includes('http') ? endpoint : `${baseURL}${endpoint}`;
    
    const headers: Record<string, string> = {
      Accept: 'application/json',
    };

    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }


    const requestConfig: any = {
      method,
      url,
      headers,
    };

    if (method.toUpperCase() === 'GET') {
      requestConfig.params = data;
    } else {
      requestConfig.data = data;
    }

    const response = await axios(requestConfig);

    if (response.data && response.data.status === 'error') {
      throw new Error('Legacy API status error');
    }

    return response.data;
  }
}

export default ApiClient;
