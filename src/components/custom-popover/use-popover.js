"use client";

import { useCallback, useState } from "react";

// ----------------------------------------------------------------------

export default function usePopover() {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setOpen(null);
  }, []);

  return {
    open,
    onOpen,
    onClose,
    setOpen,
  };
}
