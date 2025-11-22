import { IADDate } from '../types';
import { calculateAge, IAgeResult } from './calculateAge';

export function calculateAgeDifference(
    startDate: string | IADDate,
    endDate?: string | IADDate
): IAgeResult | { message: string } {
    return calculateAge(startDate, endDate);
}
