# react storybook 学习

## story

### 菜单和导出之间的关系

```ts
export default {
  title: 'Form/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}
// NOTE 菜单重命名
Primary.storyName = 'primary button'
```

以`/`为分割，`title`的第一个字符串，作为一级菜单，往往可作为分组使用。第二个字符串，作为**组件**的菜单。

**命名导出**作为组件菜单下的菜单，可通过`storyName`属性重命名。

### 参数

story 有一些参数，这些参数对应 react 的 props。

```ts
const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const TextInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
  type: 'text',
}

export const PasswordInput = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PasswordInput.args = {
  ...DateInput.args,
  type: 'password',
}
```

参数之间可组合使用，就和 js 对象一样。

> 事件如何处理？

### story 组合

组件可组合，形成更加复杂的组件，story 也可组合。

把 `Input.stories` 和 `Primary.stories` 组合成一个简单表单。

```tsx
import React from 'react'
import { Primary as PrimaryButton } from './Button.stories'
import { TextInput } from './Input.stories'

export default {
  title: '组合story/SimpleForm',
}

export const SimpleForm = () => {
  return (
    <>
      <TextInput title='组合story' value='组合' />
      <PrimaryButton label='提交' />
    </>
  )
}
```

### 菜单的排序

在`.storybook/preview.cjs`下，添加

```js
{
  // 添加 options
  options: {
    storySort: (a, b) => {
      return a.title === b.title ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
    },
  },
}
```

> 还是没生效。

[详情信息](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort)

### 装饰器

```tsx
import Center from './Center'
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
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => (
  <Center>
    <Button {...args} />
  </Center>
)
```

所有 Button 都居中了，Center 像 CSS 一样装饰了 Button。

Story 的装饰器，也是类似的作用。

在默认导出添加装饰器选项：

```js
function centerDecorator(story) {
  return <Center>{story()}</Center>
}

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [centerDecorator],
}
```

和在**所有 story**上添加嵌套 Center 组件一样的效果。

在默认导出上使用的装饰器作用于组件的 story，希望在所有 story 都应用，能办到吗？

> 全局装饰器

修改`.storybook/preview.js` 为 `.storybook/preview.jsx`，

添加全局装饰器

```jsx
import React from 'react'

import { addDecorator } from '@storybook/react'
import Center from '../src/stories/Center'

function centerDecorator(story) {
  return <Center>{story()}</Center>
}

addDecorator(centerDecorator)
```

[storybook 装饰器](https://storybook.js.org/docs/react/writing-stories/decorators)

使用全局装饰器提供主题。

安装依赖：

```sh
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

使用一个按钮：

`ChakraButton.stories.jsx`

```jsx
import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Chakra/Button',
  component: Button,
}

export const BlueButton = () => <Button colorScheme='blue'>Button</Button>
```

这样使用按钮样式不生效，根据文档，需要样式 Provider，通过全局装饰器提供。

修改`.storybook/preview.jsx`

```jsx
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
```

## 插件

storybook 通过插件来扩展其功能。

安装依赖后，在`.storybook/main.js` 里添加插件。

[storybook 插件](https://storybook.js.org/docs/react/configure/storybook-addons)

## 遇到的问题

> 部署后不显示 control 面板

按`A`显示/隐藏，按`D`切换位置。

[Controls is not visible/shown in canvas/addons (only in docs)](https://github.com/storybookjs/storybook/issues/12481#issuecomment-874968558)

> 部署到 github project pages 后，js 404。

使用`gh-pages`部署到 project page，会向 github user page 寻找脚本，导致 404。

`github user page`是我的博客地址。

1. 推荐的解决方案 -- 修改静态资源引入路径

`.storybook/main.cjs` 添加 viteFinal：

```js
module.exports = {
  //FIXME more info
  // https://github.com/storybookjs/storybook/issues/1291#issuecomment-1147754699
  viteFinal: (config, { configType }) => {
    // console.log(config)
    // some configs
    if (configType === 'PRODUCTION') {
      config.base = './'
    }
    return config
  },
}
```

2. 比较麻烦的解决方案

每次部署，在执行博客部署脚本，把打包输出的资源移动到博客项目，再部署个人博客。

> 在 stories 中引入 chakra-ui 的 Button 组件后，侧边栏显示 chakra-ui 的 story。

还不知道原因。

可能的解决办法：

[What I've learned using Chakra-Ui so far](https://dev.to/carlosrafael22/what-i-ve-learned-with-chakra-ui-so-far-4f5e)

[Chakra UI and Storybook](https://ashwin.hashnode.dev/chakra-ui-and-storybook)

## 参考

[nice a list videos on youtube](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk)
