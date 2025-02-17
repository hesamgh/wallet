import { forwardRef } from "react";

// @mui
import { Link, Box, Typography } from "@mui/material";

// routes
import { RouterLink } from "@/src/routes/components";

// hooks
import { useLocales } from "@/src/locales";

// ----------------------------------------------------------------------

const MiniLogo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const { t } = useLocales();

  const logo = (
    <Box
      component="img"
      src="/assets/logo/logo.svg"
      sx={{ width: 60, cursor: "pointer", mb: 1, ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link
      ref={ref}
      component={RouterLink}
      href="/"
      sx={{ display: "contents" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {logo}
        <Typography variant="overline">{t("layout.displayName")}</Typography>
      </Box>
    </Link>
  );
});

MiniLogo.displayName = "MiniLogo";

export default MiniLogo;
