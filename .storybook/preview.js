import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router';
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../src/styles/theme'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#E5E5E5',
      },
    ],
  },
}

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra, withNextRouter]


