import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#E5E5E5',
      '400': '#737380',
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
