import { useDropzone } from "react-dropzone";

// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

//components
import Iconify from "../iconify";
import { Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function UploadBox({
  // placeholder,
  // description,
  title,
  error,
  disabled,
  sx,
  iconSize,
  ...other
}) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      disabled,
      ...other,
    });

  const hasError = isDragReject || error;

  return (
    <Box
      {...getRootProps()}
      sx={{
        m: 0.5,
        width: 1,
        height: 192,
        flexShrink: 0,
        display: "flex",
        borderRadius: 1,
        cursor: "pointer",
        alignItems: "center",
        color: "text.disabled",
        justifyContent: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
        border: (theme) => `dashed 1px ${alpha(theme.palette.grey[500], 0.16)}`,
        ...(isDragActive && {
          opacity: 0.72,
        }),
        ...(disabled && {
          opacity: 0.48,
          pointerEvents: "none",
        }),
        ...(hasError && {
          color: "error.main",
          bgcolor: "error.lighter",
          borderColor: "error.light",
        }),
        "&:hover": {
          opacity: 0.72,
        },
        ...sx,
      }}
    >
      <input {...getInputProps()} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Iconify icon={other.icon} width={iconSize} />
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Box>
  );
}
