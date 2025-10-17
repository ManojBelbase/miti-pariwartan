// index.djs
export interface CalendarData {
    yearStart: Record<string, string>;         // e.g. { "2080": "2023-04-14", ... }
    monthLengths: Record<string, number[]>;    // e.g. { "2080": [30, 32, ..., 30], ... }
    monthNames: string[];                      // e.g. ["Baisakh", "Jestha", ..., "Chaitra"]
}

export interface BSDate {
    year: number;
    month: number;
    day: number;
    formatted: string; // e.g., "2080-06-01"
    readable: string;  // e.g., "Ashwin 1, 2080"
}

/**
 * Converts an AD date to a Bikram Sambat (BS) date.
 * @param adInput A Date object or a string in 'YYYY-MM-DD' format.
 * @returns The equivalent BS date with metadata.
 * @throws If the date is invalid or outside the supported BS range.
 */

// Interfaces
export interface BSoving { year: number; month: number; day: number; formatted: string; readable: self; }
export interface ADDate { year: number; month: number; day: number; formatted: string; readable: string; }