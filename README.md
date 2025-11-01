# ***Miti Pariwartan — Bikram Sambat ↔ Gregorian Date Converter***

##### A lightweight, JSON-driven library to convert dates between English (AD) and Nepali (BS)
---

### ✨ Features

- 🔁 Convert **BS → AD** and **AD → BS**
- ⚙️ Offline, JSON-based, TypeScript ready
- 📦 Dual builds: **CommonJS (CJS)** + **ES Module (ESM)**
- 🌐 Works in **Node.js**, **React**, **Next.js**, and **Vanilla JS**
- 📅 Supports Nepali date range 2057–2095 BS
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

### Usage Examples

#### 📆 Convert BS → AD

```ts
import { bsToAd } from "miti-pariwartan";

// Example 1
const adDate1 = bsToAd("2082-07-01");
console.log(adDate1.formatted); // Output: "2025-10-18"

// Example 2
const adDate2 = bsToAd('2082-06-31');
console.log('BS → AD conversion:', adDate2);

Output Example (for '2082-06-31'): ⬇️
{
  "day": 17,
  "formatted": "2025-10-17",
  "month": 10,
  "monthName": "October",
  "nepaliWeekdayName": "Shukrabar",
  "readable": "October 17, 2025",
  "weekdayIndex": 5,
  "weekdayName": "Friday",
  "year": 2025
}
```

#### 📅 Convert AD → BS
```ts
import { adToBs } from "miti-pariwartan";

// Example 1
const bsDate1 = adToBs("2025-10-17");
console.log(bsDate1.formatted); // Output: "2082-06-31"

// Example 2
const bsDate2 = adToBs("2025-10-18");
console.log('AD → BS conversion:', bsDate2);

Output Example (for '2025-10-17'): ⬇️
{
  "day": 31,
  "formatted": "2082-06-31",
  "month": 6,
  "monthName": "Ashwin",
  "nepaliWeekdayName": "Shukrabar",
  "readable": "Ashwin 31, 2082",
  "weekdayIndex": 5,
  "weekdayName": "Friday",
  "year": 2082
}





