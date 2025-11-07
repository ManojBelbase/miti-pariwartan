export interface IBSDate {
    input: string;
    year: { np: string; en: string };
    month: { index: number; np: string; en: string };
    day: { np: string; en: string };
    week: { index: number; np: string; en: string };
    formatted: { en: string; np: string; standard: string };
}

export interface IADDate {
    input: string;
    year: { np: string; en: string };
    month: { index: number; np: string; en: string };
    day: { np: string; en: string };
    week: { index: number; np: string; en: string };
    formatted: { en: string; np: string; standard: string };
}