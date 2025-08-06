// constants/sizing.ts

// ─── BASE SPACING SCALE ─────────────────────────────
// The single source of truth for spacing across the app

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
};

// ─── LINE HEIGHT TOKENS ─────────────────────────────
// Controls vertical rhythm inside text blocks

export const lineHeight = {
  tight: 16,
  normal: 20,
  relaxed: 24,
  spacious: 32,
};

// ─── PADDING TOKENS ────────────────────────────────
// Internal spacing within components, referencing base spacing

export const padding = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,

  vertical: spacing.md,
  horizontal: spacing.lg,
  header: spacing.xl,
  footer: spacing.xxl,
};

// ─── MARGIN TOKENS ─────────────────────────────────
// External spacing outside components, direction-agnostic sizes

export const margin = {
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  lg: spacing.lg,
  xl: spacing.xl,

  // Negative margins for offsetting
  offset: -spacing.lg,
};

// ─── RADIUS TOKENS ─────────────────────────────────
// Border-radius values for rounding corners

export const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  default: 20,
  button: 25,
  image: 40,
  pill: 999,
};

// ─── BORDER WIDTH TOKENS ────────────────────────────
// Thickness of borders across the UI

export const borderWidth = {
  hairline: 0.5,
  thin: 1,
  thick: 2,
};

// ─── ELEMENT SIZE TOKENS ────────────────────────────
// Fixed sizes for common UI elements

export const sizes = {
  icon: 24,
  logo: 28,
  avatar: 40,
  inputHeight: 48,
  buttonHeight: 45,
  buttonWidth: 45,
};
