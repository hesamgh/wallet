// i18n
import "@/src/locales/i18n";

// scroll bar
import "simplebar-react/dist/simplebar.min.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";

// ----------------------------------------------------------------------

// locales
import { LocalizationProvider } from "@/src/locales";

// theme
import ThemeProvider from "@/src/theme";
import { primaryFont } from "@/src/theme/typography";

// components
import ProgressBar from "@/src/components/progress-bar";
import MotionLazy from "@/src/components/animate/motion-lazy";
import SnackbarProvider from "@/src/components/snackbar/snackbar-provider";
import { SettingsProvider, SettingsDrawer } from "@/src/components/settings";

// ----------------------------------------------------------------------

import "./globals.css";
import "../public/style.css";
// ----------------------------------------------------------------------

export const metadata = {
  title: "Admin",
  description: "Admin Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: "light", // 'light' | 'dark'
              themeDirection: "rtl", //  'rtl' | 'ltr'
              themeContrast: "default", // 'default' | 'bold'
              themeLayout: "vertical", // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: "blue", // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: true,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SnackbarProvider>
                  <SettingsDrawer />
                  <ProgressBar />
                  {children}
                </SnackbarProvider>
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
