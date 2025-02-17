import { m } from "framer-motion";

// @mui
import { IconButton } from "@mui/material";

// components
import Iconify from "@/src/components/iconify";
import { varHover } from "@/src/components/animate";
import { useSettingsContext } from "@/src/components/settings";

// ----------------------------------------------------------------------

export default function ThemeButton() {
  const settings = useSettingsContext();
  const Icon =
    settings.themeMode === "light"
      ? "line-md:sunny-outline-to-moon-loop-transition"
      : "line-md:moon-to-sunny-outline-loop-transition";

  return (
    <IconButton
      component={m.button}
      whileTap="tap"
      whileHover="hover"
      variants={varHover(1.05)}
      aria-label="settings"
      onClick={() => {
        settings.onUpdate(
          "themeMode",
          settings.themeMode === "light" ? "dark" : "light"
        );
      }}
      sx={{
        width: 40,
        height: 40,
        // background: (theme) => alpha(theme.palette.grey[500], 0.08),
      }}
    >
      <Iconify icon={Icon} width={24} />
    </IconButton>
  );
}
