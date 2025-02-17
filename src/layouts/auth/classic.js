"use client";

// @mui
import { Box, Stack } from "@mui/material";

// auth
// import { useAuthContext } from "@/src/auth/hooks";

// ----------------------------------------------------------------------

export default function AuthClassicLayout({ children }) {
  // const { method } = useAuthContext();

  const renderContent = (
    <Stack
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      sx={{
        mx: "auto",
        px: { xs: 2 },
        py: { xs: 10, md: 20 },
      }}
    >
      <Box
        direction="column"
        sx={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        {children}
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        height: "100vh",
      }}
    >
      {renderContent}
    </Stack>
  );
}
