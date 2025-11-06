export const bsMonths = [
    { index: 0, en: "Baishakh", np: "वैशाख" },
    { index: 1, en: "Jestha", np: "जेठ" },
    { index: 2, en: "Ashadh", np: "असार" },
    { index: 3, en: "Shrawan", np: "श्रावण" },
    { index: 4, en: "Bhadra", np: "भदौ" },
    { index: 5, en: "Ashwin", np: "असोज" },
    { index: 6, en: "Kartik", np: "कार्तिक" },
    { index: 7, en: "Mangsir", np: "मंसिर" },
    { index: 8, en: "Poush", np: "पुष" },
    { index: 9, en: "Magh", np: "माघ" },
    { index: 10, en: "Falgun", np: "फाल्गुन" },
    { index: 11, en: "Chaitra", np: "चैत्र" },
] as const;

export type BSMonth = typeof bsMonths[number];
