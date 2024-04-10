import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import { debounce } from 'lodash'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => ({
    carts: {},
    isCartsLoading: true,
    isUpdating: false
  }),
  actions: {
    getCart () {
      this.isCartsLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data
          // console.log('🚀 ~ .then ~ this.carts:', this.carts)
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
        })
        .finally(() => {
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
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, data)
        .then((res) => {
          // console.log(res)
          this.getCart()
          Swal.fire({
            title: '加入購物車成功',
            position: 'center-end',
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
        })
        .finally(() => {
          this.isUpdating = false
        })
    },
    deleteCart (id) {
      this.isCartsLoading = true
      this.isUpdating = true
      axios
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          // console.log(res)
          Swal.fire({
            title: '從購物車移除成功',
            icon: 'success',
            timer: 500,
            showConfirmButton: false,
            showCancelButton: false
          })
          this.getCart()
        })
        .catch((error) => {
          Swal.fire({
            icon: 'false',
            title: '刪除失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
        })
        .finally(() => {
          this.isCartsLoading = false
          this.isUpdating = false
        })
    },
    deleteCarts () {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-outline-danger me-4'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: '是否要清除購物車?',
        text: '點擊送出後將清除購物車',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '清除購物車',
        cancelButtonText: '取消操作',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.isCartsLoading = true
          axios
            .delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
            // .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
            .then((res) => {
              let timerInterval
              Swal.fire({
                title: '購物車已清除',
                html: '<b></b>秒後回到產品列表',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading()
                  const timer = Swal.getPopup().querySelector('b')
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`
                  }, 100)
                },
                willClose: () => {
                  clearInterval(timerInterval)
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  // console.log('I was closed by the timer')
                }
              }).then(() => {
                // console.log(this.$router)
                // this.$router.push('/products')
                window.location.href = '/#/products'
              })
            })
            .catch((error) => {
              console.dir(error)
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: '清除購物車失敗，請聯繫管理員',
                showConfirmButton: false,
                timer: 1000
              })
            }).finally(() => {
              this.isCartsLoading = false
            })
          // console.log(data)
        } else if (
        /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: '購物車未清除',
            icon: 'warning'
          })
        }
      })
    },
    updateCart: debounce(function (cart, qty) {
      this.isUpdating = true
      const data = {
        data: {
          product_id: cart.product_id,
          qty: Number(qty)
        }
      }
      // console.log(data)
      axios
        .put(`${VITE_URL}/api/${VITE_PATH}/cart/${cart.id}`, data)
        .then((res) => {
          // console.log(res);
          this.getCart()
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'false',
            title: '修改購物車失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
        })
        .finally(() => {
          this.isUpdating = false
        })
    }, 400)
  }
})
