"use client";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// utils
import { localStorageGetItem } from "@/src/utils/storage-available";
//
import { defaultLang } from "./config-lang";
//

import translationFa from "./langs/fa.json";
import translationEn from "./langs/en.json";
import translationAr from "./langs/ar.json";

// ----------------------------------------------------------------------

const lng = localStorageGetItem("i18nextLng", defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fa: { translations: translationFa },
      en: { translations: translationEn },
      ar: { translations: translationAr },
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
