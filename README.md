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

## 参考
