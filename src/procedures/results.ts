export const resultsPath = "results/{year}/";

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