import axios, { AxiosInstance, AxiosResponse } from "axios";
import { eventOptions, eventParams, eventResponse, eventsPath } from "./procedures/events";
import { Results } from "./procedures/results";
import { TeamsResponse, TeamResponse, teamsPath } from "./procedures/teams";
import { topPath, TopTeams } from "./procedures/top";

export class API {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "https://ctftime.org/api/v1/"
        });
    }

    /**
     * Retrieve data about a single event.
     * @param eventid the id of the event
     */
    async getEvents(eventid: number): Promise<eventResponse>;
    /**
     * Retrieve the events for a given time interval.
     * @param options the options for the search
    */
    async getEvents(options: eventOptions): Promise<[eventResponse]>;
    async getEvents(options: eventOptions | number): Promise<eventResponse | [eventResponse]> {
        let response: AxiosResponse;
        if (typeof options === "number")// check if an eventID was suppilied
            // issue request
            response = await this.instance.get(`events/${options}/`)
        else {
            // Convert dates to epoch time (since the API said so)
            let requestParams: eventParams = {};
            if (options.start) requestParams.start = options.start.getTime();
            if (options.finish) requestParams.finish = options.finish.getTime();
            // Issue request
            response = await this.instance.get(eventsPath, {
                params: options
            })
        }

        return response.data;
    }

    /**
     * Retrieve the current top 10 teams.
     */
    async getTop(): Promise<TopTeams>;
    /**
     * Retrieve the top 10 teams for a given year.
     * @param year the year for which the top teams are retrieved
     */
    async getTop(year: number): Promise<TopTeams>;
    async getTop(year?: number) {
        let fullURL = topPath + (year ?? "");
        let response = await this.instance.get<TopTeams>(fullURL);

        return response.data;
    };



    /**
     * Retrieve information about the current teams.
     */
    async getTeams(): Promise<TeamsResponse>;
    /**
     * Retrieve data for a given team.
     * @param teamID the ID of the team
     */
    async getTeams(teamID: number): Promise<TeamResponse>;
    async getTeams(teamID?: number): Promise<TeamsResponse | TeamResponse> {
        let fullURL = teamsPath + (teamID ?? "");

        let response = await this.instance.get(fullURL);

        return response.data;
    };

    /**
     * Retrieve the votes for a given year.
     * @param year the year to retrieve the votes for
     */
    async getVotes(year: number): Promise<any[]> {
        let fullURL = `votes/${year}/`
        let response = await this.instance.get(fullURL);

        return response.data;
    };

    /**
     * Retrieve the results for current events.
     */
    async getResults(): Promise<Results>;
    /**
     * Retrieve the results for a given year.
     * @param year the year for which the results are fetched
     * @returns the results per event
     */
    async getResults(year: number): Promise<Results>;
    async getResults(year?: number): Promise<Results> {
        let fullURL = `results/${year ?? ""}`;

        let response = await this.instance.get<Results>(fullURL);

        return response.data;
    };
}