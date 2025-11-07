import { bsMonths, weekDays } from "../constant";
import { toNepaliNumber } from "./dateUtils";
import { getBSMonthAndDay, getBSYear, getDaysPassed, getWeekdayFromAD } from "./helpers";
import { IBSDate } from "./types";

export function adToBs(adInput: string | Date): IBSDate {
    let adDate: Date;

    if (adInput instanceof Date) {
        adDate = adInput;
    } else if (typeof adInput === "string") {
        // Check if it matches YYYY-MM-DD format
        if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(adInput)) {
            adDate = new Date(adInput + "T00:00:00Z");
        } else {
            // Assume it is a full date string like "Fri Nov 07 2025 08:19:22 GMT+0545"
            adDate = new Date(adInput);
        }
    } else {
        throw new Error(`Invalid input type: ${adInput}`);
    }

    if (isNaN(adDate.getTime())) {
        throw new Error(`Invalid AD date: ${adInput}`);
    }

    // Step 2: Convert AD → BS using calendar data
    const bsYear = Number(getBSYear(adDate));
    const daysPassed = getDaysPassed(String(bsYear), adDate);
    const { month, day } = getBSMonthAndDay(String(bsYear), daysPassed);
    const week = getWeekdayFromAD(adDate);

    // Step 3: Localize Month & Weekday
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
