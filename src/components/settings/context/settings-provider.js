"use client";

import isEqual from "lodash/isEqual";
import { useEffect, useMemo, useCallback, useState } from "react";
// hooks
import { useLocalStorage } from "@/src/hooks/use-local-storage";
// utils
import { localStorageGetItem } from "@/src/utils/storage-available";
//
import { SettingsContext } from "./settings-context";

// ----------------------------------------------------------------------

export function SettingsProvider({ children, defaultSettings }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [settings, setSettings] = useLocalStorage("settings-", defaultSettings);

  const isPersian = localStorageGetItem("i18nextLng") === "fa";
  const isArabic = localStorageGetItem("i18nextLng") === "ar";
  useEffect(() => {
    if (isPersian) {
      onChangeDirectionByLang("fa");
    } else if (isArabic) {
      onChangeDirectionByLang("ar");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPersian, isArabic]);

  const onUpdate = useCallback(
    (name, value) => {
      setSettings((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setSettings]
  );

  // Direction by lang
  const onChangeDirectionByLang = useCallback(
    (lang) => {
      onUpdate(
        "themeDirection",
        lang === "fa" || lang === "ar" ? "rtl" : "ltr"
      );
    },
    [onUpdate]
  );

  // Reset
  const onReset = useCallback(() => {
    setSettings(defaultSettings);
  }, [defaultSettings, setSettings]);

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const canReset = !isEqual(settings, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onUpdate,
      // Direction
      onChangeDirectionByLang,
      // Reset
      canReset,
      onReset,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [
      onReset,
      onUpdate,
      settings,
      canReset,
      openDrawer,
      onCloseDrawer,
      onToggleDrawer,
      onChangeDirectionByLang,
    ]
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
