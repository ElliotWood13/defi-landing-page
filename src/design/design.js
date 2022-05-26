export const pxToRem = (px: number) => {
  const rootValue = 16
  const rem = (1 / rootValue) * px + 'rem'
  return rem
}

export const font = {
  brand: "'Lato', sans-serif",
  body: "'Quicksand', sans-serif",
}

export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  bold: '700',
}

export const color = {
  grey: {
    100: '#e8e7ec',
    200: '#a1aab3',
    300: '#76848f',
    400: '#686680',
    800: '#252525',
  },
  white: {
    100: '#ffffff',
  },
}

export const borderRadius = {
  small: '4px',
  medium: '8px',
}

export const shadow = {}

export const gradient = {
  whitePurple: `linear-gradient(87.29deg,#ebebeccc 17.71%, #803ef61a 80.85%)`,
}

export const breakpoint = {
  xxxs: { min: 375 },
  xxs: { min: 425 },
  xs: { min: 599 },
  sm: { min: 768 },
  md: { min: 1024 },
  lg: { min: 1440 },
}

export const mediaQuery = {
  xxxs: `@media screen and (min-width: ${breakpoint.xxxs.min}px)`,
  xxs: `@media screen and (min-width: ${breakpoint.xxs.min}px)`,
  xs: `@media screen and (min-width: ${breakpoint.xs.min}px)`,
  sm: `@media screen and (min-width: ${breakpoint.sm.min}px)`,
  md: `@media screen and (min-width: ${breakpoint.md.min}px)`,
  lg: `@media screen and (min-width: ${breakpoint.lg.min}px)`,
}

export const layout = {
  regular: '1200px',
}

export const fontSize = {
  title: {
    sm: `${pxToRem(32)}`,
    lg: `${pxToRem(40)}`,
  },
}
