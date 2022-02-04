import axios, { AxiosInstance } from "axios";
import { eventOptions, eventResponse, getEvents } from "./procedures/events";
import { getResults, Results } from "./procedures/results";
import { TeamsResponse, TeamResponse, getTeams } from "./procedures/teams";
import { getTop, TopTeams } from "./procedures/top";
import { getvotes } from "./procedures/votes";

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
    async getEvents(options: eventOptions | number): Promise<eventResponse | [eventResponse]> { return await getEvents(this.instance, options); }

    /**
     * Retrieve the current top 10 teams.
     */
    async getTop(): Promise<TopTeams>;
    /**
     * Retrieve the top 10 teams for a given year.
     * @param year the year for which the top teams are retrieved
     */
    async getTop(year: number): Promise<TopTeams>;
    async getTop(year?: number) { return await getTop(this.instance, year) };



    /**
     * Retrieve information about the current teams.
     */
    async getTeams(): Promise<TeamsResponse>;
    /**
     * Retrieve data for a given team.
     * @param teamID the ID of the team
     */
    async getTeams(teamID: number): Promise<TeamResponse>;
    async getTeams(teamID?: number): Promise<TeamsResponse | TeamResponse> { return await getTeams(this.instance, teamID) };

    /**
     * Retrieve the votes for a given year.
     * @param year the year to retrieve the votes for
     */
    async getVotes(year: number): Promise<any[]> { return await getvotes(this.instance, year) };

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
    async getResults(year?: number): Promise<Results> { return await getResults(this.instance, year) };
}