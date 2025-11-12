# Quick Start Guide

## Step 1: Install Dependencies

```bash
cd figma-menu-screen
npm install
```

## Step 2: Add Font Files

Place your ChickenSans font files in the `fonts/` directory:

- `ChickenSans-Regular.ttf` (or .woff/.woff2)
- `ChickenSans-Bold.ttf` (or .woff/.woff2)

The fonts are already configured in `src/index.css` and will work automatically once you add the files.

## Step 3: Start Development Server

```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

## Making Adjustments

### To change colors:
Edit `src/design-tokens.js` or the CSS variables in `src/index.css`

### To modify spacing:
Update values in `src/design-tokens.js` under the `spacing` object

### To adjust typography:
Modify font styles in `src/design-tokens.js` under the `typography` object

### To edit components:
- Main screen: `src/components/InfiniteScroll.jsx`
- Top bar: `src/components/TopView.jsx`
- Menu items: `src/components/MenuItems.jsx`
- Categories: `src/components/categories/`

All changes will hot-reload automatically in the browser!

## Project Structure

```
figma-menu-screen/
├── fonts/                    # ← Place your font files here
├── src/
│   ├── components/          # All React components
│   ├── design-tokens.js     # All design tokens
│   └── index.css            # Global styles & fonts
└── package.json
```

## Need Help?

See `README.md` for detailed documentation and `DESIGN_TOKENS.md` for all available design tokens.

