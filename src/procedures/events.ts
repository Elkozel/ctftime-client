import { AxiosInstance, AxiosResponse } from "axios";

export const eventsPath = "/events/";

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
export interface eventParams {
    limit?: number,
    start?: number,
    finish?: number
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