import { ADDate } from "./helpers";
export declare function bsToAd(bsInput: string | {
    year: number;
    month: number;
    day: number;
}): ADDate | {
    error: string;
};
