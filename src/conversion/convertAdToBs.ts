import { bsMonths, toNepaliNumber, weekDays } from "../constant";
import { parseADString } from "../formats/adFormats";
import { IBSDate } from "../types";
import { getBSMonthAndDay, getBSYear, getDaysPassed, getWeekdayFromAD } from "../utils";

export function convertAdToBs(adInput: string | Date): IBSDate {
    // 1. Normalise the input to a valid Date object
    let adDate: Date;

    if (adInput instanceof Date) {
        adDate = adInput;
    } else if (typeof adInput === "string") {
        const parsed = parseADString(adInput.trim());
        if (!parsed) throw new Error(`Unable to parse AD date: "${adInput}"`);
        adDate = parsed;
    } else {
        throw new Error(`Invalid input type: ${typeof adInput}`);
    }

    if (Number.isNaN(adDate.getTime())) {
        throw new Error(`Invalid AD date: ${adInput}`);
    }

    // 2. AD → BS conversion
    const bsYear = Number(getBSYear(adDate));
    const daysPassed = getDaysPassed(String(bsYear), adDate);
    const { month, day } = getBSMonthAndDay(String(bsYear), daysPassed);
    const week = getWeekdayFromAD(adDate);

    // 3. Localise month & weekday
    const monthIndex = month - 1;
    const monthObj = bsMonths.find((m) => m.index === monthIndex);
    if (!monthObj) throw new Error(`Invalid BS month index: ${monthIndex}`);

    const weekObj = weekDays.find((w) => w.index === week.weekdayIndex);
    if (!weekObj) throw new Error(`Invalid weekday index: ${week.weekdayIndex}`);

    // 4. Return structured result
    return {
        input: typeof adInput === "string" ? adInput : adDate.toISOString(),

        year: {
            en: String(bsYear),
            np: toNepaliNumber(bsYear),
        },

        month: {
            index: monthIndex,
            en: monthObj.en,
            np: monthObj.np,
        },

        day: {
            en: String(day),
            np: toNepaliNumber(day),
        },

        week: {
            index: week.weekdayIndex,
            en: weekObj.en,
            np: weekObj.np,
        },

        formatted: {
            en: `${bsYear} ${monthObj.en} ${day}, ${weekObj.en}`,
            np: `${toNepaliNumber(bsYear)} ${monthObj.np} ${toNepaliNumber(day)}, ${weekObj.np}`,
            standard: `${bsYear}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        },
    };
}