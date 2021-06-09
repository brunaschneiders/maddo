import React from 'react'
import {addDecorator} from '@storybook/react'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../src/styles/theme'

addDecorator(storyFn => (
  <ChakraProvider resetCSS theme={theme}>
    {storyFn()}
  </ChakraProvider>
))
