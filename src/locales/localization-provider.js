"use client";

// @mui

import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// ----------------------------------------------------------------------

export default function LocalizationProvider({ children }) {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      {children}
    </MuiLocalizationProvider>
  );
}
