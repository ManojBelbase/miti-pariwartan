export declare const yearStart: Record<string, string>, monthLengths: Record<string, number[]>, monthNames: string[];
export interface CalendarData {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
}
export declare const weekdayNames: readonly ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export type WeekdayName = typeof weekdayNames[number];
export declare const nepaliWeekdayNames: string[];
export type NepaliWeekdayName = typeof nepaliWeekdayNames[number];
export interface BSDate {
    year: number;
    month: number;
    day: number;
    formatted: string;
    readable: string;
    weekdayIndex: number;
    weekdayName: WeekdayName;
    nepaliWeekdayName: NepaliWeekdayName;
}
export interface ADDate {
    year: number;
    month: number;
    day: number;
    formatted: string;
    readable: string;
    weekdayIndex: number;
    weekdayName: WeekdayName;
    monthName?: string;
}
export declare function parseDate(str: string): Date;
export declare function addDays(date: Date, days: number): Date;
export declare function localizeDate(date: Date): string;
export declare function getBSYear(adDate: Date): string;
export declare function getDaysPassed(bsYear: string, adDate: Date): number;
export declare function getBSMonthAndDay(bsYear: string, daysPassed: number): {
    month: number;
    day: number;
};
export declare function getWeekdayFromAD(adInput: string | Date): {
    weekdayIndex: number;
    weekdayName: WeekdayName;
    nepaliWeekdayName: NepaliWeekdayName;
};
