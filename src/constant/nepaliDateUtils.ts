export function toNepaliNumber(num: number | string): string {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return String(num)
        .split("")
        .map(d => (/\d/.test(d) ? nepaliDigits[Number(d)] : d))
        .join("");
}

export const npEngMonthNames = [
    "जनवरी",   // January
    "फरवरी",   // February
    "मार्च",    // March
    "अप्रिल",   // April
    "मे",       // May
    "जून",      // June
    "जुलाई",    // July
    "अगस्ट",    // August
    "सितंबर",  // September
    "अक्टूबर",  // October
    "नवंबर",   // November
    "दिसंबर"   // December
];


export const weekdayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
] as const;

export const nepaliWeekdayNames = [
    'आइतबार',
    'सोमबार',
    'मंगलबार',
    'बुधबार',
    'बिहिबार',
    'शुक्रबार',
    'शनिबार'
] as const;