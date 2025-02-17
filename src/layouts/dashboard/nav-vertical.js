"use client";

import { useEffect } from "react";

// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Drawer, alpha, Typography } from "@mui/material";

// hooks
import { useLocales } from "@/src/locales";
import { useResponsive } from "@/src/hooks/use-responsive";
import { useMockedUser } from "@/src/hooks/use-mocked-user";

// components
import { Logo } from "@/src/components/logo";
import Scrollbar from "@/src/components/scrollbar";
import { usePathname } from "@/src/routes/hook";
import { NavSectionVertical } from "@/src/components/nav-section";

import { NAV } from "../config-layout";
import { useNavData } from "./config-navigation";
import { NavToggleButton } from "../_common";

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const { user } = useMockedUser();

  const pathname = usePathname();

  const { t } = useLocales();

  const lgUp = useResponsive("up", "lg");
  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          minHeight: "80px",
          borderRadius: "0px 0px  0px 40px",
          mb: "50px",
          pl: 3,
          backgroundColor: (theme) =>
            alpha(theme.palette.background.logo, 0.16),
        }}
      >
        <Logo sx={{ width: "46px", height: "46px" }} />

        <Typography
          color={isDarkMode ? theme.palette.primary.light : "primary"}
          variant="h6"
          sx={{ ml: 1 }}
        >
          {t("layout.displayName")}
        </Typography>
      </Box>

      <NavSectionVertical
        data={navData}
        config={{
          currentRole: user?.role || "admin",
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

      {/* <NavUpgrade /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
