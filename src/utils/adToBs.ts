import { bsMonths } from "../constant/bsMonths";
import { weekDays } from "../constant/weekDays";
import { IBSDate } from "../types";
import { toNepaliNumber } from "./dateUtils";
import {
    getBSYear,
    getDaysPassed,
    getBSMonthAndDay,
    getWeekdayFromAD,
} from "./helpers";

export function adToBs(adInput: string | Date): IBSDate {
    // Step 1: Parse & Validate Input
    const adDate =
        typeof adInput === "string"
            ? new Date(adInput + "T00:00:00Z")
            : adInput;

    if (isNaN(adDate.getTime())) {
        throw new Error(`Invalid AD date: ${adInput}`);
    }

    // Step 2: Convert AD → BS using calendar data
    const bsYear = Number(getBSYear(adDate));
    const daysPassed = getDaysPassed(String(bsYear), adDate);
    const { month, day } = getBSMonthAndDay(String(bsYear), daysPassed);
    const week = getWeekdayFromAD(adDate);

    // Step 3: Localize Month & Weekday
    // getBSMonthAndDay() gives 1-based month (1–12), so we subtract 1
    const monthIndex = month - 1;
    const monthObj = bsMonths.find((m) => m.index === monthIndex);
    if (!monthObj) throw new Error(`Invalid BS month index: ${monthIndex}`);

    const weekObj = weekDays.find((w) => w.index === week.weekdayIndex);
    if (!weekObj) throw new Error(`Invalid weekday index: ${week.weekdayIndex}`);

    // Step 4: Return structured BS date
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
