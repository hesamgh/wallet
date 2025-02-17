"use client";

import { m } from "framer-motion";
import { useState, useCallback } from "react";

// @mui
import {
  Tab,
  Box,
  Tabs,
  List,
  Stack,
  Badge,
  Drawer,
  Button,
  Divider,
  Tooltip,
  IconButton,
  Typography,
  Link,
} from "@mui/material";

// hooks
import { useBoolean } from "@/src/hooks/use-boolean";
import { useResponsive } from "@/src/hooks/use-responsive";

// _mock
// import { _notifications } from "@/src/_mock";
// routes
import { RouterLink } from "@/src/routes/components";
import { paths } from "@/src/routes/paths";

// components
import Label from "@/src/components/label";
import Iconify from "@/src/components/iconify";
import Scrollbar from "@/src/components/scrollbar";
import { varHover } from "@/src/components/animate";
import NotificationItem from "./notification-item";

// ----------------------------------------------------------------------

const TABS = [
  {
    value: "all",
    label: "همه",
    count: 22,
  },
  {
    value: "unread",
    label: "خوانده نشده",
    count: 12,
  },
  {
    value: "archived",
    label: "بایگانی شده",
    count: 10,
  },
];

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
  const drawer = useBoolean();

  const smUp = useResponsive("up", "sm");

  const [currentTab, setCurrentTab] = useState("all");

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  const [notifications, setNotifications] = useState([]);

  const totalUnRead = notifications.filter(
    (item) => item.isUnRead === true
  ).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        پیغام ها
      </Typography>

      {!!totalUnRead && (
        <Tooltip title="Mark all as read">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}

      {!smUp && (
        <IconButton onClick={drawer.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      )}
    </Stack>
  );

  const renderTabs = (
    <Tabs value={currentTab} onChange={handleChangeTab}>
      {TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            <Label
              variant={
                ((tab.value === "all" || tab.value === currentTab) &&
                  "filled") ||
                "soft"
              }
              color={
                (tab.value === "unread" && "info") ||
                (tab.value === "archived" && "success") ||
                "default"
              }
            >
              {tab.count}
            </Label>
          }
          sx={{
            "&:not(:last-of-type)": {
              mr: 3,
            },
          }}
        />
      ))}
    </Tabs>
  );

  const renderList = (
    <Scrollbar>
      <List disablePadding>
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </List>
    </Scrollbar>
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={drawer.value ? "primary" : "default"}
        onClick={drawer.onTrue}
        // sx={{ background: (theme) => alpha(theme.palette.grey[500], 0.08) }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="solar:bell-bing-bold-duotone" width={24} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 420 },
        }}
      >
        {renderHead}

        <Divider />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pl: 2.5, pr: 1 }}
        >
          {renderTabs}
        </Stack>

        <Divider />

        {renderList}

        <Box sx={{ p: 1 }}>
          <Link
            component={RouterLink}
            href={`${paths.notification.root}`}
            sx={{ display: "contents" }}
          >
            <Button onClick={drawer.onFalse} fullWidth size="large">
              مشاهده همه
            </Button>
          </Link>
        </Box>
      </Drawer>
    </>
  );
}
