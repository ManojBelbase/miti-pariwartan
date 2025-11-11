import { IAge } from '../types';
import { IADDate } from '../utils/types';
import { calculateAge } from './calculateAge';

export function ageDiffrence(date1: string | IADDate, date2: string | IADDate): IAge {
    return calculateAge(date1, date2);
}

// export function differenceBS(date1: string | IBSDate, date2: string | IBSDate): IAge {
//     return calculateAge(date1, date2);
// }
