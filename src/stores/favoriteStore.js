import { defineStore } from 'pinia'

export default defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    // 加入收藏
    addToFavorites (product) {
      // 从 localStorage 获取收藏列表，如果不存在则创建一个空数组
      // console.log('addToFavorites')
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []

      // 检查该产品是否已经在收藏列表中
      const existingProductIndex = favorites.findIndex(item => item.id === product.id)

      if (existingProductIndex === -1) {
        // 如果产品不在收藏列表中，则将其添加到列表中
        favorites.push(product)
        // 将更新后的收藏列表保存到 localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
      this.getFavorites()
    },

    // 从收藏中移除
    removeFromFavorites (productId) {
      // 从 localStorage 获取收藏列表
      // console.log('removeFromFavorites')
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []

      // 过滤掉 ID 不匹配的产品，即从收藏列表中移除指定的产品
      favorites = favorites.filter(item => item.id !== productId)

      // 更新 localStorage 中的收藏列表
      localStorage.setItem('favorites', JSON.stringify(favorites))
      this.getFavorites()
    },

    // 获取收藏列表
    getFavorites () {
      // 从 localStorage 获取收藏列表
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    }

  }
})
