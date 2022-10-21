/*
 * @Description :
 * @Date        : 2022-10-20 04:03:12 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 04:09:37 +0800
 * @LastEditors : JackChou
 */
import React, { useState, FormEventHandler, FormEvent } from 'react'
interface InputProps {
  backgroundColor?: string
  title: string
  // FIXME 如何出现单选
  // 联合类型出现单选
  value?: string
  type?: 'number' | 'date' | 'text' | 'password'
}

export const Input = (props: InputProps) => {
  const { title, type = 'text', backgroundColor, value = '' } = props
  const [_value, setValue] = useState(value)
  const onChange: FormEventHandler<HTMLInputElement> = ({
    target,
  }: FormEvent<HTMLInputElement>) => {
    setValue((target as HTMLInputElement).value)
  }
  return (
    <input
      value={_value}
      onInput={onChange}
      title={title}
      type={type}
      style={{ backgroundColor }}
    />
  )
}
