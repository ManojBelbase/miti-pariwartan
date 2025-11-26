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

    // Seconds
    if (seconds < 20) return isFuture ? "in a moment" : "just now";
    if (seconds < 60) return isFuture ? "in a few seconds" : "a few seconds ago";

    // Minutes
    if (minutes === 1) return isFuture ? "in a minute" : "a minute ago";
    if (minutes < 60) return label(minutes, "minutes");

    // Hours
    if (hours === 1) return isFuture ? "in an hour" : "an hour ago";
    if (hours < 24) return label(hours, "hours");

    // Days
    if (days === 1) return isFuture ? "tomorrow" : "yesterday";
    if (days < 30) return label(days, "days");

    // Months
    if (months === 1) return isFuture ? "in a month" : "a month ago";
    if (months < 12) return label(months, "months");

    // Years
    if (years === 1) return isFuture ? "in a year" : "a year ago";
    return label(years, "years");
}
