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



export interface IBSDate {
    input: string;

    year: {
        np: string;
        en: string;
    };

    month: {
        index: number;
        np: string;
        en: string;
    };

    day: {
        np: string;
        en: string;
    };

    week: {
        index: number;
        np: string;
        en: string;
    };



    formatted: {
        en: string;
        np: string;
        standard: string;
    };

}


export interface IADDate {
    input: string;

    year: {
        np: string;
        en: string;
    };

    month: {
        index: number;
        np: string;
        en: string;
    };

    day: {
        np: string;
        en: string;
    };

    week: {
        index: number;
        np: string;
        en: string;
    };

    formatted: {
        en: string;
        np: string;
        standard: string;
    };
}

export declare function adToBs(adInput: string | Date): BSDate;
export declare function bsToAd(bsInput: string | { year: number; month: number; day: number }): ADDate;

export interface CalendarData {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
}