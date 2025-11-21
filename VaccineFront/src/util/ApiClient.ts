import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URI;
export const api = axios.create({
  baseURL: baseURL,
})

class ApiClient {
  public async DoRequest(
    method: 'GET' | "POST" | 'PUT' | 'DELETE' = 'GET',
    endpoint: string,
    data: any = {},
  ) {
    const url = endpoint.includes('http')
      ? endpoint
      : `${baseURL}${endpoint}`
    const headers: any = {}
    headers.Accept = 'application/json'


        const requestConfig: any = {
      method,
      headers,
      url,
      data,
      params: undefined
    }

    const response = await axios(requestConfig)

    if (response.data && response.data.status === 'error') {
      throw new Error('Legacy API status error')
    }

    return response.data
  }


}

export default ApiClient
