## Miti Pariwartan — Bikram Sambat ↔ Gregorian Date Converter

##### Convert Nepali Bikram Sambat (BS) to Gregorian (AD) dates and vice versa, fully offline, no API calls, data powered by local **_JSON_**,

---

### ✨ Features

- 🔁 Convert **BS → AD** and **AD → BS**
- 🧮 Calculate **Age** from a given birth date
- ➖ Calculate **Age Difference** between two dates
- ⏳ **Human-readable time ago / in future** with `fromNow()`
- 🌐 Works in **Node.js**, **React**, **Next.js**, and **Vanilla JS**
- 📦 Dual builds: **CommonJS (CJS)** + **ES Module (ESM)**
- 📅 Supports Nepali date range **2057 BS to 2099 BS**

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

Using **CDN**:

```bash
<script src="https://cdn.jsdelivr.net/npm/miti-pariwartan/lib/index.umd.js"></script>

```

---

## 🚀 Usage Examples

### 🗓️ Convert BS → AD

```ts
import { convertBsToAd } from "miti-pariwartan";

const ad = convertBsToAd("2082-07-26");
console.log(ad.formatted.standard);
// → "2025-11-12"
```

### 🗓️ Convert AD → BS

```ts
import { convertAdToBs } from "miti-pariwartan";

const bs = convertAdToBs("2025-11-12");
console.log(bs.formatted.standard);
// → "2082-07-26"
```

### 🧮 Calculate Age (AD)

```ts
import { calculateAge } from "miti-pariwartan";

const age = calculateAge("1990-05-15"); // today = now
console.log(age);
// → { years: 35, months: 5, days: 28 }
```

### ➖ Age Difference (AD)

```ts
import { calculateAgeDifference } from "miti-pariwartan";

const diff = calculateAgeDifference("1990-05-15", "2025-11-12");
console.log(diff);
// → { years: 35, months: 5, days: 28 }
```

### ⏳ fromNow() – Human Readable "Time Ago" / "In Future"

```ts
import { fromNow } from "miti-pariwartan";

// Accepts string or Date object (AD only)
console.log(fromNow("2025-11-12"));
// → "10 days ago" (assuming today is 2025-11-22)

console.log(fromNow(new Date()));
// → "a few seconds ago"

console.log(fromNow("2025-12-25"));
// → "in 1 month"

console.log(fromNow("2026-05-20"));
// → "in 6 months"

console.log(fromNow("2030-01-01"));
// → "in 4 years"
```

## fromNow Function Output Examples

| Input                    | Output              |
| ------------------------ | ------------------- |
| less than 20 seconds ago | `just now`          |
| 20–59 seconds ago        | `a few seconds ago` |
| 1 minute ago             | `a minute ago`      |
| 3 minutes ago            | `3 minutes ago`     |
| 1 hour ago               | `an hour ago`       |
| 5 hours ago              | `5 hours ago`       |
| 1 day ago                | `yesterday`         |
| 12 days ago              | `12 days ago`       |
| 1 month ago              | `a month ago`       |
| 2 months ago             | `2 months ago`      |
| 1 year ago               | `a year ago`        |
| Next year                | `in 1 year`         |
| 1 day in the future      | `tomorrow`          |
| 30 seconds in the future | `in a few seconds`  |

### 🧩 Supported Input Formats

| Type                       | Example                               | Works With                         |
| -------------------------- | ------------------------------------- | ---------------------------------- |
| **String (dash)**          | `"2025-10-17"`                        | All functions                      |
| **String (slash)**         | `"2025/10/17"`                        | All functions                      |
| **String (dot)**           | `"2025.11.12"` / `"2082.07.26"`       | All functions                      |
| **String (space)**         | `"2025 11 12"` / `"2082 07 26"`       | All functions                      |
| **Full date string**       | `"Fri Nov 07 2025 08:19:22 GMT+0545"` | AD → BS, `calculateAge`, `fromNow` |
| **ISO string**             | `"2025-11-07T00:00:00Z"`              | AD → BS, `calculateAge`, `fromNow` |
| **Object (1-based month)** | `{ year: 2082, month: 6, day: 31 }`   | BS ↔ AD conversion only            |
| **Date object**            | `new Date("2025-10-17")`              | AD → BS, `calculateAge`, `fromNow` |

Invalid or out-of-range dates throw clear errors.

---

Made with ❤️ for the Nepali developer community.

```

```
