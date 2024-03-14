import axios from 'axios'
import { defineStore } from 'pinia'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('product', {
  state: () => ({
    products: [],
    carts: {},
    tempProduct: {},
    productModal: null,
    isLoading: true,
    isUpdating: true,
    isCartAdded: false,
    cartAddedMessage: '',
    qty: 1,
    orderData: {
      data: {
        user: {
          name: 'test',
          email: 'test@gmail.com',
          tel: '0912346768',
          address: 'kaohsiung'
        },
        message: '這是留言'
      }
    }
  }),
  actions: {
    openModal (product) {
      this.tempProduct = product
      this.$refs.userModal.open()
    },
    addToCart (id, value = 1) {
      const data = {
        data: {
          product_id: id,
          qty: Number(value)
        }
      }
      // console.log(data);
      this.isUpdating = true
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, data)
        .then((res) => {
          console.log(res)
          this.isUpdating = false
          this.cartAddedMessage = `${res.data.data.product.title}加入購物車成功。`
          this.isCartAdded = true
          setTimeout(() => {
            this.isCartAdded = false
          }, 3000)
          this.$refs.userModal.close()
          // this.getCarts();
        })
        .catch((error) => {
          console.dir(error)
        })
    },
    async getAllProducts (page = 1, yOffset = false, category = '') {
      //
      // try {
      //   const res = await axios.get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}`)
      //   // console.log(res)
      //   this.products = res.data
      //   console.log('res.data', res.data)
      //   this.isLoading = false
      //   this.isUpdating = false
      //   if (selector) {
      //     // selector.scrollIntoView({ behavior: 'smooth' })
      //     window.scrollTo({ top: selector, behavior: 'smooth' })
      //   }
      // } catch (err) {
      //   console.dir(err)
      // }
      //
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          console.log(res.data)
          this.isLoading = false
          this.isUpdating = false
          this.products = res.data
          // console.log(selector)
          if (yOffset) {
            // selector.scrollIntoView({ behavior: 'smooth' })
            window.scrollTo({ top: yOffset, behavior: 'smooth' })
          }
        })
        .catch((error) => {
          console.dir(error)
        })
    }
  }
})
