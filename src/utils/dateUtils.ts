export function toNepaliNumber(num: number | string): string {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return String(num)
        .split("")
        .map(d => (/\d/.test(d) ? nepaliDigits[Number(d)] : d))
        .join("");
}
