import { defineStore } from 'pinia'
// import axios from 'axios'
// const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('counter', {
  state: () => ({
  }),
  actions: {
    copyTextToClipboard (text) {
      // 创建一个临时的textarea元素
      const textarea = document.createElement('textarea')
      // 设置textarea的值为要复制的文本
      textarea.value = text
      // 将textarea添加到DOM中
      document.body.appendChild(textarea)
      // 选中textarea中的文本
      textarea.select()
      try {
        // 执行复制命令
        // eslint-disable-next-line no-unused-vars
        const successful = document.execCommand('copy')
        // const message = successful ? '複製成功' : '複製失敗'
        // console.log(message)
      } catch (err) {
        // console.error('複製失敗:', err)
      } finally {
        // 移除临时textarea元素
        document.body.removeChild(textarea)
      }
    }
  }
})
