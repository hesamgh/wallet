// @mui
import { useTheme } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";

// hooks
import { useOffSetTop } from "@/src/hooks/use-off-set-top";
import { useResponsive } from "@/src/hooks/use-responsive";

// routes

// components
import { Logo } from "@/src/components/logo";
import SvgColor from "@/src/components/svg-color";
import { useSettingsContext } from "@/src/components/settings";
import { HEADER, NAV } from "../config-layout";
import {
  AccountPopover,
  // LanguagePopover,
  // SettingsButton,
  NotificationsPopover,
  ThemeButton,
  // FullScreenButton,
} from "../_common";

// theme
import { bgBlur } from "@/src/theme/css";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === "horizontal";

  const isNavMini = settings.themeLayout === "mini";

  const lgUp = useResponsive("up", "lg");

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={{ xs: 0.5, sm: 1 }}
      ></Stack>
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        {/* <LanguagePopover /> */}

        <ThemeButton />

        <NotificationsPopover />

        {/* <FullScreenButton  */}

        {/* <SettingsButton /> */}

        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: theme.palette.primary.main,
          }}
        /> */}

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        borderRadius: theme.shape.borderRadius,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,

        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1 + 16}px)`,
          mr: "8px",
          ml: "8px",

          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: "background.default",
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1 + 16}px)`,
            mr: "8px",
            ml: "8px",
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 4 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
