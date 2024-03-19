import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => ({
    carts: {},
    isCartsLoading: true,
    isUpdating: false
  }),
  actions: {
    getCart () {
      // console.log(id)
      this.isCartsLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          console.log(res)
          this.carts = res.data.data
          this.isCartsLoading = false
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '讀取購物車失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isCartsLoading = false
        })
    },
    addToCart (id, num) {
      this.isUpdating = true
      const data = {
        data: {
          product_id: `${id}`,
          qty: num
        }
      }
      // console.log(id)
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, data)
        .then((res) => {
          // console.log(res)
          this.isUpdating = false
          Swal.fire({
            title: '加入購物車成功',
            position: 'center-end',
            // text: "You clicked the button!",
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            showCancelButton: false
          })
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '加入購物車失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isUpdating = false
        })
    },
    deleteCart (id) {
      this.isCartsLoading = true
      // console.log(id)
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          // console.log(res)
          // this.isUpdating = false
          Swal.fire({
            title: '刪除成功',
            // position: 'top-end',
            // text: "You clicked the button!",
            icon: 'success',
            timer: 500,
            showConfirmButton: false,
            showCancelButton: false
          })
          this.getCart()
        })
        .catch((error) => {
          Swal.fire({
            // position: 'top-end',
            icon: 'false',
            title: '刪除失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
          this.isCartsLoading = false
        })
    }
  }
})
