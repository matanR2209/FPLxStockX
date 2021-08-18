import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import * as qs from "qs";

export class NetworkService {
    public static get<T = any>(
        url: string,
        query?: any,
        headers?: { [key: string]: string }
    ) {
        let urlWithParams = url;
        if (query) {
            const queryString = qs.stringify(query);
            urlWithParams = `${url}?${queryString}`;
        }
        return this.parseAxiosRequest<T>(axios.get(urlWithParams, { headers }));
    }

    public static post<T = any>(url: string, body: any) {
        const headers = {
            headers: {
                ContentType: "application/json"
            }
        };
        return this.parseAxiosRequest<T>(axios.post(url, body, headers));
    }

    public static authenticatedGet<T = any>(url: string, token: string) {
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return this.parseAxiosRequest<T>(axios.get(url, headers));
    }

    public static authenticatedPost<T = any>(
        url: string,
        body: any,
        token: string
    ) {
        return this.parseAxiosRequest<T>(
            axios.post(url, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    ContentType: "application/json"
                }
            })
        );
    }

    public static authenticatedPut<T = any>(
        url: string,
        data: any,
        token: string
    ) {
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return this.parseAxiosRequest<T>(axios.put(url, data, headers));
    }

    private static async parseAxiosRequest<T>(
        request: AxiosPromise<T>
    ): Promise<any> {
        const response = await request;
        if (!response) {
            throw new Error(`Bad status ${JSON.stringify(response)}`);
        } else {
            return response;
        }
    }
}