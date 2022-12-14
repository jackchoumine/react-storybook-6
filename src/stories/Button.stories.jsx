import React from 'react'
// import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
//@ts-ignore
import Center from './Center'

function centerDecorator(story) {
  return <Center>{story()}</Center>
}
// NOTE
// 默认导出二级才菜单 Button  Form 为一级菜单
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [centerDecorator],
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => (
  <Center>
    <Button {...args} />
  </Center>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}
// NOTE 菜单重命名
Primary.storyName = 'primary button'
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
