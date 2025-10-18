import { engMonthNames } from '../constant';
import { parseDate, addDays, yearStart, monthLengths, getWeekdayFromAD, type ADDate } from './helpers';

export function bsToAd(bsInput: string | { year: number; month: number; day: number }): ADDate {
    let year: number, month: number, day: number;

    if (typeof bsInput === 'string') {
        const parts = bsInput.split(/[-/]/).map(Number);
        if (parts.length !== 3 || parts.some(isNaN)) throw new Error(`Invalid BS date format: ${bsInput}`);
        [year, month, day] = parts;
    } else {
        ({ year, month, day } = bsInput);
    }

    const key = year.toString();
    const start = yearStart[key];
    if (!start) throw new Error(`Unsupported BS year: ${year}`);

    const lengths = monthLengths[key];
    if (month < 1 || month > 12 || day < 1 || day > lengths[month - 1]) {
        throw new Error(`Invalid BS date: ${year}-${month}-${day}`);
    }

    const daysPassed = lengths.slice(0, month - 1).reduce((sum, n) => sum + n, 0) + (day - 1);
    const adDate = addDays(parseDate(start), daysPassed);
    const { weekdayIndex, weekdayName, nepaliWeekdayName } = getWeekdayFromAD(adDate);

    return {
        year: adDate.getUTCFullYear(),
        month: adDate.getUTCMonth() + 1,
        monthName: engMonthNames[adDate.getUTCMonth()],
        day: adDate.getUTCDate(),
        formatted: `${adDate.getUTCFullYear()}-${(adDate.getUTCMonth() + 1).toString().padStart(2, '0')}-${adDate.getUTCDate().toString().padStart(2, '0')}`,
        readable: `${engMonthNames[adDate.getUTCMonth()]} ${adDate.getUTCDate()}, ${adDate.getUTCFullYear()}`,
        weekdayIndex,
        weekdayName,
        nepaliWeekdayName
    };
}