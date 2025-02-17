"use client";

import { m } from "framer-motion";

// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// layouts
import CompactLayout from "@/src/layouts/compact";
// assets
import { SeverErrorIllustration } from "@/src/assets/illustrations";
// components
import { RouterLink } from "@/src/routes/components";
import { MotionContainer, varBounce } from "@/src/components/animate";
import { useLocales } from "@/src/locales";

// ----------------------------------------------------------------------

export default function Page500() {
  const { t } = useLocales();
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            {t("errors.500_Internal_Server_Error")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            {t("errors.there_was_an_error_please_try_again_later")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button
          component={RouterLink}
          href="/"
          size="large"
          variant="contained"
        >
          {t("errors.go_to_Home")}
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
