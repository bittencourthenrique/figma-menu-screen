# Figma Menu Screen - React App

This is a React application built from a Figma design. It displays a menu screen with various food categories and items.

## Features

- ✅ Complete design token system extracted from Figma
- ✅ Responsive mobile-first design (375px width)
- ✅ Custom ChickenSans font support (Bold & Regular)
- ✅ All design tokens: colors, spacing, typography, borders, radius
- ✅ Component-based architecture
- ✅ Local development server with hot reload

## Design Tokens

All design tokens are extracted from Figma and available in `src/design-tokens.js`:

- **Colors**: Primary, Secondary, Utility, and Opacity variants
- **Spacing**: p-1 through p-7 (2px to 24px)
- **Typography**: Headline, Title, Body, and Button styles
- **Border Radius**: r-0, r-5, r-7
- **Borders**: Border widths

## Fonts Setup

The project uses ChickenSans fonts (Bold and Regular). To set up:

1. Place your font files in the `fonts/` directory:
   - `ChickenSans-Regular.ttf` (or .woff/.woff2)
   - `ChickenSans-Bold.ttf` (or .woff/.woff2)

2. The fonts are already configured in `src/index.css` with @font-face declarations.

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build

Build for production:

```bash
npm run build
```

## Project Structure

```
figma-menu-screen/
├── fonts/                    # Font files (ChickenSans Regular & Bold)
├── src/
│   ├── components/          # React components
│   │   ├── categories/      # Category components
│   │   ├── InfiniteScroll.jsx
│   │   ├── TopView.jsx
│   │   ├── MenuCategories.jsx
│   │   └── ...
│   ├── design-tokens.js     # All design tokens
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles & font declarations
├── index.html
├── package.json
└── vite.config.js
```

## Making Adjustments

All components are modular and can be easily adjusted:

- **Colors**: Update `src/design-tokens.js` or CSS variables in `src/index.css`
- **Spacing**: Modify spacing values in `src/design-tokens.js`
- **Typography**: Adjust font styles in `src/design-tokens.js`
- **Components**: Edit individual component files in `src/components/`

## Design Tokens Reference

### Colors
- Primary: `#f25600` (burnt-orange)
- Secondary: `#01847e` (ada-teal)
- Utility: white, nola-dark (#1f1f1f), nola-light (#f5f1ef), grey-1 (#595959)

### Spacing
- p-1: 2px
- p-2: 4px
- p-3: 8px
- p-4: 12px
- p-5: 16px
- p-7: 24px

### Typography
- Headline Small: 20px/24px, Bold
- Headline Medium: 24px/28px, Bold
- Title Large: 16px/20px, Bold
- Title Medium: 14px/18px, Bold
- Title Small: 12px/16px, Bold
- Body Medium: 14px/18px, Regular
- Body Small: 12px/16px, Regular

### Border Radius
- r-0: 0
- r-5: 20px
- r-7: 999px (full circle)

