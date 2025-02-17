// Constants for Padding, Spacing, Margin, and Gap
const SIZES = {
  XS: 1, // 8px
  SM: 2, // 16px
  MD: 3, // 24px
  LG: 4, // 32px
  XL: 5, // 40px
};

// Responsive Padding Configuration
const CARD_PADDING_RESPONSIVE = {
  xs: SIZES.SM,
  sm: SIZES.SM,
  md: SIZES.MD,
  lg: SIZES.LG,
  xl: SIZES.LG,
};

// Responsive Spacing Configuration
const GRID_SPACING_RESPONSIVE = {
  xs: SIZES.SM,
  sm: SIZES.SM,
  md: SIZES.MD,
  lg: SIZES.LG,
  xl: SIZES.XL,
};

// Responsive Margin Configuration
const HEADER_MARGIN_RESPONSIVE = {
  xs: SIZES.SM,
  sm: SIZES.SM,
  md: SIZES.SM,
  lg: SIZES.MD,
  xl: SIZES.LG,
};

// Responsive Gap Configuration
const GAP_RESPONSIVE = {
  xs: SIZES.SM,
  sm: SIZES.SM,
  md: SIZES.MD,
  lg: SIZES.LG,
  xl: SIZES.LG,
};

// Column and Row Gap Configurations
const COLUMN_GAP_RESPONSIVE = {
  xs: SIZES.XS,
  sm: SIZES.XS,
  md: SIZES.SM,
  lg: SIZES.MD,
  xl: SIZES.MD,
};

const ROW_GAP_RESPONSIVE = {
  xs: SIZES.SM,
  sm: SIZES.SM,
  md: SIZES.MD,
  lg: SIZES.MD,
  xl: SIZES.MD,
};

// Utility Function to Create Responsive Styles
const createResponsiveStyles = (responsiveConfig, theme) =>
  Object.keys(responsiveConfig).reduce((acc, key) => {
    acc[key] = theme.spacing(responsiveConfig[key]);
    return acc;
  }, {});

// Exported Functions
export const createResponsivePadding = (theme) =>
  createResponsiveStyles(CARD_PADDING_RESPONSIVE, theme);

export const createResponsiveSpacing = (theme) =>
  createResponsiveStyles(GRID_SPACING_RESPONSIVE, theme);

export const createResponsiveHeaderMargin = (theme) =>
  createResponsiveStyles(HEADER_MARGIN_RESPONSIVE, theme);

export const createResponsiveColumnGap = (theme) =>
  createResponsiveStyles(COLUMN_GAP_RESPONSIVE, theme);

export const createResponsiveRowGap = (theme) =>
  createResponsiveStyles(ROW_GAP_RESPONSIVE, theme);

export const createResponsiveGap = (theme) =>
  createResponsiveStyles(GAP_RESPONSIVE, theme);
