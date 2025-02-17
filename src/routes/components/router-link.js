import { forwardRef } from "react";
import Link from "next/link";

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ ...other }, ref) => (
  <Link ref={ref} {...other} />
));

// Set the display name for better debugging
RouterLink.displayName = "RouterLink";

export default RouterLink;
