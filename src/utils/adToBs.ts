import {
    getBSYear,
    getDaysPassed,
    getBSMonthAndDay,
    monthNames,
    getWeekdayFromAD,
    type BSDate
} from './helpers';

export function adToBs(adInput: string | Date): BSDate {
    const adDate: Date = typeof adInput === 'string' ? new Date(adInput) : adInput;

    if (isNaN(adDate.getTime())) {
        throw new Error(`Invalid AD date: ${adInput}`);
    }

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
        nepaliWeekdayName,
    };
}
