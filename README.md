# **** Miti Pariwartan — Bikram Sambat ↔ Gregorian Date Converter****

##### Convert Nepali Bikram Sambat (BS) to Gregorian (AD) dates and vice versa, fully offline, using a simple and accurate JavaScript library.

---

### ✨ Features

- 🔁 Convert **BS → AD** and **AD → BS**
- ⚙️ Works offline, no API calls — data powered by local ***JSON***
- 🌍 Returns both **English** and **Nepali** date formats
- 🌐 Works in **Node.js**, **React**, **Next.js**, and **Vanilla JS**
- 📦 Dual builds: **CommonJS (CJS)** + **ES Module (ESM)**
- 📅 Supports Nepali date range 2057BS to 2099 BS
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
import { bsToAd } from "miti-pariwartan";

// Example 1
const adDate1 = bsToAd("2082-07-01");
console.log(adDate1.formatted.standard);
// Output: "2025-10-18"

// Example 2
const adDate2 = bsToAd("2082-06-31");
console.log("BS → AD conversion:", adDate2);

Output Example (for 2082-06-31):

{
  "input": "2082-06-31",
  "year": { "en": "2025", "np": "२०२५" },
  "month": { "index": 9, "en": "October", "np": "१०" },
  "day": { "en": "17", "np": "१७" },
  "week": { "index": 5, "en": "Friday", "np": "शुक्रबार" },
  "formatted": {
    "en": "2025 October 17, Friday",
    "np": "२०२५ १० १७, शुक्रबार",
    "standard": "2025-10-17"
  }
}

```

### 🗓️ Convert AD → BS

```ts
import { adToBs } from "miti-pariwartan";

// Example 1
const bsDate1 = adToBs("2025-10-18");
console.log(bsDate1.formatted.standard);
// Output: "2082-07-01"

// Example 2
const bsDate2 = adToBs("2025-10-18");
console.log("AD → BS conversion:", bsDate2);

Output Example (for 2025-10-17):

{
  "input": "2025-10-17",
  "year": { "en": "2082", "np": "२०८२" },
  "month": { "index": 6, "en": "Ashwin", "np": "असोज" },
  "day": { "en": "31", "np": "३१" },
  "week": { "index": 5, "en": "Friday", "np": "शुक्रबार" },
  "formatted": {
    "en": "2082 Ashwin 31, Friday",
    "np": "२०८२ असोज ३१, शुक्रबार",
    "standard": "2082-06-31"
  }
}

```

### 🧩 Input Formats

| Type                       | Example                               | Description                                                                               |
| -------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| **String (dash)**          | `"2025-10-17"`                        | AD/BS date string using dashes (`YYYY-MM-DD`).                                            |
| **String (slash)**         | `"2025/10/17"`                        | AD/BS date string using slashes (`YYYY/MM/DD`).                                           |
| **String (full date)**     | `"Fri Nov 07 2025 08:19:22 GMT+0545"` | Full JavaScript date string (AD only).                                                    |
| **ISO String**             | `"2025-11-07T00:00:00Z"`              | ISO 8601 date string (AD only).                                                           |
| **Object (1-based month)** | `{ year: 2082, month: 6, day: 31 }`   | Separate numeric fields. BS month starts at 1 = Baishakh, AD month starts at 1 = January. |
| **Date Object**            | `new Date("2025-10-17")`              | Native JavaScript `Date` object (AD only).                                                |
| **Invalid Example ❌**      | `"3333/33/33"`                        | Throws error — invalid, malformed, or out-of-range date.                                  |
