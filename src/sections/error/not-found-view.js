"use client";

import { m } from "framer-motion";
// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// layouts
import CompactLayout from "@/src/layouts/compact";
// routes
import { RouterLink } from "@/src/routes/components";
// components
import { MotionContainer, varBounce } from "@/src/components/animate";
import { useLocales } from "@/src/locales";
// assets
import { PageNotFoundIllustration } from "@/src/assets/illustrations";

// ----------------------------------------------------------------------

export default function NotFoundView() {
  const { t } = useLocales();
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            {t("errors.sorry_Page_Not_Found")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            {t("errors.description")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
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
