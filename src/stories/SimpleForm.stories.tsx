/*
 * @Description : story 组合
 * @Date        : 2022-10-22 03:46:07 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 04:16:21 +0800
 * @LastEditors : JackChou
 */
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
