export const teamsPath: string = "teams/";

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


