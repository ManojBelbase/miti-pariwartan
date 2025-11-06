import data from '../data/calendar.json';
export const { yearStart, monthLengths, monthNames } = data as {
    yearStart: Record<string, string>;
    monthLengths: Record<string, number[]>;
    monthNames: string[];
};

export const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
export type WeekdayName = typeof weekdayNames[number];

export const nepaliWeekdayNames = ['Aaitabar', 'Sombar', 'Mangalbar', 'Budhabar', 'Bihibar', 'Shukrabar', 'Shanibar'] as const;
export type NepaliWeekdayName = typeof nepaliWeekdayNames[number];



// helpers.ts
export function parseDate(
    input: string | { year: number; month: number; day: number } | Date
): Date {
    if (input instanceof Date) {
        if (isNaN(input.getTime())) throw new Error("Invalid Date object");
        return input;
    }

    if (typeof input === "string") {
        const parts = input.split(/[-/]/).map(Number);
        if (parts.length !== 3 || parts.some(isNaN))
            throw new Error(`Invalid date string format: ${input}`);
        const [year, month, day] = parts;
        return new Date(Date.UTC(year, month - 1, day));
    }

    if (typeof input === "object" && input.year && input.month != null && input.day) {
        // auto-adjust if month is 1-based (BS) or 0-based (AD)
        const isZeroBased = input.month >= 0 && input.month <= 11;
        const month = isZeroBased ? input.month : input.month - 1;
        return new Date(Date.UTC(input.year, month, input.day));
    }

    throw new Error(`Unsupported date input: ${JSON.stringify(input)}`);
}


export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
}

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

export function getDaysPassed(bsYear: string, adDate: Date): number {
    const localDate = localizeDate(adDate);
    const givenDate = parseDate(localDate);
    const startDate = parseDate(yearStart[bsYear]);
    const diffTime = givenDate.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
}

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
        nepaliWeekdayName: nepaliWeekdayNames[weekdayIndex]
    };
}

