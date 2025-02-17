import { m } from "framer-motion";

// @mui
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// layouts
import CompactLayout from "@/src/layouts/compact";

// assets
import { ForbiddenIllustration } from "@/src/assets/illustrations";

// components
import { RouterLink } from "@/src/routes/components";
import { MotionContainer, varBounce } from "@/src/components/animate";
import { useLocales } from "@/src/locales";

// ----------------------------------------------------------------------

export default function View403() {
  const { t } = useLocales();
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            {t("errors.no_permission")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            {t("errors.the_page_youre_trying_access_has_restricted_access")}
            <br />
            {t("errors.please_refer_to_your_system_administrator")}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
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
