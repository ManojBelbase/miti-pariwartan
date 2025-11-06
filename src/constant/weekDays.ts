export const weekDays = [
    { index: 0, en: "Sunday", np: "आइतबार" },
    { index: 1, en: "Monday", np: "सोमबार" },
    { index: 2, en: "Tuesday", np: "मंगलबार" },
    { index: 3, en: "Wednesday", np: "बुधबार" },
    { index: 4, en: "Thursday", np: "बिहीबार" },
    { index: 5, en: "Friday", np: "शुक्रबार" },
    { index: 6, en: "Saturday", np: "शनिबार" },
] as const;

export type WeekDay = typeof weekDays[number];
