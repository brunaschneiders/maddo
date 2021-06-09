import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header, HeaderProps } from '../components'

export default {
  title: 'Components/Header',
  component: Header
} as Meta

export const Template: Story<HeaderProps> = (args) => <Header {...args} />
