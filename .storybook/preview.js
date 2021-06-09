import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router';
import {addDecorator} from '@storybook/react'
import {ChakraProvider} from '@chakra-ui/react'

import theme from '../src/styles/theme'

export const parameters = {
  layout: 'fullscreen',

};

export const decorators = [withNextRouter()]

addDecorator(storyFn => (
  <ChakraProvider resetCSS theme={theme}>
    {storyFn()}
  </ChakraProvider>
))
