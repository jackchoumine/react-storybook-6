var l=Object.defineProperty;var n=(t,a)=>l(t,"name",{value:a,configurable:!0});import{B as r}from"./Button.6ab2c55e.js";import{j as s}from"./jsx-runtime.8145e7b8.js";import"./iframe.e032b5f8.js";const u={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// NOTE
// \u9ED8\u8BA4\u5BFC\u51FA\u4E8C\u7EA7\u624D\u83DC\u5355 Button  Form \u4E3A\u4E00\u7EA7\u83DC\u5355
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}
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
`,locationsMap:{primary:{startLoc:{col:48,line:19},endLoc:{col:76,line:19},startBody:{col:48,line:19},endBody:{col:76,line:19}},secondary:{startLoc:{col:48,line:19},endLoc:{col:76,line:19},startBody:{col:48,line:19},endBody:{col:76,line:19}},large:{startLoc:{col:48,line:19},endLoc:{col:76,line:19},startBody:{col:48,line:19},endBody:{col:76,line:19}},small:{startLoc:{col:48,line:19},endLoc:{col:76,line:19},startBody:{col:48,line:19},endBody:{col:76,line:19}}}}},title:"Form/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},o=n(t=>s(r,{...t}),"Template"),e=o.bind({});e.args={primary:!0,label:"Button"};e.storyName="primary button";const c=o.bind({});c.args={label:"Button"};const i=o.bind({});i.args={size:"large",label:"Button"};const m=o.bind({});m.args={size:"small",label:"Button"};const B=["Primary","Secondary","Large","Small"];export{i as Large,e as Primary,c as Secondary,m as Small,B as __namedExportsOrder,u as default};
//# sourceMappingURL=Button.stories.eb2e1b74.js.map
