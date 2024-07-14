import type { Meta, StoryObj } from '@storybook/react'

import { App } from './app'

export default {
  title: 'App',
  component: App,
} as Meta<typeof App>

export const Default: StoryObj<typeof App> = {}
