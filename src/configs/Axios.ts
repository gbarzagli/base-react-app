import { message } from 'antd';
import { default as axios, AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';

type CreateInstanceProps = {
    baseURL?: string;
    errorInterceptor?: (error: AxiosError) => void;
};
export const createInstance = ({
    baseURL,
    errorInterceptor = (error: AxiosError) => {
        switch (error.response?.status) {
            case StatusCodes.BAD_REQUEST: {
                message.error(
                    'Bad Request - There is something wrong on your request.',
                );
                break;
            }
            case StatusCodes.UNAUTHORIZED: {
                // TODO Redirect to Unauthorized page
                break;
            }
            case StatusCodes.NOT_FOUND: {
                // TODO Redirect to Not Found page
                break;
            }
            default: {
                message.error(error.response?.statusText);
            }
        }
    },
}: CreateInstanceProps) => {
    const instance = axios.create({
        baseURL,
    });

    instance.interceptors.response.use(
        (response) => response,
        errorInterceptor,
    );

    return instance;
};
