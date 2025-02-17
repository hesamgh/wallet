// @mui
import { TableRow, TableCell } from "@mui/material";

//hooks
import { useLocales } from "@/src/locales";

// components
import EmptyContent from "../empty-content";

// ----------------------------------------------------------------------

export default function TableNoData({ notFound, sx }) {
  const { t } = useLocales();

  return (
    <TableRow>
      {notFound ? (
        <TableCell colSpan={24}>
          <EmptyContent
            filled
            title={t("table.table_no_data")}
            sx={{
              py: 10,
              ...sx,
            }}
          />
        </TableCell>
      ) : (
        <TableCell colSpan={24} sx={{ p: 0 }} />
      )}
    </TableRow>
  );
}
