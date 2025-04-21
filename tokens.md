# Wikimedia Design Codex Tokens

Design tokens are the smallest stylistic pieces of the Wikimedia design system. They maintain a scalable and consistent visual system for UI development in a single source of truth rather than using hard-coded style values or single-use variables.

## Token Categories

The Wikimedia Design Codex includes the following token categories:

1. **Color**
   - Text colors (base, emphasized, subtle, progressive, destructive, etc.)
   - Background colors
   - Border colors
   - Box-shadow colors
   - Accent colors

2. **Spacing**
   - Padding and margin values (0, 12, 25, 30, 35, 50, 75, 100, etc.)
   - Positioning tokens

3. **Size**
   - Width/height dimensions
   - Minimum interactive sizes
   - Viewport-based sizes
   - Content sizing

4. **Border**
   - Border width (base, thick)
   - Border style (base, dashed)
   - Border radius (base, sharp, pill, circle)
   - Border color (base, subtle, interactive, etc.)

5. **Typography**
   - Font family (base, sans, serif, monospace)
   - Font size (x-small, small, medium, large, x-large, etc.)
   - Font weight (hairline, light, normal, semi-bold, bold)
   - Line height (small, medium, etc.)
   - Text decoration (none, line-through, underline)
   - Text overflow (clip, ellipsis)

6. **Effects**
   - Box shadow (small, medium, large, inset variants)
   - Opacity (base, medium, low, transparent)
   - Outline

7. **Animation & Transition**
   - Transition duration (base, medium)
   - Transition timing function (system, user)
   - Transition properties
   - Animation delay (none, medium, slow)
   - Animation duration (fast, medium, slow)
   - Animation timing function

8. **Layout & Position**
   - Z-index (bottom, base, above-content, overlay, etc.)
   - Position offsets
   - Box sizing
   - Min-width/max-width (including breakpoints)
   - Background position/size

9. **Interactive States**
   - Cursor (base, hover, grab, help, not-allowed, etc.)
   - Mix-blend-mode

## Usage 

Tokens can be used in several formats:
- CSS custom properties
- Less variables
- SCSS variables
- ES6 variables
- JSON files

## Dark Mode Support

Some colors vary between light and dark modes. Using design tokens rather than raw hex codes ensures automatic color adjustment for the chosen mode.

## Naming Convention

Tokens follow a structured naming convention:
- Category-based naming (e.g., color, spacing, font-size)
- State-based suffixes for interactive elements (e.g., --hover, --active, --focus)
- Semantic naming that reflects purpose rather than visual characteristics

## Implementation

Tokens are stored in JSON format and transformed into various output formats using Style Dictionary. This ensures consistent token values across different platforms and technologies.
