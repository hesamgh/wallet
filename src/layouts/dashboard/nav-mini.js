// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// theme
import { hideScroll } from "@/src/theme/css";
// hooks
import { useMockedUser } from "@/src/hooks/use-mocked-user";
// components
import { Logo } from "@/src/components/logo";
import { NavSectionMini } from "@/src/components/nav-section";
//
import { NAV } from "../config-layout";
import { useNavData } from "./config-navigation";
import { NavToggleButton } from "../_common";
import { alpha } from "@mui/material";

// ----------------------------------------------------------------------

export default function NavMini() {
  const { user } = useMockedUser();

  const navData = useNavData();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 94,
          left: NAV.W_MINI - 12,
        }}
      />

      <Stack
        sx={{
          height: 1,
          position: "fixed",
          width: NAV.W_MINI,
          borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
          ...hideScroll.x,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80px",
            borderRadius: "0px 0px  0px 30px",
            backgroundColor: (theme) =>
              alpha(theme.palette.background.logo, 0.16),
            mb: "50px",
          }}
        >
          <Logo sx={{ width: "182px", height: "46px" }} />
        </Box>

        <NavSectionMini
          data={navData}
          config={{
            currentRole: user?.role || "admin",
          }}
        />

        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </Box>
  );
}
