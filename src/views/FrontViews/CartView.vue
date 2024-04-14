<template>
<div class="container">
  <loadingOverlay :active="isCartsLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="mt-3 fs-4">
    <h3 class="mt-3 mb-4 fs-1">購物車</h3>
    <div class="p-0 container d-flex" v-if="!(carts.carts?.length)">
      <h4 class="my-auto">購物車無商品</h4>
      <RouterLink class="btn btn-danger rounded w-auto mx-2 mb-2" to="products">
        <div class="my-auto">前往產品列表</div>
      </RouterLink>
    </div>
    <div class="row" v-if="carts.carts?.length">
      <div class="col-12 col-xl-9">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="border-0 bg-light ps-0 col-4 col-xl-5">品名</th>
              <th scope="col" class="border-0 bg-light">數量</th>
              <th scope="col" class="border-0 bg-light col-3 col-lg-2">單價</th>
              <th scope="col" class="border-0 bg-light col-3 col-lg-2">小計</th>
              <th scope="col" class="border-0 bg-light col-1"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="cart in carts.carts" :key="cart.id">
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 bg-light px-0 font-weight-normal py-4">
                <RouterLink :to="{ path: 'product', query: { id: cart.product.id }}">
                  <img :src="cart.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                  <p class="mb-0 fw-bold ms-3 d-inline-block">{{cart.product.title}} {{cart.product.unit}}</p>
                </RouterLink>
                </th>
                <td class="border-0 bg-light align-middle" style="max-width: 160px;">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-0" type="button" id="button-addon1" @click="cart.qty--;updateCart(cart,cart.qty)">
                        <i class="bi bi-dash"></i>
                      </button>
                    </div>
                    <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="cart.qty" readonly>
                    <div class="input-group-append">
                      <button class="btn btn-outline-dark border-0" type="button" id="button-addon2" @click="cart.qty++;updateCart(cart,cart.qty)">
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 bg-light align-middle"><p class="mb-0 ms-auto">NT${{cart.product.price?.toLocaleString()}}</p></td>
                <td class="border-0 bg-light align-middle"><p class="mb-0 ms-auto">NT${{cart.total?.toLocaleString()}}</p></td>
                <td class="border-0 bg-light align-middle"><i class="bi bi-x" @click="deleteCart(cart.id)"></i></td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="input-group mb-3 d-flex justify-content-between">
          <div class="input-group-append d-flex flex-grow-1">
            <input type="text" class="form-control w-75 border-primary" placeholder="輸入優惠券popovgo即享50%折價" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="couponCode">
            <button class="btn border-bottom border-top-0 border-start-0 border-end-0 btn-outline-primary rounded d-inline-block ms-1" type="button" id="button-addon2" @click="postCoupon(couponCode)" :disabled="couponCode === ''"><i :class="{'bi bi-send-check-fill':couponCode != '','bi bi-send':couponCode === ''}"></i></button>
          </div>
          <div class="text-end d-inline-block">
            <button
              class="btn btn-outline-danger"
              type="button"
              @click="deleteCarts()"
              :disabled="isCartsLoading"
            >
              清空購物車
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-3">
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
            <p class="mb-0 h4 fw-bold">商品數量</p>
            <p class="mb-0 h4 fw-bold">{{ carts.carts.length }}</p>
          </div>
          <div class="d-flex justify-content-between mt-4" v-if="carts.final_total != carts.total">
            <p class="mb-0 h4 fw-bold">優惠折扣</p>
            <p class="mb-0 h4 fw-bold">{{ Math.floor((carts.final_total / carts.total)*100) }} %</p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總額</p>
            <p class="mb-0 h4 fw-bold">NT${{ Math.floor(carts.final_total)?.toLocaleString() }}</p>
          </div>
          <RouterLink to="checkout" class="btn btn-primary w-100 mt-4 fs-4" :class="{disabled : !carts?.carts?.length}">送出訂單</RouterLink>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h3 class="my-3">查看更多商品</h3>
      <div class="vl-parent">
        <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid opacity-0" v-if="!products?.products">
        <loadingOverlay :active="isProductsLoading" :is-full-page="false" v-if="!isCartsLoading">
          <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
        </loadingOverlay>
      </div>
      <div class="row">
        <div class="col-12 col-md-3 col-lg-2" v-for="product in products.products" :key="product.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <RouterLink :to="{ path: 'product', query: { id: product.id }}">
              <img :src="product.imageUrl" class="card-img-top object-fit-contain position-relative rounded border border-1 border-secondary" alt="product.description" style="width: 100%;">
            </RouterLink>
              <!-- {{ favorites.some(item => item.id === product.id) }} -->
            <!-- <btn type="button" href="#" class="text-dark" @click="addToFavorites(product)">
              <i class="far fa-heart position-absolute z-1" style="right: 16px; top: 16px"></i>
            </btn> -->
            <div class="card-body p-0 bg-light">
              <RouterLink :to="{ path: 'product', query: { id: product.id }}" style="text-decoration: none;">
                <h4 class="mb-0 mt-3">{{ product.content }} {{ product.unit }}</h4>
                </RouterLink>
              <p class="card-text mb-0">NT${{ product.price?.toLocaleString() }} <span class="text-muted "><del v-if="product.price != product.origin_price">NT${{ product.origin_price?.toLocaleString() }}</del></span></p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
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
import productStore from '@/stores/productStore.js'
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
    this.getProducts()
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'deleteCart', 'updateCart', 'deleteCarts']),
    ...mapActions(productStore, ['openModal', 'addToCart', 'getProducts', 'filterType', 'getAllProducts']),
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
    ...mapState(cartStore, ['carts', 'isCartsLoading']),
    ...mapState(productStore, ['products', 'isProductsLoading', 'allProducts'])
  },
  watch: {
    num () {
      this.num = this.num < 1 ? 1 : this.num
    }
  }
}
</script>
