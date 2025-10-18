var monthNames$1 = [
	"Baishakh",
	"Jestha",
	"Asar",
	"Shrawan",
	"Bhadra",
	"Ashoj",
	"Kartik",
	"Mangsir",
	"Poush",
	"Magh",
	"Falgun",
	"Chaitra"
];
var yearStart$1 = {
	"2057": "2000-04-13",
	"2058": "2001-04-14",
	"2059": "2002-04-14",
	"2060": "2003-04-14",
	"2061": "2004-04-13",
	"2062": "2005-04-14",
	"2063": "2006-04-14",
	"2064": "2007-04-14",
	"2080": "2023-04-14",
	"2081": "2024-04-13",
	"2082": "2025-04-14",
	"2083": "2026-04-14",
	"2084": "2027-04-14"
};
var monthLengths$1 = {
	"2057": [
		31,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		29,
		30,
		31
	],
	"2058": [
		30,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		30,
		29,
		31
	],
	"2059": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2060": [
		31,
		31,
		32,
		32,
		31,
		30,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2061": [
		31,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		29,
		30,
		31
	],
	"2062": [
		31,
		31,
		31,
		32,
		31,
		31,
		29,
		30,
		29,
		30,
		29,
		31
	],
	"2063": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2064": [
		31,
		31,
		32,
		32,
		31,
		30,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2065": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2066": [
		31,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		30,
		29,
		31
	],
	"2067": [
		31,
		31,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		30,
		29,
		31
	],
	"2068": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2069": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2070": [
		31,
		31,
		31,
		32,
		31,
		31,
		29,
		30,
		30,
		29,
		30,
		30
	],
	"2071": [
		31,
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30
	],
	"2072": [
		31,
		32,
		31,
		31,
		31,
		30,
		30,
		30,
		29,
		29,
		30,
		30
	],
	"2073": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2074": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2075": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		30,
		29,
		29,
		30,
		30
	],
	"2076": [
		31,
		31,
		32,
		32,
		31,
		30,
		30,
		30,
		29,
		30,
		30,
		30
	],
	"2077": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2078": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		30,
		29,
		29,
		30,
		31
	],
	"2079": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2080": [
		31,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		29,
		30,
		30
	],
	"2081": [
		31,
		32,
		31,
		32,
		31,
		30,
		30,
		30,
		29,
		30,
		29,
		31
	],
	"2082": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2083": [
		31,
		31,
		32,
		31,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2084": [
		31,
		31,
		32,
		31,
		31,
		30,
		30,
		30,
		29,
		30,
		30,
		30
	],
	"2085": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		29,
		30,
		29,
		30,
		30
	],
	"2086": [
		31,
		31,
		31,
		32,
		31,
		31,
		30,
		30,
		29,
		29,
		30,
		30
	]
};
var data = {
	monthNames: monthNames$1,
	yearStart: yearStart$1,
	monthLengths: monthLengths$1};

const { yearStart, monthLengths, monthNames } = data;
const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nepaliWeekdayNames = ['Aaitabar', 'Sombar', 'Mangalbar', 'Budhabar', 'Bihibar', 'Shukrabar', 'Shanibar'];
function parseDate(str) {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(Date.UTC(year, month - 1, day));
}
function addDays(date, days) {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
}
function localizeDate(date) {
    const options = {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    };
    const localStr = date.toLocaleDateString('en-GB', options);
    return localStr.split('/').reverse().join('-');
}
function getBSYear(adDate) {
    const localDate = localizeDate(adDate);
    let prevStart = null;
    const sortedYears = Object.keys(yearStart).sort((a, b) => parseInt(a) - parseInt(b));
    for (let i = 1; i < sortedYears.length; i++) {
        const currentStart = yearStart[sortedYears[i]];
        if (prevStart && localDate >= prevStart && localDate < currentStart) {
            return sortedYears[i - 1];
        }
        prevStart = currentStart;
    }
    if (prevStart && localDate >= prevStart)
        return sortedYears[sortedYears.length - 1];
    throw new Error('Date outside supported range (2070-2099 BS)');
}
function getDaysPassed(bsYear, adDate) {
    const localDate = localizeDate(adDate);
    const givenDate = parseDate(localDate);
    const startDate = parseDate(yearStart[bsYear]);
    const diffTime = givenDate.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
}
function getBSMonthAndDay(bsYear, daysPassed) {
    let remaining = daysPassed;
    const lengths = monthLengths[bsYear];
    for (let i = 0; i < 12; i++) {
        if (remaining <= lengths[i]) {
            return { month: i + 1, day: remaining };
        }
        remaining -= lengths[i];
    }
    throw new Error('Invalid days calculation');
}
function getWeekdayFromAD(adInput) {
    const adDate = typeof adInput === 'string' ? parseDate(adInput) : adInput;
    const weekdayIndex = adDate.getUTCDay();
    return {
        weekdayIndex,
        weekdayName: weekdayNames[weekdayIndex],
        nepaliWeekdayName: nepaliWeekdayNames[weekdayIndex]
    };
}

function adToBs(adInput) {
    const adDate = typeof adInput === 'string' ? new Date(adInput) : adInput;
    if (isNaN(adDate.getTime()))
        throw new Error('Invalid AD date');
    const bsYearStr = getBSYear(adDate);
    const bsYear = parseInt(bsYearStr);
    const daysPassed = getDaysPassed(bsYearStr, adDate);
    const { month, day } = getBSMonthAndDay(bsYearStr, daysPassed);
    const { weekdayIndex, weekdayName, nepaliWeekdayName } = getWeekdayFromAD(adDate);
    return {
        year: bsYear,
        month,
        day,
        formatted: `${bsYearStr}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
        readable: `${monthNames[month - 1]} ${day}, ${bsYearStr}`,
        weekdayIndex,
        weekdayName,
        nepaliWeekdayName
    };
}

const engMonthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function bsToAd(bsInput) {
    let year, month, day;
    if (typeof bsInput === 'string') {
        const parts = bsInput.split(/[-/]/).map(Number);
        if (parts.length !== 3 || parts.some(isNaN))
            throw new Error(`Invalid BS date format: ${bsInput}`);
        [year, month, day] = parts;
    }
    else {
        ({ year, month, day } = bsInput);
    }
    const key = year.toString();
    const start = yearStart[key];
    if (!start)
        throw new Error(`Unsupported BS year: ${year}`);
    const lengths = monthLengths[key];
    if (month < 1 || month > 12 || day < 1 || day > lengths[month - 1]) {
        throw new Error(`Invalid BS date: ${year}-${month}-${day}`);
    }
    const daysPassed = lengths.slice(0, month - 1).reduce((sum, n) => sum + n, 0) + (day - 1);
    const adDate = addDays(parseDate(start), daysPassed);
    const { weekdayIndex, weekdayName, nepaliWeekdayName } = getWeekdayFromAD(adDate);
    return {
        year: adDate.getUTCFullYear(),
        month: adDate.getUTCMonth() + 1,
        monthName: engMonthNames[adDate.getUTCMonth()],
        day: adDate.getUTCDate(),
        formatted: `${adDate.getUTCFullYear()}-${(adDate.getUTCMonth() + 1).toString().padStart(2, '0')}-${adDate.getUTCDate().toString().padStart(2, '0')}`,
        readable: `${engMonthNames[adDate.getUTCMonth()]} ${adDate.getUTCDate()}, ${adDate.getUTCFullYear()}`,
        weekdayIndex,
        weekdayName,
        nepaliWeekdayName
    };
}

export { adToBs, bsToAd };
//# sourceMappingURL=index.esm.js.map
