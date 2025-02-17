// @mui
import { Stack, Typography } from "@mui/material";

// hooks
import { useMockedUser } from "@/src/hooks/use-mocked-user";

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { user } = useMockedUser();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
          <Typography
            sx={{ color: (theme) => theme.palette.grey[200] }}
            variant="subtitle2"
            noWrap
          >
            {user?.displayName}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: "text.disabled" }}>
            {user?.email}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: "text.disabled" }}>
            {user?.phoneNumber}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
