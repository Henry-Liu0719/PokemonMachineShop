<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<nav class="navbar navbar-expand navbar-light text-white p-4 border-bottom border-black border-3 mb-0 mb-lg-7 position-relative relative1 h-100" style="background-color: #FB0404;">
<!-- <nav class="navbar navbar-expand-lg navbar-light"> -->
  <div class="bg-white position-absolute top-100 start-50 border border-3 border-black z-1" style="transform: translate(-50%, -50%);width: 5rem;height: 5rem;border-radius: 100%;"></div>
  <!-- <div class="col-2" style="height:2rem"> -->
    <router-link class="nav-item nav-link me-4 active" to="/">
      <span class="m-2"><strong>回首頁</strong></span>
      <!-- <img src="/src/assets/pokemonBall.png" style="" class="img-fluid" alt="" srcset=""> -->
    </router-link>
    <v-field type="text" class="form-control w-25" id="ContactMail" aria-describedby="emailHelp" placeholder="搜尋招式名稱、內容" name="email" required></v-field>
  <!-- </div> -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end col-4" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link me-1 text-white m-1" to="products"><span><strong>產品列表</strong></span></router-link>
      <router-link class="nav-item nav-link me-1 text-white m-1" to="searchOrder"><span><strong>訂單查詢</strong></span></router-link>
      <!-- <router-link class="nav-item nav-link me-1 text-white m-1" to=""><span><strong>寶可夢列表(開發中)</strong></span></router-link> -->
      <!-- <router-link class="nav-item nav-link me-1 text-white m-1" to="cart"><span><i class="bi bi-cart2"></i></span></router-link> -->
      <router-link class="nav-item nav-link me-1 text-white m-1" to="cart"><span><i class="bi bi-cart2"></i><span class="badge text-bg-secondary">{{ carts.carts?.length }}</span></span></router-link>
    </div>
  </div>
</nav>
  <router-view></router-view>
  <div class="bg-light py-4">
    <div class="container">
      <!-- <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <!-- <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
        </ul>
      </div> -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
        <div class="mb-md-0 mb-1 col-2">
          <router-link class="nav-item nav-link me-4 active m-2" to="/">
            <!-- <img src="/src/assets/pokemonBall.png" style="width:5%" alt="" srcset=""> -->
            <span><strong>回首頁</strong></span>
          </router-link>
          <router-link class="nav-item nav-link me-4 text-white m-2" to="products"><span><strong>產品列表</strong></span></router-link>
        </div>
        <div class="mb-md-0 mb-1 col-5">
          <!-- <p class="mb-0">02-3456-7890</p> -->
          <p class="mb-0">hugnminliu@gmail.com</p>
          <p class="mb-0">本網站僅供個人作品使用，不提供任何商業用途</p>
          <p class="mb-0">2024 All Rights Reserved. | made by 貢波波夫</p>
        </div>
        <div class="mb-md-0 mb-1 col-5">
          <div class="col-md3" style="width:10%">
            <img src="/src/assets/Pikachu.png" alt="" class="img-fluid">
          </div>
        </div>
        <!-- <p class="mb-0">© 2020 LOGO All Rights Reserved.</p> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cartStore'
export default {
  data () {
  },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  }
}
</script>
