export const pxToRem = (px) => {
  const rootValue = 16
  const rem = (1 / rootValue) * px + 'rem'
  return rem
}

export const font = {}

// TODO: Update fontWeight to use 100: '100' etc
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
    100: '#fff',
  },
  black: {
    100: '#000',
  },
}

export const borderRadius = {
  small: '4px',
  medium: '8px',
}

export const shadow = {
  yellowOuter: `0 0 20px rgba(255, 255, 0, .5), 0 0 20px rgba(255, 255, 0, .5);`,
  yellowInner: `5px 10px 20px 5px rgba(255, 255, 0, .5) inset;`,
}

export const gradient = {
  greyBlack: `linear-gradient(90deg, rgba(69,69,69,1) 0%, rgba(12,12,12,1) 15%, rgba(0,0,0,1) 85%, rgba(69,69,69,1) 100%);`,
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
