<template>
<div class="container">
  <loadingOverlay :active="isProductLoading" :is-full-page="true">
    <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid">
  </loadingOverlay>
  <div class="row align-items-center">
    <div class="col-md-7">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="product.imageUrl" class="d-block w-50" alt="">
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
          </div>
        </div>
        <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> -->
      </div>
    </div>
    <div class="col-md-5 vl-parent">
      <loadingOverlay :active="isUpdating" :is-full-page="false">
        <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid">
      </loadingOverlay>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-0 py-3">
          <li class="breadcrumb-item"><a class="text-muted" href="./index.html">首頁</a></li>
          <li class="breadcrumb-item"><router-link class="text-muted" to="products">產品列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{product.title}} {{product.unit}}</li>
        </ol>
      </nav>
      <h2 class="fw-bold h1 mb-1">{{product.unit}}</h2>
      <p class="mb-0 text-muted text-end"><del>NT${{product.origin_price}}</del></p>
      <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
      <div class="row align-items-center">
        <div class="col-6">
          <div class="input-group my-3 bg-light rounded">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                <i class="bi bi-dash" @click="num--"></i>
              </button>
            </div>
            <input type="number" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="num" min="0" readonly>
            <div class="input-group-append">
              <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                <i class="bi bi-plus" @click="num++"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-6">
          <a @click="addToCart(product.id, num)" class="text-nowrap btn btn-dark w-100 py-2">加到購物車</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row my-5">
    <div class="col-md-4">
      <p>{{ product.description }}</p>
    </div>
    <!-- <div class="col-md-3">
      <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
    </div> -->
  </div>
  <!-- <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
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
  </div> -->
</div>
</template>
<script>
// import axios from 'axios'
// import Swal from 'sweetalert2'
import { mapActions, mapState } from 'pinia'

import cartStore from '../../stores/cartStore'
import productStore from '../../stores/productStore'

// import { defineStore } from 'pinia'
// const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      productId: '',
      num: 1
    }
  },
  mounted () {
    // console.log(this.$route)
    // 通过 $route.params 获取路由参数
    this.productId = this.$route.query.id
    this.getProduct(this.$route.query.id)
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productStore, ['getProduct'])

  },
  computed: {
    ...mapState(cartStore, ['isUpdating']),
    ...mapState(productStore, ['isProductLoading', 'product'])
  },
  watch: {
    num () {
      this.num = this.num < 1 ? 1 : this.num
    }
  }
}
</script>
