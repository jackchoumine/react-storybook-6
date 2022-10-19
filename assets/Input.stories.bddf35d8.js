var l=Object.defineProperty;var e=(t,o)=>l(t,"name",{value:o,configurable:!0});import{j as r}from"./jsx-runtime.8145e7b8.js";import"./iframe.e032b5f8.js";const n=e(t=>{const{title:o,type:u="text",backgroundColor:i}=t;return r("input",{title:o,type:u,style:{backgroundColor:i}})},"Input");try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"date"'},{value:'"text"'},{value:'"password"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/stories/Input.tsx#Input"]={docgenInfo:n.__docgenInfo,name:"Input",path:"src/stories/Input.tsx#Input"})}catch{}const y={parameters:{storySource:{source:`/*
 * @Description :
 * @Date        : 2022-10-20 04:06:26 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-20 04:25:41 +0800
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

export const DateInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateInput.args = {
  title: 'Title',
  type: 'date',
}
DateInput.storyName = '\u65E5\u671F\u9009\u62E9\u5668'

export const PasswordInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordInput.args = {
  title: 'Title',
  type: 'password',
}
PasswordInput.storyName = '\u5BC6\u7801\u8F93\u5165'
`,locationsMap:{"date-input":{startLoc:{col:47,line:22},endLoc:{col:74,line:22},startBody:{col:47,line:22},endBody:{col:74,line:22}},"password-input":{startLoc:{col:47,line:22},endLoc:{col:74,line:22},startBody:{col:47,line:22},endBody:{col:74,line:22}}}}},title:"Form/Input",component:n,argTypes:{backgroundColor:{control:"color"}}},s=e(t=>r(n,{...t}),"Template"),a=s.bind({});a.args={title:"Title",type:"date"};a.storyName="\u65E5\u671F\u9009\u62E9\u5668";const p=s.bind({});p.args={title:"Title",type:"password"};p.storyName="\u5BC6\u7801\u8F93\u5165";const g=["DateInput","PasswordInput"];export{a as DateInput,p as PasswordInput,g as __namedExportsOrder,y as default};
//# sourceMappingURL=Input.stories.bddf35d8.js.map
