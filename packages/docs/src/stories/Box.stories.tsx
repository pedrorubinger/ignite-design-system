import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@phr-ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
