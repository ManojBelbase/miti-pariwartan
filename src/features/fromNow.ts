export function fromNow(input: string | Date): string {
    const date = typeof input === "string" ? new Date(input) : input;
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const abs = Math.abs(diff);

    const seconds = Math.floor(abs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const isFuture = diff < 0;

    const label = (v: number, unit: string) =>
        isFuture ? `in ${v} ${unit}` : `${v} ${unit} ago`;

    // #1: before 1 min → "a few seconds ago"
    if (seconds < 60)
        return isFuture ? "in a few seconds" : "a few seconds ago";

    // #2: 1–2 minutes → "1 minute ago"
    if (minutes < 2)
        return isFuture ? "in 1 minute" : "1 minute ago";

    // actual values after 2 minutes
    if (minutes < 60)
        return label(minutes, minutes === 1 ? "minute" : "minutes");

    if (hours < 24)
        return label(hours, hours === 1 ? "hour" : "hours");

    if (days < 30)
        return label(days, days === 1 ? "day" : "days");

    if (months < 12)
        return label(months, months === 1 ? "month" : "months");

    return label(years, years === 1 ? "year" : "years");
}
