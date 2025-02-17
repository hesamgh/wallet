import { m } from "framer-motion";
// @mui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// routes
import { useRouter } from "@/src/routes/hook";
// hooks
import { useMockedUser } from "@/src/hooks/use-mocked-user";
// auth
// import { useAuthContext } from "@/src/auth/hooks";
// components
import { varHover } from "@/src/components/animate";
import CustomPopover, { usePopover } from "@/src/components/custom-popover";
import { useLocales } from "@/src/locales";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { t } = useLocales();
  const router = useRouter();
  const { user } = useMockedUser();
  // const { logout } = useAuthContext();
  const popover = usePopover();

  const OPTIONS = [
    {
      label: t("layout.home"),
      linkTo: "/",
    },
    {
      label: t("layout.profile"),
      linkTo: "/profile",
    },
  ];

  const handleLogout = async () => {
    try {
      // await logout();
      popover.onClose();
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
            ...(popover.open && {
              color: (theme) => theme.palette.grey[0],
            }),
          }}
        />
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 240, p: 0 }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {user?.position}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleClickItem(option.linkTo)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
        >
          {t("layout.logout")}
        </MenuItem>
      </CustomPopover>
    </>
  );
}
