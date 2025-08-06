// constraints/typography.ts

//  FONT FAMILIES 

export const fontFamilies = {
  heading: "Satoshi-Bold",       // For titles/headlines
  body: "Satoshi-Regular",       // Default paragraph font
  medium: "Satoshi-Medium",      // Slightly heavier than regular
  bold: "Satoshi-Bold",          // Buttons and emphasis
  italic: "Satoshi-Italic",      // Optional styles if available
};

//  FONT SIZES 
// Match common use-cases: text, headings, tags, etc.

export const fontSizes = {
  xs: 12,   // Captions, metadata
  sm: 13,   // Secondary info
  md: 16,   // Body text (default)
  base: 16, // Main text/buttons
  mdPlus: 17, // Slightly larger body text
  lg: 18,   // Subheadings, highlights
  xl: 20,   // Card titles / section headers
  xxl: 24,  // Page titles or hero text
};
//  FONT WEIGHTS 
// If you’re not using named weights, stick to 400/500/700

export const fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700",
};
//  LINE HEIGHTS 
// Adjust for vertical rhythm (especially on mobile)

export const lineHeights = {
  tight: 16,
  normal: 20,
  relaxed: 24,
  spacious: 32,
};
