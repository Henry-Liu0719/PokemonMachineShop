<template>
<div class="container">
  <loadingOverlay :active="isCartsLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="mt-3">
    <h3 class="mt-3 mb-4">購物車</h3>
    <div class="row">
      <div class="col-md-8">
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
            <template v-for="cart in carts.carts" :key="cart.id">
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                  <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}} {{cart.product.unit}}</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px;">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" @click="cart.qty--;updateCart(cart,cart.qty)">
                        <i class="bi bi-dash"></i>
                      </button>
                    </div>
                    <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="cart.qty" readonly>
                    <div class="input-group-append">
                      <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2" @click="cart.qty++;updateCart(cart,cart.qty)">
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT${{cart.total}}</p></td>
                <td class="border-0 align-middle"><i class="bi bi-x" @click="deleteCart(cart.id)"></i></td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="input-group w-50 mb-3">
          <input type="text" class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none" placeholder="輸入優惠券gopopov即享50%折價" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="couponCode">
          <div class="input-group-append">
            <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0" type="button" id="button-addon2" @click="postCoupon(couponCode)" :disabled="couponCode === ''"><i class="bi bi-send"></i></button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <h4 class="fw-bold mb-4">訂單詳情</h4>
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
            <p class="mb-0 h4 fw-bold">Total</p>
            <p class="mb-0 h4 fw-bold">NT${{ carts.final_total }}</p>
          </div>
          <router-link to="checkout" class="btn btn-dark w-100 mt-4" :class="{disabled : !carts?.carts?.length}">送出訂單</router-link>
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
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env
// import { defineStore } from 'pinia'
export default {
  data () {
    return {
      productId: '',
      num: 1,
      couponCode: ''
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'deleteCart', 'updateCart']),
    postCoupon (code) {
      this.isUpdating = true
      const data = {
        data: {
          code: `${code}`
        }
      }
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/coupon`, data)
        .then((res) => {
          // console.log(res)
          this.getCart()
          Swal.fire({
            title: '使用優惠券成功',
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            showCancelButton: false
          })
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.response.data.message}`,
            showConfirmButton: false,
            timer: 1000
          })
          console.dir(error)
        })
        .finally(() => {
          this.isUpdating = false
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'isCartsLoading'])
  },
  watch: {
    num () {
      this.num = this.num < 1 ? 1 : this.num
    }
  }
}
</script>
