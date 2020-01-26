import { css } from 'styled-components'

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF'
}

export const color = {
  // Palette
  red: '#F8291E',
  turquoise: '#51E1EF',
  yellow: '#FFBA00',
  black: '#000000',
  white: '#FFFFFF',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00'
}

export const spacing = {
  padding: {
    small: 8,
    medium: 16,
    large: 32
  },
  borderRadius: {
    small: 5,
    default: 10
  }
}

export const typography = {
  type: {
    primary: '"Source Sans Pro", sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    light: '300',
    regular: '400',
    semibold: '600',
    bold: '700'
  },
  size: {
    s1: '.75rem',
    s2: '.875rem',
    s3: '1rem',
    m1: '1.25rem',
    m2: '1.5rem',
    m3: '1.75rem',
    l1: '2rem',
    l2: '2.5rem',
    l3: '3rem',
    code: '90'
  }
}

export const breakpoint = 600
export const pageMargin = '5.55555'

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;

  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }

  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }

  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`
