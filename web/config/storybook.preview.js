import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import theme from 'src/theme'

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
