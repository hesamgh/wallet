// @mui
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TablePagination from "@mui/material/TablePagination";

// hooks
import { useLocales } from "@/src/locales";
import useTable from "./use-table";

// ----------------------------------------------------------------------

export default function TablePaginationCustom({
  dense,
  onChangeDense,
  rowsPerPageOptions = [5, 10, 25],
  sx,
  ...other
}) {
  const { t } = useLocales();

  const table = useTable();
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        labelRowsPerPage={t("table.pagination.rows_per_page")}
        labelDisplayedRows={({ from, to, count }) => {
          const safeFrom = parseInt(from);
          const safeTo = parseInt(to);
          const safeCount = parseInt(count);
          const safePage = parseInt(table.page);

          return `صفحه: ${safePage + 1} ، ردیف: ${safeFrom} تا ${safeTo} از ${
            safeCount !== -1 ? safeCount : `${safeTo}`
          }`;
        }}
        component="div"
        {...other}
        sx={{
          borderTopColor: "transparent",
        }}
      />

      {onChangeDense && (
        <FormControlLabel
          label={t("table.pagination.dense")}
          control={
            <Switch color="primary" checked={dense} onChange={onChangeDense} />
          }
          sx={{
            pl: 2,
            py: 1.5,
            top: 0,
            position: {
              sm: "absolute",
            },
          }}
        />
      )}
    </Box>
  );
}
