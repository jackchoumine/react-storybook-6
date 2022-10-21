/*
 * @Description :
 * @Date        : 2022-10-22 04:28:58 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-10-22 04:32:21 +0800
 * @LastEditors : JackChou
 */
import React from 'react' // rfce  导入函数组件

const style = { display: 'flex', justifyContent: 'center' }

function Center({ children }) {
  return <div style={style}>{children}</div>
}

export default Center
