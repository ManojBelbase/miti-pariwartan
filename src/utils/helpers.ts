import data from '../data/calendar.json';

export const { yearStart, monthLengths, monthNames } = data as {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
};

// Optional: Export the shape of the JSON data for users/advanced typing
export interface CalendarData {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
}

// Weekday constants (English; identical for AD/BS)
export const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
export type WeekdayName = typeof weekdayNames[number];

export const nepaliWeekdayNames = ['Aaitabar', 'Sombar', 'Mangalbar', 'Budhabar', 'Bihibar', 'Shukrabar', 'Shanibar']

export type NepaliWeekdayName = typeof nepaliWeekdayNames[number]

export interface BSDate {
    year: number;
    month: number;
    day: number;
    formatted: string;
    readable: string;
    weekdayIndex: number;
    weekdayName: WeekdayName;
    nepaliWeekdayName: NepaliWeekdayName,
}

export interface ADDate {
    year: number;
    month: number;
    day: number;
    formatted: string;
    readable: string;
    weekdayIndex: number;
    weekdayName: WeekdayName;
    monthName?: string
}

// Your existing helpers (parseDate, addDays, etc.) – unchanged
// Parse YYYY-MM-DD to UTC Date
export function parseDate(str: string): Date {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day));
}

// Add days to Date (UTC)
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
}

// Localize to Kathmandu TZ as YYYY-MM-DD
export function localizeDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const localStr = date.toLocaleDateString('en-GB', options);
    return localStr.split('/').reverse().join('-');
}

// Get BS year from AD date
export function getBSYear(adDate: Date): string {
    const localDate = localizeDate(adDate);
    let prevStart: string | null = null;
    const sortedYears = Object.keys(yearStart).sort((a, b) => parseInt(a) - parseInt(b));
    for (let i = 1; i < sortedYears.length; i++) {
        const currentStart = yearStart[sortedYears[i]];
        if (prevStart && localDate >= prevStart && localDate < currentStart) {
            return sortedYears[i - 1];
        }
        prevStart = currentStart;
    }
    if (prevStart && localDate >= prevStart) return sortedYears[sortedYears.length - 1];
    throw new Error('Date outside supported range (2070-2099 BS)');
}

// Days passed from BS year start
export function getDaysPassed(bsYear: string, adDate: Date): number {
    const localDate = localizeDate(adDate);
    const givenDate = parseDate(localDate);
    const startDate = parseDate(yearStart[bsYear]);
    const diffTime = givenDate.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
}

// BS month/day from days passed
export function getBSMonthAndDay(bsYear: string, daysPassed: number): { month: number; day: number } {
    let remaining = daysPassed;
    const lengths = monthLengths[bsYear];
    for (let i = 0; i < 12; i++) {
        if (remaining <= lengths[i]) {
            return { month: i + 1, day: remaining };
        }
        remaining -= lengths[i];
    }
    throw new Error('Invalid days calculation');
}

// New: Get weekday from AD date (for both converters)
export function getWeekdayFromAD(adInput: string | Date): {
    weekdayIndex: number;
    weekdayName: WeekdayName;
    nepaliWeekdayName: NepaliWeekdayName;
} {
    const adDate = typeof adInput === 'string' ? parseDate(adInput) : adInput;
    const weekdayIndex = adDate.getUTCDay();
    return {
        weekdayIndex,
        weekdayName: weekdayNames[weekdayIndex],
        nepaliWeekdayName: nepaliWeekdayNames[weekdayIndex],
    };
}
