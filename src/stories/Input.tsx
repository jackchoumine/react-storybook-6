/*
 * @Description :
 * @Date        : 2022-10-20 04:03:12 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-20 04:30:00 +0800
 * @LastEditors : JackChou
 */
interface InputProps {
  backgroundColor?: string
  title: string
  // FIXME 如何出现单选
  // 联合类型出现单选
  type?: 'number' | 'date' | 'text' | 'password'
}

export const Input = (props: InputProps) => {
  const { title, type = 'text', backgroundColor } = props
  return <input title={title} type={type} style={{ backgroundColor }} />
}
