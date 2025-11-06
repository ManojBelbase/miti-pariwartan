import { engMonthNames } from "../constant";
import { IADDate } from "../types";
import { parseDate, addDays, getWeekdayFromAD, monthLengths, yearStart } from "./helpers";
import { toNepaliNumber } from "./dateUtils";


export function bsToAd(bsInput: string | { year: number; month: number; day: number }): IADDate {
    // Step 1: Parse & Normalize Input
    const { year, month, day } =
        typeof bsInput === "string"
            ? (() => {
                const [y, m, d] = bsInput.split(/[-/]/).map(Number);
                if (!y || !m || !d) throw new Error(`Invalid BS date format: ${bsInput}`);
                return { year: y, month: m, day: d };
            })()
            : bsInput;

    const normalizedMonth = month - 1;

    // Step 2: Validate Year, Month, Day
    const start = yearStart[year.toString()];
    if (!start) throw new Error(`Unsupported BS year: ${year}`);

    const lengths = monthLengths[year.toString()];
    if (!lengths) throw new Error(`Missing month lengths for year: ${year}`);

    if (month < 1 || month > 12) throw new Error(`Invalid BS month: ${month}`);
    if (day < 1 || day > lengths[normalizedMonth])
        throw new Error(`Invalid BS day: ${day} for ${year}-${month}`);

    // Step 3: Calculate days passed since BS year start
    let daysPassed = day - 1;
    for (let i = 0; i < normalizedMonth; i++) daysPassed += lengths[i];

    //  Step 4: Derive AD Date
    const adDate = addDays(parseDate(start), daysPassed);
    const weekday = getWeekdayFromAD(adDate);

    const adYear = adDate.getUTCFullYear();
    const adMonth = adDate.getUTCMonth(); // 0–11
    const adDay = adDate.getUTCDate();

    // 🧾 Step 5: Return structured AD date
    return {
        input: typeof bsInput === "string" ? bsInput : `${year}-${month}-${day}`,

        year: {
            en: String(adYear),
            np: toNepaliNumber(adYear),
        },

        month: {
            index: adMonth,
            en: engMonthNames[adMonth],
            np: toNepaliNumber(adMonth + 1),
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
            np: `${toNepaliNumber(adYear)} ${toNepaliNumber(adMonth + 1)} ${toNepaliNumber(adDay)}, ${weekday.nepaliWeekdayName}`,
            standard: `${adYear}-${String(adMonth + 1).padStart(2, "0")}-${String(adDay).padStart(2, "0")}`,
        },
    };
}
