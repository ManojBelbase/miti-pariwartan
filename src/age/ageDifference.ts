import { IADDate } from '../types';
import { calculateAge, IAgeResult } from './calculateAge';

export function calculateAgeDifference(
    date1: string | IADDate,
    date2?: string | IADDate
): IAgeResult | { message: string } {
    return calculateAge(date1, date2);
}
