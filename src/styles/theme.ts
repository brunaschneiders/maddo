import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      '50': '#E5E5E5',
      '400': '#737380',
      '600': '#4f4f57',
      '800': '#35353D'
    },
    orange: { '50': '#EDDFE2', '100': '#F4BFC9', '500': '#FF4916' },
    pink: { '500': '#FE25B0' }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800'
      }
    }
  }
})
