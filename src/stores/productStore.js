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
      // console.log('isProductsLoading', this.isProductsLoading)
      this.isProductsLoading = true
      try {
        const res = await axios
          .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        // console.log(res.data)
        // console.log('isProductsLoading', this.isProductsLoading)
        this.allProducts = res.data
        // console.log(selector)
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '讀取所有產品失敗，請聯繫管理員',
          showConfirmButton: false,
          timer: 1000
        })
        console.dir(error)
      } finally {
        this.isProductsLoading = false
      }
    },
    async getProducts (page = '', yOffset = false, category = '') {
      this.isProductsLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          // console.log(res.data)
          this.products = res.data
          if (yOffset !== false) {
            window.scrollTo({ top: yOffset, behavior: 'smooth' })
          }
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '讀取產品清單失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
        }).finally(() => {
          this.isProductsLoading = false
        })
    },
    async getProduct (id) {
      this.isProductLoading = true
      try {
        const res = await axios
          .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        // console.log(res.data.product)
        this.product = res.data.product
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '讀取單一產品失敗，請聯繫管理員',
          showConfirmButton: false,
          timer: 1000
        })
        console.dir(error)
      } finally {
        this.isProductLoading = false
      }
    }
  }
})
