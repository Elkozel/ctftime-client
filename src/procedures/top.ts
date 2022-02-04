export const topPath: string = "/top/";

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