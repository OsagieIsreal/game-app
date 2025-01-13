
import { css } from 'styled-components'


export const windowSize = {
  xs: 360,
  sm: 480, // for mobile screen
  md: 768, // for tablets
  lt: 1114, // for large tablets
  lg: 1024, // for laptops
  xl: 1440, // for desktop / monitors
  xxl: 1920, // for big screens
}
export const screenSize = {
  xs: '360px', // for small screen mobile
  sm: '480px', // for mobile screen
  md: '768px', // for tablets
  lt: '1114px', // for large tablets
  lg: '1024px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const minDevice = {
  xs: `(min-width: ${screenSize.xs})`,
  sm: `(min-width: ${screenSize.sm})`,
  md: `(min-width: ${screenSize.md})`,
  lt: `(min-width: ${screenSize.lt})`,
  lg: `(min-width: ${screenSize.lg})`,
  xl: `(min-width: ${screenSize.xl})`,
  xxl: `(min-width: ${screenSize.xxl})`,
}



export const maxDevice = {
  xs: `(max-width: ${screenSize.xs})`,
  sm: `(max-width: ${screenSize.sm})`,
  md: `(max-width: ${screenSize.md})`,
  lt: `(max-width: ${screenSize.lt})`,
  lg: `(max-width: ${screenSize.lg})`,
  xl: `(max-width: ${screenSize.xl})`,
  xxl: `(max-width: ${screenSize.xxl})`,
}

const createMediaQuery = (type: 'min' | 'max') => (size: keyof typeof screenSize) => (...args: Parameters<typeof css>) => css`
  @media (${type}-width: ${screenSize[size]}) {
    ${css(...args)};
  }
`

export const media = {
  xs: createMediaQuery('max')('xs'),
  sm: createMediaQuery('max')('sm'),
  md: createMediaQuery('max')('md'),
  lt: createMediaQuery('max')('lt'),
  lg: createMediaQuery('max')('lg'),
  xl: createMediaQuery('max')('xl'),
  xxl: createMediaQuery('max')('xxl'),
}

export const minMedia = {
  xs: createMediaQuery('min')('xs'),
  sm: createMediaQuery('min')('sm'),
  md: createMediaQuery('min')('md'),
  lt: createMediaQuery('min')('lt'),
  lg: createMediaQuery('min')('lg'),
  xl: createMediaQuery('min')('xl'),
  xxl: createMediaQuery('min')('xxl'),
}