import { IADDate, IAge } from "../types";

export interface IAgeResult extends IAge {
    message?: string;
}

export function calculateAge(
    birth: string | IADDate,
    today?: string | IADDate
): IAgeResult | { message: string } {
    const b = typeof birth === "string" ? new Date(birth) : new Date(birth.input);
    const t = today
        ? typeof today === "string"
            ? new Date(today)
            : new Date(today.input)
        : new Date();

    if (isNaN(b.getTime())) {
        return { message: "Invalid birth date format." };
    }
    if (isNaN(t.getTime())) {
        return { message: "Invalid current date format." };
    }
    if (b > t) {
        return { message: "Birth date is in the future." };
    }

    let years = t.getUTCFullYear() - b.getUTCFullYear();
    let months = t.getUTCMonth() - b.getUTCMonth();
    let days = t.getUTCDate() - b.getUTCDate();

    if (days < 0) {
        months--;
        const prevMonthDays = new Date(t.getUTCFullYear(), t.getUTCMonth(), 0).getUTCDate();
        days += prevMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        return { message: "Invalid age calculation result." };
    }

    return {
        years,
        months,
        days,
    };
}
