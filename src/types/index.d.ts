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


export interface CalendarData {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
}

export interface IAge {
    years: number;
    months: number;
    days: number;
}