import { forwardRef } from "react";

// @mui
import { Link, Box } from "@mui/material";

// routes
import { RouterLink } from "@/src/routes/components";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx }, ref) => {
  const logo = (
    <Box
      component="img"
      src="/assets/logo/logo.svg"
      sx={{ width: 80, height: 40, cursor: "pointer", ...sx }}
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
      {logo}
    </Link>
  );
});

Logo.displayName = "Logo";

export default Logo;
