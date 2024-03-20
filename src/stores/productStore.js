import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('product', {
  state: () => ({
    products: [],
    allProducts: [],
    product: {},
    carts: {},
    tempProduct: {},
    productModal: null,
    isProductsLoading: true,
    isProductLoading: true,
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
    async getAllProducts () {
      this.isProductsLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          console.log(res.data)
          this.isProductsLoading = false
          // this.isUpdating = false
          this.allProducts = res.data
          // console.log(selector)
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '讀取產品失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isProductsLoading = false
        })
    },
    async getProducts (page = '', yOffset = false, category = '') {
      this.isProductsLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          // console.log(res.data)
          this.isProductsLoading = false
          // this.isUpdating = false
          this.products = res.data
          // console.log(selector)
          if (yOffset !== false) {
            window.scrollTo({ top: yOffset, behavior: 'smooth' })
          }
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '讀取產品失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isProductsLoading = false
        })
    },
    getProduct (id) {
      this.isProductLoading = true
      // console.log(id)
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          // console.log(res)
          this.product = res.data.product
          this.isProductLoading = false
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '讀取產品失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isProductLoading = false
        })
    }
  }
})
