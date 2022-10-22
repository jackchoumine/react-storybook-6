/*
 * @Description :
 * @Date        : 2022-10-22 05:06:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 07:11:23 +0800
 * @LastEditors : JackChou
 */
import React from 'react'
import { Button } from '@chakra-ui/react'
// import { actions, action } from '@storybook/addon-actions'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    colorScheme: { control: 'color' },
    // onClick: { action: 'click' },
  },
}

const Template = args => <Button {...args} />

export const ColorButton = Template.bind()
ColorButton.args = {
  colorScheme: 'red',
  children: 'Button',
  // FIXME 设置环境变量无效 process.env.STORYBOOK_THEME, process.env.STORYBOOK_COLOR
  onClick: () => console.log('onClick'),
  // NOTE 事件
  // onClick: action('onClick'),
  // ...actions('onClick', 'onMouseOver'),
}

// export const ActionsButton = Template.bind()
// ActionsButton.args = {
//   colorScheme: 'red',
//   children: 'Button',
// }
