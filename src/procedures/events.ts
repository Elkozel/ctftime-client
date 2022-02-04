import { AxiosInstance, AxiosResponse } from "axios";

const URL = "/events/";

/**
 * An interface for the options, with which the request is executed.
 */
export interface eventOptions {
    limit?: number, // default 5
    start?: Date, // default now
    finish?: Date // default unlimited
}

/**
 * An interface for the parameters in the HTTP request.
 */
interface eventParams {
    limit?: number,
    start?: number,
    finish?: number
}

/**
 * Retrieve the events for a given time interval
 * @param instance the Axios instance used to make the connection
 * @param options the options for the search
 */
export async function getEvents(instance: AxiosInstance, options: eventOptions | number): Promise<eventResponse | [eventResponse]> {
    let response: AxiosResponse;
    if (typeof options === "number")// check if an eventID was suppilied
        // issue request
        response = await instance.get(`events/${options}/`)
    else {
        // Convert dates to epoch time (since the API said so)
        let requestParams: eventParams = {};
        if (options.start) requestParams.start = options.start.getTime();
        if (options.finish) requestParams.finish = options.finish.getTime();
        // Issue request
        response = await instance.get(URL, {
            params: options
        })
    }

    return response.data;
}

export interface Organizer {
    id: number;
    name: string;
}

export interface Duration {
    hours: number;
    days: number;
}

export interface eventResponse {
    organizers: Organizer[];
    onsite: boolean;
    finish: Date;
    description: string;
    weight: number;
    title: string;
    url: string;
    is_votable_now: boolean;
    restrictions: string;
    format: string;
    start: Date;
    participants: number;
    ctftime_url: string;
    location: string;
    live_feed: string;
    public_votable: boolean;
    duration: Duration;
    logo: string;
    format_id: number;
    id: number;
    ctf_id: number;
}