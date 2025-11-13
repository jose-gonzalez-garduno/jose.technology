/**
 * THE BLUEPRINT DESIGN SYSTEM
 * A design system embodying Clarity, Trust, and Editorial precision
 * Inspired by Loom and Intercom, harmonized with Jose Technology Solutions branding
 */

export const DesignTokens = {
  /**
   * COLOR PALETTE
   * Primary: Cyan from logo - represents innovation, technology, clarity
   * Neutrals: Clean grays for professional, readable content
   * Accents: Supporting colors for states and emphasis
   */
  colors: {
    // Primary Brand Colors (from logo)
    primary: {
      cyan: '#00A8E8',      // Logo cyan - innovation, technology
      dark: '#2D2D2D',      // Logo dark - stability, professionalism
      light: '#33B9F5',     // Lighter cyan for hover states
      deep: '#0087BE',      // Deeper cyan for active states
    },
    
    // Neutrals - Blueprint Palette
    neutral: {
      50: '#F8FAFB',        // Backgrounds, cards
      100: '#F1F4F6',       // Subtle backgrounds
      200: '#E4E9ED',       // Borders, dividers
      300: '#D1D9E0',       // Disabled states
      400: '#99A7B5',       // Secondary text
      500: '#6B7A8A',       // Body text
      600: '#4A5865',       // Headings
      700: '#2D3843',       // Dark text
      800: '#1A2129',       // Darkest text
      900: '#0D1117',       // Pure dark
    },
    
    // Semantic Colors
    success: '#10B981',     // Green - confirmations, success states
    warning: '#F59E0B',     // Amber - warnings, caution
    error: '#EF4444',       // Red - errors, destructive actions
    info: '#3B82F6',        // Blue - informational messages
    
    // Background System
    background: {
      primary: '#FFFFFF',   // Main background
      secondary: '#F8FAFB', // Alternate sections
      tertiary: '#F1F4F6',  // Cards, panels
      dark: '#0D1117',      // Dark mode/sections
    },
  },

  /**
   * TYPOGRAPHY
   * System: Inter for clarity and professionalism
   * Hierarchy: Clear scale for editorial feel
   */
  typography: {
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Courier New", monospace',
    },
    
    // Type Scale (Major Third - 1.25)
    scale: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    
    // Font Weights
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    
    // Line Heights
    leading: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    
    // Letter Spacing
    tracking: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  /**
   * SPACING SYSTEM
   * 8pt Grid System - consistent, predictable spacing
   * Inspired by Loom's generous whitespace
   */
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  /**
   * LAYOUT GRID
   * Max widths for different content types
   */
  layout: {
    container: '1280px',    // Main container max-width
    content: '768px',       // Long-form content (blog posts)
    narrow: '640px',        // Forms, focused content
    wide: '1440px',         // Full-width sections
  },

  /**
   * BORDER RADIUS
   * Subtle, modern rounding
   */
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',   // Pills/circles
  },

  /**
   * SHADOWS
   * Elevation system for depth
   */
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  /**
   * MOTION PRINCIPLES
   * Subtle, purposeful animations
   */
  motion: {
    // Easing functions
    easing: {
      standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    },
    
    // Duration
    duration: {
      instant: '100ms',
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
      slower: '600ms',
    },
  },

  /**
   * BREAKPOINTS
   * Responsive design breakpoints
   */
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Export individual token groups for convenient imports
export const { colors, typography, spacing, layout, radius, shadows, motion, breakpoints } = DesignTokens;
