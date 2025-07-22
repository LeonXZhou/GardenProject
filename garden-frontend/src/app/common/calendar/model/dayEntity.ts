export type dayEntity = {
    dayOfMonth: number;
    dayOfWeek: daysOfTheWeek | null;
}

export enum daysOfTheWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}