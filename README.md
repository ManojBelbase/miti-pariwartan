## Miti Pariwartan — Bikram Sambat ↔ Gregorian Date Converter

##### Convert Nepali Bikram Sambat (BS) to Gregorian (AD) dates and vice versa, fully offline,  no API calls, data powered by local ***JSON***,
---

### ✨ Features

- 🔁 Convert **BS → AD** and **AD → BS**
- 🧮 Calculate **Age** from a given birth date
 - ➖ Calculate **Age Difference** between two dates
- 🌐 Works in **Node.js**, **React**, **Next.js**, and **Vanilla JS**
- 📦 Dual builds: **CommonJS (CJS)** + **ES Module (ESM)**
- 📅 Supports Nepali date range 2057 BS to 2099 BS
---

### 📦 Installation

Using **npm**:

```bash
npm install miti-pariwartan
```

Using **yarn**:

```bash
yarn add miti-pariwartan

```
---

## 🚀 Usage Examples



### 🗓️ Convert BS → AD
```ts
import { convertBsToAd } from "miti-pariwartan";

// String input (any format)
const ad1 = convertBsToAd("2082-07-26");
console.log(ad1.formatted.standard);
// Output: "2025-11-12"

const ad2 = convertBsToAd("2082.07.26");   // Dotted
console.log(ad2.formatted.en);
// Output: "2025 November 12, Wednesday"

const ad3 = convertBsToAd({ year: 2082, month: 7, day: 26 });
console.log(ad3.formatted.np);
// Output: "२०२५ नोभेम्बर १२, बुधबार"

Output Example (for 2082-07-26):

```json
{
  "input": "2082-07-26",
  "year": { "en": "2025", "np": "२०२५" },
  "month": { "index": 10, "en": "November", "np": "नोभेम्बर" },
  "day": { "en": "12", "np": "१२" },
  "week": { "index": 3, "en": "Wednesday", "np": "बुधबार" },
  "formatted": {
    "en": "2025 November 12, Wednesday",
    "np": "२०२५ नोभेम्बर १२, बुधबार",
    "standard": "2025-11-12"
  }
}

```

### 🗓️ Convert AD → BS

```ts
import { convertAdToBs } from "miti-pariwartan";

// String input (any format)
const bs1 = convertAdToBs("2025-11-12");
console.log(bs1.formatted.standard);
// Output: "2082-07-26"

const bs2 = convertAdToBs("2025.11.12");   // Dotted
console.log(bs2.formatted.en);
// Output: "2082 Kartik 26, Wednesday"

const bs3 = convertAdToBs(new Date("2025-11-12"));
console.log(bs3.formatted.np);
// Output: "२०८२ कार्तिक २६, बुधबार"

Output Example (for 2025-11-12):

```json
{
  "input": "2025-11-12",
  "year": { "en": "2082", "np": "२०८२" },
  "month": { "index": 7, "en": "Kartik", "np": "कार्तिक" },
  "day": { "en": "26", "np": "२६" },
  "week": { "index": 3, "en": "Wednesday", "np": "बुधबार" },
  "formatted": {
    "en": "2082 Kartik 26, Wednesday",
    "np": "२०८२ कार्तिक २६, बुधबार",
    "standard": "2082-07-26"
  }
}
```



### 🧮 Calculate Age (AD)

```ts
import { calculateAge } from "miti-pariwartan";

const age = calculateAge("1990-05-15"); // today = now
console.log(age);
// Output: { years: 35, months: 5, days: 28 }

calculateAge("1990-05-15", "2025-11-12");
// → { years: 35, months: 5, days: 28 }

Output:
// => { "years": 35, "months": 5, "days": 28 }

 ```

 
### ➖ Age Difference (AD)

```ts
import { calculateAgeDifference } from "miti-pariwartan";

const diff = calculateAgeDifference("1990-05-15", "2025-11-12");
console.log(diff);
// → { years: 35, months: 5, days: 28 }

```

### 🧩 Input Formats

| Type                       | Example                               | Description                                                                               |
| -------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| **String (dash)**          | `"2025-10-17"`                        | AD/BS date string using dashes (`YYYY-MM-DD`).                                            |
| **String (slash)**         | `"2025/10/17"`                        | AD/BS date string using slashes (`YYYY/MM/DD`).                                           |
| **String (dot)**           | `"2025.11.12" / "2082.07.26"`         | AD/BS date string using slashes (`YYYY.MM.DD`).                                           |
| **String (Space)**         | `"2025 11 12" / "2082 07 26"`         | AD/BS date string using slashes (`YYYY MM DD`).                                          |
| **String (full date)**     | `"Fri Nov 07 2025 08:19:22 GMT+0545"` | Full JavaScript date string (AD only).                                                    |
| **ISO String**             | `"2025-11-07T00:00:00Z"`              | ISO 8601 date string (AD only).                                                           |
| **Object (1-based month)** | `{ year: 2082, month: 6, day: 31 }`   | Separate numeric fields. BS month starts at 1 = Baishakh, AD month starts at 1 = January. |
| **Date Object**            | `new Date("2025-10-17")`              | Native JavaScript `Date` object (AD only).                                                |
| **Invalid Example ❌**     | `"3333/33/33"`                        | Throws error — invalid, malformed, or out-of-range date.                                  |
