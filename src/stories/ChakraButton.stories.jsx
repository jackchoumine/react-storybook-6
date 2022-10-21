/*
 * @Description :
 * @Date        : 2022-10-22 05:06:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 05:52:15 +0800
 * @LastEditors : JackChou
 */
import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    colorScheme: { control: 'color' },
    onClick: { action: 'click' },
  },
}

const Template = args => <Button {...args} />
export const ColorButton = Template.bind()
ColorButton.args = {
  colorScheme: 'red',
  children: 'Button',
}
