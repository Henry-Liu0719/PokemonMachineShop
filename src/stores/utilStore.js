import { defineStore } from 'pinia'
// import axios from 'axios'
// const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('counter', {
  state: () => ({
    favoriteList: []
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
    },
    // 加入收藏
    addToFavorites (product) {
      // 从 localStorage 获取收藏列表，如果不存在则创建一个空数组
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []

      // 检查该产品是否已经在收藏列表中
      const existingProductIndex = favorites.findIndex(item => item.id === product.id)

      if (existingProductIndex === -1) {
        // 如果产品不在收藏列表中，则将其添加到列表中
        favorites.push(product)
        // 将更新后的收藏列表保存到 localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    },

    // 从收藏中移除
    removeFromFavorites (productId) {
      // 从 localStorage 获取收藏列表
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []

      // 过滤掉 ID 不匹配的产品，即从收藏列表中移除指定的产品
      favorites = favorites.filter(item => item.id !== productId)

      // 更新 localStorage 中的收藏列表
      localStorage.setItem('favorites', JSON.stringify(favorites))
    },

    // 获取收藏列表
    getFavorites () {
      // 从 localStorage 获取收藏列表
      return JSON.parse(localStorage.getItem('favorites')) || []
    }
  }
})
