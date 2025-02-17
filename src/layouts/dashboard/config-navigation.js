import { useMemo } from "react";
// routes
import { paths } from "@/src/routes/paths";

// components
import SvgColor from "@/src/components/svg-color";
import { useLocales } from "@/src/locales";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  dashboard: icon("ic_dashboard"),
  dashboard_filed: icon("ic_dashboard_filed"),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      {
        items: [
          {
            title: t("layout.navbar.dashboard"),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
            iconFiled: ICONS.dashboard_filed,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
