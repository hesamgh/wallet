"use client";

import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  const pathname = usePathname();
  let excelActive = false;
  let supportActive = false;

  const checkPath = path.startsWith("#");

  const currentPath = path === "/" ? "/" : `${path}`;

  const normalActive = !checkPath && pathname === currentPath;

  const deepActive = !checkPath && pathname.includes(currentPath);

  if (pathname.includes("/excel") || pathname.includes("/add")) {
    excelActive =
      !checkPath && pathname.split("/").slice(0, -1).join("/") === currentPath;
  }

  if (pathname.includes("/support")) {
    supportActive =
      !checkPath && pathname.split("/").slice(0, -1).join("/") === currentPath;
  }

  return deep ? deepActive : normalActive || excelActive || supportActive;
}
