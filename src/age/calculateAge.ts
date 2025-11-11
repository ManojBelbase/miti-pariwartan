import { IAge } from "../types";
import { IADDate } from "../utils/types";

export function calculateAge(birth: string | IADDate, today?: string | IADDate): IAge {
    const b = typeof birth === 'string' ? new Date(birth) : new Date(birth.input);
    const t = today ? (typeof today === 'string' ? new Date(today) : new Date(today.input)) : new Date();

    let years = t.getUTCFullYear() - b.getUTCFullYear();
    let months = t.getUTCMonth() - b.getUTCMonth();
    let days = t.getUTCDate() - b.getUTCDate();

    if (days < 0) { months--; days += new Date(t.getUTCFullYear(), t.getUTCMonth(), 0).getUTCDate(); }
    if (months < 0) { years--; months += 12; }

    return { years, months, days };
}

// export function calculateAgeBS(birth: string | IBSDate, today?: string | IBSDate): IAge {
//     const adBirth = typeof birth === 'string' ? adToBs(birth) : adToBs(birth.input);
//     const adToday = today ? (typeof today === 'string' ? adToBs(today) : adToBs(today.input)) : adToBs(new Date());
//     return calculateAge(adBirth, adToday);
// }
