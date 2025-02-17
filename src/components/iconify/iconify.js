import { forwardRef } from "react";

// @mui
import Box from "@mui/material/Box";

// icons
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

// Set the display name for better debugging
Iconify.displayName = "Iconify";

export default Iconify;
