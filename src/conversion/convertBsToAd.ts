// src/conversion/convertBsToAd.ts
import {
    engMonthNames,
    npEngMonthNames,
    toNepaliNumber,
} from "../constant";
import { IADDate } from "../types";
import {
    addDays,
    getWeekdayFromAD,
    monthLengths,
    parseDate,
    yearStart,
} from "../utils/helpers";
import { parseBSString } from "../formats";

export function convertBsToAd(
    bsInput: string | { year: number; month: number; day: number }
): IADDate {
    // 1. Parse & Normalize Input
    let year: number, month: number, day: number;

    if (typeof bsInput === "string") {
        const parsed = parseBSString(bsInput);
        if (!parsed) {
            throw new Error(
                `Unable to parse BS date string: "${bsInput}". ` +
                `Supported formats: YYYY-MM-DD, YYYY/MM/DD, YYYY.MM.DD, YYYY MM DD`
            );
        }
        ({ year, month, day } = parsed);
    } else {
        year = bsInput.year;
        month = bsInput.month;
        day = bsInput.day;
    }

    const normalizedMonth = month - 1;

    // 2. Validate Year / Month / Day
    const start = yearStart[year.toString()];
    if (!start) throw new Error(`Unsupported BS year: ${year}`);

    const lengths = monthLengths[year.toString()];
    if (!lengths) throw new Error(`Missing month lengths for year: ${year}`);

    if (month < 1 || month > 12)
        throw new Error(`Invalid BS month: ${month} (must be 1–12)`);

    if (day < 1 || day > lengths[normalizedMonth])
        throw new Error(
            `Invalid BS day: ${day} for ${year}-${month} ` +
            `(max ${lengths[normalizedMonth]} days)`
        );

    // 3. Calculate total days since BS year start
    let daysPassed = day - 1; // because day 1 = 0 days passed
    for (let i = 0; i < normalizedMonth; i++) {
        daysPassed += lengths[i];
    }

    // 4. Derive AD Date
    const adDate = addDays(parseDate(start), daysPassed);
    const weekday = getWeekdayFromAD(adDate);

    const adYear = adDate.getUTCFullYear();
    const adMonth = adDate.getUTCMonth(); // 0–11
    const adDay = adDate.getUTCDate();

    // 5. Return structured AD date
    return {
        input: typeof bsInput === "string" ? bsInput : `${year}-${month}-${day}`,

        year: {
            en: String(adYear),
            np: toNepaliNumber(adYear),
        },

        month: {
            index: adMonth,
            en: engMonthNames[adMonth],
            np: npEngMonthNames[adMonth],
        },

        day: {
            en: String(adDay),
            np: toNepaliNumber(adDay),
        },

        week: {
            index: weekday.weekdayIndex,
            en: weekday.weekdayName,
            np: weekday.nepaliWeekdayName,
        },

        formatted: {
            en: `${adYear} ${engMonthNames[adMonth]} ${adDay}, ${weekday.weekdayName}`,
            np: `${toNepaliNumber(adYear)} ${npEngMonthNames[adMonth]} ${toNepaliNumber(
                adDay
            )}, ${weekday.nepaliWeekdayName}`,
            standard: `${adYear}-${String(adMonth + 1).padStart(
                2,
                "0"
            )}-${String(adDay).padStart(2, "0")}`,
        },
    };
}