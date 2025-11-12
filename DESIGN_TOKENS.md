# Design Tokens Reference

This document contains all design tokens extracted from the Figma file.

## Colors

### Primary
- **burnt-orange**: `#f25600`

### Secondary
- **ada-teal**: `#01847e`

### Utility
- **white**: `#ffffff`
- **nola-dark**: `#1f1f1f`
- **nola-light**: `#f5f1ef`
- **grey-1**: `#595959`

### Opacity Variants
- **nola-dark-10**: `rgba(31, 31, 31, 0.1)` - 10% opacity
- **nola-dark-75**: `rgba(31, 31, 31, 0.75)` - 75% opacity

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `p-1` | `2px` | Smallest spacing unit |
| `p-2` | `4px` | Small spacing |
| `p-3` | `8px` | Default spacing |
| `p-4` | `12px` | Medium spacing |
| `p-5` | `16px` | Large spacing |
| `p-7` | `24px` | Extra large spacing |

## Typography

### Headline Styles

#### Headline Small
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `20px`
- Line Height: `24px`

#### Headline Medium
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `24px`
- Line Height: `28px`

### Title Styles

#### Title Small
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `12px`
- Line Height: `16px`

#### Title Medium
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `14px`
- Line Height: `18px`

#### Title Large
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `16px`
- Line Height: `20px`

### Body Styles

#### Body Small
- Font Family: `ChickenSans`
- Font Weight: `400` (Regular)
- Font Size: `12px`
- Line Height: `16px`

#### Body Medium
- Font Family: `ChickenSans`
- Font Weight: `400` (Regular)
- Font Size: `14px`
- Line Height: `18px`

### Button Styles

#### Button Medium
- Font Family: `ChickenSans`
- Font Weight: `700` (Bold)
- Font Size: `14px`
- Line Height: `20px`

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `r-0` | `0` | No radius (sharp corners) |
| `r-5` | `20px` | Medium radius |
| `r-7` | `999px` | Full circle (pill shape) |

## Borders

| Token | Value | Usage |
|-------|-------|-------|
| `border-width: 1px` | `1px` | Standard border width |

## CSS Variables

All tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary-burnt-orange: #f25600;
--color-secondary-ada-teal: #01847e;
--color-utility-white: #ffffff;
--color-utility-nola-dark: #1f1f1f;
--color-utility-nola-light: #f5f1ef;
--color-utility-grey-1: #595959;
--color-opacity-nola-dark-10: rgba(31, 31, 31, 0.1);
--color-opacity-nola-dark-75: rgba(31, 31, 31, 0.75);

/* Spacing */
--spacing-p-1: 2px;
--spacing-p-2: 4px;
--spacing-p-3: 8px;
--spacing-p-4: 12px;
--spacing-p-5: 16px;
--spacing-p-7: 24px;

/* Border Radius */
--radius-r-0: 0;
--radius-r-5: 20px;
--radius-r-7: 999px;

/* Borders */
--border-width-1px: 1px;
```

## Usage in JavaScript

Import tokens from `src/design-tokens.js`:

```javascript
import { colors, spacing, typography, borderRadius } from './design-tokens'

// Use in inline styles
<div style={{ color: colors.primary['burnt-orange'] }}>...</div>
<div style={{ padding: spacing['p-5'] }}>...</div>
```

## Usage in CSS

Use CSS variables:

```css
.my-component {
  color: var(--color-primary-burnt-orange);
  padding: var(--spacing-p-5);
  border-radius: var(--radius-r-5);
}
```

