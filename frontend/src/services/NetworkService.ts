import axios, { AxiosPromise } from "axios";
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

    private static async parseAxiosRequest<T>(
        request: AxiosPromise<T>
    ): Promise<any> {
        const response = await request;
        if (!response) {
            throw new Error(`Bad status ${JSON.stringify(response)}`);
        } else {
            return response.data;
        }
    }
}