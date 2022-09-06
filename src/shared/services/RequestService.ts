import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { createInstance } from '../../configs/Axios';

export class RequestService {
    private httpClient: AxiosInstance;

    private constructor(
        baseURL?: string,
        errorInterceptor?: (error: AxiosError) => void,
    ) {
        this.httpClient = createInstance({ baseURL, errorInterceptor });
    }

    static getInstance(
        baseURL: string,
        errorInterceptor?: (error: AxiosError) => void,
    ) {
        return new RequestService(baseURL, errorInterceptor);
    }

    async get<T>(url: string, config: AxiosRequestConfig) {
        return await this.httpClient.get<T>(url, config);
    }

    async post<T>(url: string, data: T, config?: AxiosRequestConfig) {
        return await this.httpClient.post<T>(url, { data }, config);
    }
}
