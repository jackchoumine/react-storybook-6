/*
 * @Description :
 * @Date        : 2022-10-20 04:06:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 04:22:01 +0800
 * @LastEditors : JackChou
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const TextInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
  type: 'text',
}

export const DateInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateInput.args = {
  title: 'DateInput',
  type: 'date',
}
DateInput.storyName = '日期选择器'

export const PasswordInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordInput.args = {
  ...DateInput.args,
  type: 'password',
}
PasswordInput.storyName = '密码输入'
