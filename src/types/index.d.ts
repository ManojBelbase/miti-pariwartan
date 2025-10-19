export interface CalendarData {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
}

export const engMonthNames: readonly string[];
export const monthNames: readonly string[];
export const weekdayNames: readonly string[];
export const nepaliWeekdayNames: readonly string[];

export type WeekdayName = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
export type NepaliWeekdayName = 'Aaitabar' | 'Sombar' | 'Mangalbar' | 'Budhabar' | 'Bihibar' | 'Shukrabar' | 'Shanibar';

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
    monthName: string;
    formatted: string;
    readable: string;
    weekdayIndex: number;
    weekdayName: WeekdayName;
    nepaliWeekdayName: NepaliWeekdayName;
}

export declare function adToBs(adInput: string | Date): BSDate;
export declare function bsToAd(bsInput: string | { year: number; month: number; day: number }): ADDate;
