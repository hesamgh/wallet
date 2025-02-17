// @mui
import { faIR, enUS, arSA } from "@mui/material/locale";

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: "persian",
    value: "fa",
    systemValue: faIR,
    icon: "flagpack:ir",
  },
  {
    label: "english",
    value: "en",
    systemValue: enUS,
    icon: "flagpack:gb-nir",
  },
  {
    label: "arabic",
    value: "ar",
    systemValue: arSA,
    icon: "flagpack:sa",
  },
];

export const defaultLang = allLangs[0]; // Persian

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
