import React from 'react'

import { addDecorator, addParameters } from '@storybook/react'
import Center from '../src/stories/Center'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// 1. import `ChakraProvider` component
import { ChakraProvider, CSSReset, theme, Box } from '@chakra-ui/react'

function chakraProvider(story) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {<Box m='8'>{story()}</Box>}
    </ChakraProvider>
  )
}
function centerDecorator(story) {
  return <Center>{story()}</Center>
}

addDecorator(chakraProvider)
addDecorator(centerDecorator)
addDecorator((story, context) => withConsole()(story)(context))
// FIXME 废弃
// addDecorator(withA11y)

addParameters({
  a11y: {},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // FIXME 排序不生效
  options: {
    storySort: (a, b) => {
      return 1 //a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
    },
  },
}
