export const pxToRem = (px) => {
  const rootValue = 16
  const rem = (1 / rootValue) * px + 'rem'
  return rem
}

export const font = {}

export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  bold: '600',
  heavy: '700',
}

export const color = {
  brand: '#fffC66',
  body: '#fff',
  grey: {
    100: '#e8e7ec',
    200: '#a1aab3',
    300: '#76848f',
    400: '#b3b3b3',
    800: '#252525',
  },
  white: {
    100: '#ffffff',
  },
  black: {
    100: '#171616',
  },
}

export const borderRadius = {
  small: '4px',
  medium: '8px',
}

export const shadow = {}

export const gradient = {
  greyBlack: `linear-gradient(90deg, rgba(51,50,59,1) 0%, rgba(0,0,0,1) 25%);`,
  blackGrey: `linear-gradient(90deg, rgba(0,0,0,1) 75%, rgba(51,50,59,1) 100%);`,
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
