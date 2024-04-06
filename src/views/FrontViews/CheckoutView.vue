<template>
<div class="container mt-md-5 mt-3 mb-7">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <!-- <a class="navbar-brand" href="./index.html">Navbar</a> -->
        <ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
          <li class="me-md-6 me-3 position-relative custom-step-line"><i class="bi bi-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">瀏覽產品</span></li>
          <li class="me-md-6 me-3 position-relative custom-step-line"><i class="bi bi-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">加入購物車</span></li>
          <li><i class="bi bi-dot d-md-inline d-block text-center"></i> <span class="text-nowrap">送出訂單</span></li>
        </ul>

      </nav>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h3 class="fw-bold mb-4 pt-3">填寫資料</h3>
    </div>
  </div>
  <div class="row flex-row-reverse justify-content-center pb-5">
    <div class="col-md-4">
      <div class="border p-4 mb-4">
        <div class="d-flex" v-for="cart in carts.carts" :key="cart.id">
          <img :src="cart.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
          <div class="w-100">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{cart.product.title}} {{cart.product.unit}}</p>
              <p class="mb-0">NT${{cart.total}}</p>
            </div>
            <p class="mb-0 fw-bold">x{{cart.qty}}</p>
          </div>
        </div>
        <!-- <div class="d-flex mt-2">
          <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
          <div class="w-100">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">Lorem ipsum</p>
              <p class="mb-0">NT$12,000</p>
            </div>
            <p class="mb-0 fw-bold">x1</p>
          </div>
        </div> -->
        <!-- <table class="table mt-4 border-top border-bottom text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
              <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
            </tr>
            <tr>
              <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
              <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
            </tr>
          </tbody>
        </table> -->
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 fw-bold">Total</p>
          <p class="mb-0 h4 fw-bold">NT${{ carts.final_total }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <v-form v-slot="{ errors }">
        <p>聯絡資訊</p>
        <div class="mb-0">
          <label for="ContactMail" class="text-muted mb-0 form-label">Email</label>
          <v-field type="email" class="form-control" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com" name="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required" v-model="orderData.data.user.email"></v-field>
          <error-message
            name="email"
            class="invalid-feedback"
          ></error-message>
        </div>
        <p class="mt-4">送件資訊</p>
        <div class="mb-2">
          <label for="ContactName" class="text-muted mb-0">姓名</label>
          <v-field type="text" class="form-control" id="ContactName"  placeholder="Carmen A. Rose"
          name="姓名"
          :class="{ 'is-invalid': errors['姓名'] }"
          rules="required" v-model="orderData.data.user.name"></v-field>
        <error-message
          name="姓名"
          class="invalid-feedback"
        ></error-message>
        </div>
        <div class="mb-2">
          <label for="ContactPhone" class="text-muted mb-0">電話</label>
          <v-field type="tel" class="form-control" id="ContactPhone" placeholder="ContactPhone" name="電話" :class="{ 'is-invalid': errors['電話'] }" :rules="isPhone" v-model="orderData.data.user.tel"></v-field>
          <error-message
            name="電話"
            class="invalid-feedback"
          ></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="orderData.data.user.address"
          ></v-field>
          <error-message
            name="地址"
            class="invalid-feedback"
          ></error-message>
        </div>
        <div class="mb-2">
          <label for="ContactMessage" class="text-muted mb-0">備註</label>
          <textarea class="form-control" rows="3" id="ContactMessage" placeholder="message ... " v-model="orderData.data.message"></textarea>
        </div>
        <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
          <router-link to="products" class="text-dark mt-md-0 mt-3"><i class="fas fa-chevron-left me-2"></i> 回到產品頁</router-link>
          <button type="button" class="btn btn-dark py-3 px-7" @click="postOrder()" :disabled="Object.keys(errors).length > 0">完成訂單</button>
        </div>
      </v-form>
    </div>
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
