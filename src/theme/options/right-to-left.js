import { useEffect } from "react";
// rtl
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
// emotion
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export default function RTL({ children, themeDirection }) {
  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  const cacheRtl = createCache({
    key: "rtl",
    prepend: true,
    // @ts-ignore
    // https://github.com/styled-components/stylis-plugin-rtl/issues/35
    stylisPlugins: [prefixer, rtlPlugin],
  });

  if (themeDirection === "rtl") {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
}

// ----------------------------------------------------------------------

export function direction(themeDirection) {
  const theme = {
    direction: themeDirection,
  };

  return theme;
}
