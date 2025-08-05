// constraints/sizing.ts

//padding
export const padding = {
  xs: 5,                // Tiny padding
  sm: 8,                // Small padding (buttons, inputs)
  md: 10,               // Medium internal spacing
  lg: 15,               // General container/card padding
  xl: 25,               // Large section-level padding

  vertical: 12,         // Vertical-only default padding
  horizontalSm: 10,     // Narrow horizontal padding
  horizontal: 16,       // Standard screen padding
  header: 20,           // Top headers
  footer: 24,           // Bottom tab or footer
};


//  SPACING TOKENS (Margins & Gaps) 
// Outer space between components and gaps between lines

export const spacing = {
  xs: 4, sm: 8, md: 12, lg: 15, xl: 24, xxl: 32,

  // Semantic gaps
  gapXs: 4,   // Smallest label spacing
  gapSm: 8,   // Between sub-elements
  gapMd: 12,  // Default content gaps
  gapLg: 20,  // Card-to-card gaps
  gapXl: 30,  // Section-to-section

  // Negative / offsets
  offsetSm: -7,     // Slight lift
  offsetMd: -20,    // Medium shift
  offsetLg: -25,    // Large element pull-up
  offsetXl: -30,    // Deep offset
  edgePull: -5,     // Stretch edge-to-edge
};
//  MARGIN TOKENS 
// External space outside components
export const margins = {
  rightSm: 8,             // e.g. icon to text
  verticalSm: 8,
  verticalMd: 10,
  topXs: 4,
  topSm: 5,
  topMd: 8,
  leftSm: 10,
  leftOffset: -15,        // Negative margin for offsetting
};

//  BORDER RADIUS TOKENS 
// Defines how rounded elements appear

export const borderRadius = {
  sm: 4,         // Subtle rounding
  md: 8,         // Inputs and small blocks
  lg: 15,        // Cards and containers
  xl: 24,        // Strips or panels

  default: 20,   // Universal default radius
  button: 25,    // Buttons (pill shape)
  image: 40,     // Rounded corners for images

  pill: 999,     // Fully rounded (badge)
};


// ─── BORDER WIDTH TOKENS 
// Thickness of borders across the UI

export const borderWidth = {
  hairline: 0.5,  // Subtle outlines
  thin: 1,        // Inputs, cards
  thick: 2,       // Bottom tabs, dividers
};


// ─── ELEMENT SIZE TOKENS 
// Used to define fixed height/width values

export const sizes = {
  icon: 24,         // Standard icon size
  logo: 28,         // App header logo
  avatar: 40,       // Circular profile image
  inputHeight: 48,  // Search bars, text inputs
  buttonHeight: 45, // Full buttons
  buttonWidth: 45, // Full buttons
};