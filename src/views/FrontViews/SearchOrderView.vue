<template>
<div class="container mt-md-5 mt-3 mb-7">
  <loadingOverlay :active="isOrderLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="col-md-10">
    <label for="orderId" class="mb-0 form-label">
      <h3 class="fw-bold mb-4 pt-3">查詢訂單</h3>
    </label>
  </div>
  <div class="mt-0">
    <v-form v-slot="{ errors }">
      <div class="mb-0">
        <v-field type="email" class="form-control" id="orderId" aria-describedby="emailHelp" placeholder="輸入訂單號碼，為「-」開頭的20碼英文數字" name="訂單號碼" :class="{ 'is-invalid': errors['訂單號碼'] }" :rules="minLength" v-model="this.orderId"></v-field>
        <error-message
          name="訂單號碼"
          class="invalid-feedback"
        ></error-message>
        <span>訂單號碼範例: -Nu7z07B4SbgJwRufeFo</span>
      </div>
      <button type="button" class="btn btn-dark mt-4 p-2 px-4" @click="getOrder(this.orderId)" :disabled="this.orderId ==='' || Object.keys(errors).length > 0">送出查詢</button>
    </v-form>
    <div class="row mt-3 flex-row-reverse" v-if="!(Object.keys(order)?.length === 0)">
      <div class="col-lg-8 col-sm-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="border-0 ps-0">品名</th>
              <th scope="col" class="border-0">數量</th>
              <th scope="col" class="border-0">單價</th>
              <th scope="col" class="border-0"></th>
            </tr>
          </thead>
          <tbody>
            <!-- {{carts}} -->
            <template v-for="cart in carts" :key="cart.id">
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                  <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}} {{cart.product.unit}}</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px;">
                  <div class="input-group pe-5">
                    <!-- <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div> -->
                    <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" :value="cart.qty" readonly>
                    <!-- <div class="input-group-append">
                      <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div> -->
                  </div>
                </td>
                <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT${{cart.total}}</p></td>
                <!-- <td class="border-0 align-middle"><i class="bi bi-x" @click="deleteCart(cart.id)"></i></td> -->
              </tr>
            </template>
          </tbody>
        </table>
        <!-- <div class="input-group w-50 mb-3">
          <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2"><i class="fas fa-paper-plane"></i></button>
          </div>
        </div> -->
      </div>
      <div class="col-lg-4 col-sm-6">
        <div class="border p-4 mb-4">
          <h3 class="fw-bold mb-4">訂單詳情</h3>
          <!-- <table class="table text-muted border-bottom">
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
            <p class="mb-0 h4 fw-bold me-1">訂單日期</p>
            <p class="mb-0 h4 fw-bold" :class="{'d-none':Object.keys(order).length == 0}">{{ new Date(order?.create_at * 1000).toLocaleString() }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">訂單金額</p>
            <p class="mb-0 h4 fw-bold" :class="{'d-none':Object.keys(order).length == 0}">NT${{ order?.total }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">完成付款</p>
            <p class="mb-0 h4 fw-bold" :class="{'d-none':Object.keys(order).length == 0}">{{ order?.is_paid?'是':'否' }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">收件人</p>
            <p class="mb-0 h4 fw-bold">{{ order?.user?.name }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">電話</p>
            <p class="mb-0 h4 fw-bold">{{ order?.user?.tel }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">地址</p>
            <p class="mb-0 h4 fw-bold">{{ order?.user?.address }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">Email</p>
            <p class="mb-0 h4 fw-bold">{{ order?.user?.email }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold me-1">備註</p>
            <p class="mb-0 h4 fw-bold">{{ order?.message }}</p>
          </div>
          <!-- <router-link to="checkout" class="btn btn-dark w-100 mt-4" :class="{disabled : !carts?.carts?.length}">送出訂單</router-link> -->
        </div>
      </div>
    </div>
    <!-- <div class="my-5">
      <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">NT$1,080 <span class="text-muted "><del>NT$1,200</del></span></p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      orderId: '',
      carts: {},
      order: {},
      isOrderLoading: false
    }
  },
  mounted () {
  },
  methods: {
    minLength (value) {
      // 定义正则表达式，用于匹配以 '-' 开头的订单号码
      const regex = /^-/
      if (!regex.test(value)) {
        return '訂單號碼為「-」開頭'
      }
      // 检查订单号码的长度是否为20个字符，并且以 '-' 开头
      return value.length === 20 ? true : '訂單號碼長度為20碼'
    },
    getOrder (id) {
      this.isOrderLoading = true
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/order/${id}`)
        .then((res) => {
          // console.log(res)
          if (res.data.order) {
            this.order = res.data.order
            this.carts = this.order.products
          } else {
            Swal.fire({
              icon: 'warning',
              title: '查無該筆訂單',
              showConfirmButton: false,
              timer: 1000
            })
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: 'false',
            title: '讀取產品失敗，請聯繫管理員',
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
        })
        .finally(() => {
          this.isOrderLoading = false
        })
    }
  },
  computed: {
  }
}
</script>
