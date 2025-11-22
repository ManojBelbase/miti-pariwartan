// src/data/calendar.ts
import calendarJson from "./calendar.json" assert { type: "json" };
import { CalendarData } from "../types";

// Validate & cast
const calendarData = calendarJson as CalendarData;

// Export everything cleanly
export const { yearStart, monthLengths, monthNames } = calendarData;

export { calendarData };