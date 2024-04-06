<template>
<div class="container mt-md-5 mt-3 mb-7 d-flex justify-content-center align-items-center" style="height: 45vh;">
  <div class="">
    <h2>無此頁面，點擊上方導覽列前往其他頁面吧!</h2>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import Swal from 'sweetalert2'

import cartStore from '@/stores/cartStore'
import utilStore from '@/stores/utilStore'
// import { defineStore } from 'pinia'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      orderData: {
        // data: {
        //   user: {
        //     name: '',
        //     email: '',
        //     tel: '',
        //     address: ''
        //   },
        //   message: ''
        // },
        data: {
          user: {
            name: 'testName',
            email: 'test@gmail.com',
            tel: '0912346768',
            address: 'Kaohsiung'
          },
          message: '這是留言'
        }
      }
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(utilStore, ['copyTextToClipboard']),
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    postOrder () {
      const data = { ...this.orderData }
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: `請確認以下資訊\nEmail：${data.data.user.email}\n姓名：${data.data.user.name}\n電話：${data.data.user.tel}\n地址：${data.data.user.address}`,
        text: '點擊送出後將完成交易',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '完成交易',
        cancelButtonText: '回到結帳頁面',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`${VITE_URL}/api/${VITE_PATH}/order`, data)
            .then((res) => {
              // res.data = {
              //   success: true,
              //   message: '已建立訂單',
              //   total: 100,
              //   create_at: 1523539519,
              //   orderId: '-L9tH8jxVb2Ka_DYPwng'
              // }
              // console.log(res)
              // 复制文本到剪贴板的方法
              this.copyTextToClipboard(res.data.orderId)
              let timerInterval
              Swal.fire({
                title: `${res.data.message}\n訂單編號：${res.data.orderId}\n自動複製到剪貼簿`,
                html: '<b></b>秒後回到產品列表',
                timer: 3000,
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
                this.$router.push('/products')
              })
            })
            .catch((error) => {
              console.dir(error)
              Swal.fire({
                position: 'top-end',
                icon: 'false',
                title: '送出訂單失敗，請聯繫管理員',
                showConfirmButton: false,
                timer: 1000
              })
            })
          // console.log(data)
        } else if (
        /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: '訂單資料未送出',
            icon: 'warning'
          })
        }
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  watch: {
  }
}
</script>
