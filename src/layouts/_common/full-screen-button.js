"use client";

import { useState, useCallback } from "react";
import { m } from "framer-motion";

// @mui
import { IconButton } from "@mui/material";

// components
import Iconify from "@/src/components/iconify";
import { varHover } from "@/src/components/animate";

// ----------------------------------------------------------------------

export default function FullScreenButton() {
  const [fullscreen, setFullscreen] = useState(false);

  const onToggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }, []);

  return (
    <IconButton
      component={m.button}
      whileTap="tap"
      whileHover="hover"
      variants={varHover(1.05)}
      aria-label="settings"
      onClick={onToggleFullScreen}
      sx={{
        width: 40,
        height: 40,
        // background: (theme) => alpha(theme.palette.grey[500], 0.08),
      }}
    >
      {!fullscreen ? (
        <Iconify icon="ant-design:fullscreen-outlined" width={24} />
      ) : (
        <Iconify icon="ant-design:fullscreen-exit-outlined" width={24} />
      )}
    </IconButton>
  );
}
