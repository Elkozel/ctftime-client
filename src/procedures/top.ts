import { AxiosInstance } from "axios";

const URL: string = "/top/";

// /**
//  * Retrieve the top 10 teams for the curent year.
//  * @param instance the Axios instance used to make the connection
//  */
// export async function getTop(instance: AxiosInstance): Promise<topTeams>;
// /**
//  * Retrieve the top 10 teams for a given year.
//  * @param instance the Axios instance used to make the connection
//  * @param year the year for which the top teams are retrieved
//  */
// export async function getTop(instance: AxiosInstance, year: number): Promise<topTeams>;
export async function getTop(instance: AxiosInstance, year?: number): Promise<TopTeams> {
    let fullURL = URL + (year ?? "");
    let response = await instance.get<TopTeams>(fullURL);

    return response.data;
}

/**
 * Information about the team.
 */
export interface yearlyTop {
    team_name: string;
    points: number;
    team_id: number;
}

/**
 * The response from the API.
 */
export interface TopTeams {
    [year: number]: yearlyTop[]
}