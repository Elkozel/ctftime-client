import { AxiosInstance } from "axios";

const URL = "votes/{year}/"

/**
 * Retrieve the votes for a given year.
 * @param instance the Axios instance used to make the connection
 * @param year the year to retrieve the votes for
 * @returns an array with all votes
 */
export async function getvotes(instance: AxiosInstance, year: number): Promise<any[]> {
    let fullURL = `votes/${year}/`
    let response = await instance.get(fullURL);

    return response.data;
}