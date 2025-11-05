/**
 * Docki Health App Design System
 * Professional color palette and design tokens for healthcare application
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    // Primary colors - Medical Blue
    primary: '#0EA5E9',
    primaryLight: '#7DD3FC',
    primaryDark: '#0284C7',

    // Secondary colors - Health Green
    secondary: '#10B981',
    secondaryLight: '#6EE7B7',
    secondaryDark: '#059669',

    // Accent colors
    accent: '#F59E0B',
    accentLight: '#FCD34D',
    accentDark: '#D97706',

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Neutral colors
    text: '#0F172A',
    textSecondary: '#64748B',
    textTertiary: '#94A3B8',

    background: '#FFFFFF',
    backgroundSecondary: '#F8FAFC',
    backgroundTertiary: '#F1F5F9',

    surface: '#FFFFFF',
    surfaceHover: '#F8FAFC',

    border: '#E2E8F0',
    borderLight: '#F1F5F9',

    icon: '#64748B',
    iconActive: '#0EA5E9',

    // Tab bar
    tabIconDefault: '#94A3B8',
    tabIconSelected: '#0EA5E9',
    tabBackground: '#FFFFFF',

    // Cards & Components
    card: '#FFFFFF',
    cardShadow: 'rgba(0, 0, 0, 0.08)',

    // Special healthcare colors
    doctor: '#8B5CF6',
    pharmacy: '#EC4899',
    lab: '#06B6D4',
    nutrition: '#F97316',
  },
  dark: {
    // Primary colors
    primary: '#0EA5E9',
    primaryLight: '#38BDF8',
    primaryDark: '#0284C7',

    // Secondary colors
    secondary: '#10B981',
    secondaryLight: '#34D399',
    secondaryDark: '#059669',

    // Accent colors
    accent: '#F59E0B',
    accentLight: '#FBBF24',
    accentDark: '#D97706',

    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Neutral colors
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',

    background: '#0F172A',
    backgroundSecondary: '#1E293B',
    backgroundTertiary: '#334155',

    surface: '#1E293B',
    surfaceHover: '#334155',

    border: '#334155',
    borderLight: '#475569',

    icon: '#94A3B8',
    iconActive: '#38BDF8',

    // Tab bar
    tabIconDefault: '#64748B',
    tabIconSelected: '#38BDF8',
    tabBackground: '#1E293B',

    // Cards & Components
    card: '#1E293B',
    cardShadow: 'rgba(0, 0, 0, 0.3)',

    // Special healthcare colors
    doctor: '#A78BFA',
    pharmacy: '#F472B6',
    lab: '#22D3EE',
    nutrition: '#FB923C',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400' as const,
    lineHeight: 28,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
};
