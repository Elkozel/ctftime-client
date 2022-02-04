# CTFTime Client
CTFTime Client is an unofficial client for the API of CTFTime.

## Special disclaimer
The following disclaimer is shown on the API page of CTF Time, so please respect it:
```
You can not use this API to run CTFtime clones — most of the CTFtime data is moderated by humans, please, respect their time.
```

## Installation
The project can be installed simply via npm: (TODO)
```shell
npm install ctf-client
```
the package is still not available on yarn, commming soon!

## Usage
### Retrieve all events

### Retrieve current top 10 teams

### (...)

## Version
The client supports the current version (v1) of the API. For more information, please refer to the  [API documentation page](https://ctftime.org/api/) of CTFTime.

## Methods
The API client supports all the calls, which are shown in the [API documentation page](https://ctftime.org/api/).

### Top 10 teams
Retrieve the current top 10 teams
```ts
async getTeams(): Promise<TeamsResponse>;
```
Retrieve the top 10 teams for a given year
```ts
async getTop(year: number): Promise<topTeams>;
```

### Events information
Retrieve data about a single event
```ts
async getEvents(eventid: number): Promise<eventResponse>;
```
Retrieve the events for a given time interval
```ts
interface eventOptions {
    limit?: number, // default 5
    start?: Date, // default now
    finish?: Date // default unlimited
}

async getEvents(options: eventOptions): Promise<eventResponse>;
```

### Information about teams
Retrieve information about the current teams
```ts
async getTeams(): Promise<TeamsResponse>;
```
Retrieve data for a given team
```ts
async getTeams(teamID: number): Promise<TeamResponse>;
```

### Event results
Retrieve the results for current events
```ts
async getResults(): Promise<Results>;
```
Retrieve the results for a given year
```ts
async getResults(year: number): Promise<Results>;
```

### Event votes by year
Retrieve the votes for a given year
```ts
async getVotes(year: number): Promise<any[]>
```
Unfortunately, no successful response was observed for a given year, which is why the resoinse object for this call is still not implemented.

## Testing and Linting
The project have implemented tests, which could be run via npm: (TODO)
```shell
npm test
```
The project also uses eslint for linting: (TODO)
```shell
npm run lint
```

## Improvements
Please feel free to propose improvements via the Issues section or by collaborating to this project :).