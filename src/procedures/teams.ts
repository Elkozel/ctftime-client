import { AxiosInstance } from "axios";

const URL: string = "teams/";

// /**
//  * Retrieve all current teams.
//  * @param instance the Axios instance used to make the connection
//  */
// export async function getTeams(instance: AxiosInstance): Promise<TeamsResponse>;
// /**
//  * Retrieve data for a given team
//  * @param instance the Axios instance used to make the connection
//  * @param teamID the ID of the team
//  */
// export async function getTeams(instance: AxiosInstance, teamID: number): Promise<TeamResponse>;
export async function getTeams(instance: AxiosInstance, teamID?: number): Promise<TeamsResponse | TeamResponse> {
    let fullURL = URL + (teamID ?? "");

    let response = await instance.get(fullURL);

    return response.data;
}

/**
 * The response when team is not given
 */
export interface TeamsResponse {
    limit: number;
    result: Result[];
    offset: number;
}

export interface Result {
    aliases: string[];
    country: string;
    academic: boolean;
    id: number;
    name: string;
}


/**
 * The response when a team is given
 */
export interface TeamResponse {
    academic: boolean;
    primary_alias: string;
    name: string;
    rating: Rating;
    logo: string;
    country: string;
    id: number;
    aliases: string[];
}

export interface YearlyRating {
    rating_place?: number;
    organizer_points?: number;
    rating_points?: number;
    country_place: number;
}

export interface Rating {
    [year: number]: YearlyRating;
}


