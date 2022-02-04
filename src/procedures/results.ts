import { AxiosInstance } from "axios";

const URL = "results/{year}/";

/**
 * Retrieve the results for a given year.
 * @param instance the Axios instance used to make the connection
 * @param year the year for which the results are fetched
 * @returns the results per event
 */
export async function getResults(instance: AxiosInstance, year?: number): Promise<Results> {
    let fullURL = `results/${year ?? ""}`;

    let response = await instance.get<Results>(fullURL);

    return response.data;
}

export interface Score {
    team_id: number;
    points: string;
    place: number;
}

export interface EventInfo {
    title: string;
    scores: Score[];
    time: number;
}

export interface Results {
    [eventId: number]: EventInfo;
}