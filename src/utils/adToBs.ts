import { getBSYear, getDaysPassed, getBSMonthAndDay, monthNames, type BSDate, getWeekdayFromAD } from './helpers';

export function adToBs(adInput: string | Date): BSDate {
    const adDate: Date = typeof adInput === 'string' ? new Date(adInput) : adInput;
    if (isNaN(adDate.getTime())) throw new Error('Invalid AD date');

    /**
     * Converts an AD date to a Bikram Sambat (BS) date.
     * @param adInput A Date object or a string in 'YYYY-MM-DD' format.
     * @returns The equivalent BS date with metadata.
     * @throws If the date is invalid or outside the supported BS range.
     */

    const bsYearStr = getBSYear(adDate);
    const bsYear = parseInt(bsYearStr);
    const daysPassed = getDaysPassed(bsYearStr, adDate);
    const { month, day } = getBSMonthAndDay(bsYearStr, daysPassed);
    const { weekdayIndex, weekdayName, nepaliWeekdayName } = getWeekdayFromAD(adDate);

    return {
        year: bsYear,
        month,
        day,
        formatted: `${bsYearStr}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
        readable: `${monthNames[month - 1]} ${day}, ${bsYearStr}`,
        weekdayIndex,
        weekdayName,
        nepaliWeekdayName: nepaliWeekdayName,
    };
}