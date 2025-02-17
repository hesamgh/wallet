import { m } from "framer-motion";
import IconButton from "@mui/material/IconButton";
// components
import Iconify from "@/src/components/iconify";
import { varHover } from "@/src/components/animate";

// ----------------------------------------------------------------------

export default function FullScreenForm({ fullscreen, setFullscreen }) {
  const onToggleFullScreen = (event) => {
    event.preventDefault();
    setFullscreen(!fullscreen);
  };

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
