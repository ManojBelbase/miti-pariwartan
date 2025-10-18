# 🌸 Miti Pariwartan — Bikram Sambat (BS ↔ AD) Date Converter

A lightweight, JSON-driven **Nepali Bikram Sambat (BS) ↔ Gregorian (AD)** date converter library for Node.js, browser, and TypeScript projects.  
Convert dates, get weekday names in English and Nepali — fully offline and easy to use.

---

## ✨ Features

- 🔁 Convert **BS → AD** and **AD → BS**
- 📅 Supports full Nepali calendar range (e.g., 2000 AD – 2099 AD / 2057–2156 BS)
- 🗓 Get **weekday names** in both **English** and **Nepali**
- ⚙️ Works fully **offline** using bundled JSON calendar data
- 🧠 Built with **TypeScript**, offering full type safety
- 📦 Dual builds: **CommonJS (CJS)** + **ES Module (ESM)**
- 🌐 Works in **Node.js**, **React**, **Next.js**, and **Vanilla JS**
- 💡 Designed for modern Nepali applications and government systems

---

## 📦 Installation

Using **npm**:

```bash
npm install miti-pariwartan
```

Using **yarn**:

```bash
npm install miti-pariwartan
```


---

### 🗓 Convert BS → AD

```typescript
import { bsToAd } from "miti-pariwartan";

const adDate = bsToAd("2082-07-01");
console.log(adDate); // Output: "2025-10-18"
```

### 🗓 Convert AD → BS

```typescript
import { adToBs } from "miti-pariwartan";

const bsDate = adToBs("2025-10-18");
console.log(bsDate); // Output: "2082-07-01"
```






