import { dayEntity } from "./dayEntity";

export type weekEntity = {
    days: Array<dayEntity>;
    weekOfTheMonth: number;
}