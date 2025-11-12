/**
 * Design Tokens extracted from Figma
 * Generated from Figma variables
 */

export const colors = {
  // Primary colors
  primary: {
    'burnt-orange': '#f25600',
  },
  
  // Secondary colors
  secondary: {
    'ada-teal': '#01847e',
  },
  
  // Utility colors
  utility: {
    white: '#ffffff',
    'nola-dark': '#1f1f1f',
    'nola-light': '#f5f1ef',
    'grey-1': '#595959',
  },
  
  // Opacity variants
  opacity: {
    'nola-dark-10': 'rgba(31, 31, 31, 0.1)',
    'nola-dark-75': 'rgba(31, 31, 31, 0.75)',
  },
};

export const spacing = {
  'p-1': '2px',
  'p-2': '4px',
  'p-3': '8px',
  'p-4': '12px',
  'p-5': '16px',
  'p-7': '24px',
};

export const typography = {
  // Headline styles
  headlineSmall: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    fontStyle: 'normal',
  },
  headlineMedium: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
    fontStyle: 'normal',
  },
  
  // Title styles
  titleSmall: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '16px',
    fontStyle: 'normal',
  },
  titleMedium: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
    fontStyle: 'normal',
  },
  titleLarge: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    fontStyle: 'normal',
  },
  
  // Body styles
  bodySmall: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    fontStyle: 'normal',
  },
  bodyMedium: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    fontStyle: 'normal',
  },
  
  // Button styles
  buttonMedium: {
    fontFamily: 'ChickenSans, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
    fontStyle: 'normal',
  },
};

export const borderRadius = {
  'r-0': '0',
  'r-5': '20px',
  'r-7': '999px', // Full circle
};

export const borders = {
  width: {
    '1px': '1px',
  },
};

// CSS custom properties for use in CSS files
export const cssVariables = {
  '--color-primary-burnt-orange': colors.primary['burnt-orange'],
  '--color-secondary-ada-teal': colors.secondary['ada-teal'],
  '--color-utility-white': colors.utility.white,
  '--color-utility-nola-dark': colors.utility['nola-dark'],
  '--color-utility-nola-light': colors.utility['nola-light'],
  '--color-utility-grey-1': colors.utility['grey-1'],
  '--color-opacity-nola-dark-10': colors.opacity['nola-dark-10'],
  '--color-opacity-nola-dark-75': colors.opacity['nola-dark-75'],
  
  '--spacing-p-1': spacing['p-1'],
  '--spacing-p-2': spacing['p-2'],
  '--spacing-p-3': spacing['p-3'],
  '--spacing-p-4': spacing['p-4'],
  '--spacing-p-5': spacing['p-5'],
  '--spacing-p-7': spacing['p-7'],
  
  '--radius-r-0': borderRadius['r-0'],
  '--radius-r-5': borderRadius['r-5'],
  '--radius-r-7': borderRadius['r-7'],
  
  '--border-width-1px': borders.width['1px'],
};

