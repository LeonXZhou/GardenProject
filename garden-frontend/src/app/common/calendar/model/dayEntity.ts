export type dayEntity = {
    dayOfMonth: number | null;
    dayOfWeek: daysOfTheWeek | null;
    dayOfWeekString: String | null;
    renderId: number;
}

export enum daysOfTheWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    NotADate
}

export const daysOfTheWeekString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']