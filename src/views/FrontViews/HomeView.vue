<template>
<body class=" bg-light mt-lg-6">
  <div class="position-relative bg-light">
    <!-- <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url('/src/assets/Gatcha.png');    background-position: center center; opacity: 0.2;"></div> -->
    <div class="container d-flex flex-column " style="min-height: 50vh;">
      <div class="row justify-content-center my-auto">
        <img src="/src/assets/Gotcha.png" alt="背景图像"
        style="/*width: 100%; height: 100%; */opacity: 0.15;" class="w-50">
        <div class="col-md-6 text-center position-absolute" style="z-index: 1">
          <h2>歡迎來到寶可夢招式機商店！</h2>
          <p class="text-muted mb-0">在我們的商店裡，你可以找到各種強大的寶可夢招式機，這些招式將幫助你的寶可夢在戰鬥中更加強大。無論是火、水、雷，還是其他屬性，我們都擁有最新、最強大的招式供你選擇。</p>
          <router-link class="btn btn-dark rounded-0 mt-6" to="products">瀏覽產品</router-link>
        </div>
      </div>
    </div>
  </div>
    <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <!-- <img src="https://w7.pngwing.com/pngs/957/958/png-transparent-free-type-pokemon.png" alt="" class="img-fluid"> -->
        <img src="/src/assets/pokemonAttributs.png" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 mx-auto text-center vl-parent">
        <h4 class="mt-4">根據屬性篩選</h4>
        <loadingOverlay :active="isAttributesLoading"
        :is-full-page="false"><img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid"></loadingOverlay>
        <!-- {{ typeNameList }} -->
        <button v-for="type in Object.entries(typeNameList)" :key="type[0]" class="m-2 py-2 d-inline btn btn-outline-primary" >

          <router-link :to="{ path: 'products', query: { category: type[1] }}" class="h4" style="text-decoration: none;">{{ type[1] }}</router-link>
        </button>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img src="/src/assets/pokemonBalls.png" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">搜尋最愛的寶可夢(開發中)</h4>
        <p class="text-muted">顯示基本資料、可學習招式機一覽</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5 vl-parent bg-light">
      <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid w-auto opacity-0" v-if="shuffledProducts?.length===0">
      <loadingOverlay :active="isProductLoading" :is-full-page="false">
      <!-- <loadingOverlay :active="true" :is-full-page="false"> -->
        <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid bg-light">
      </loadingOverlay>
      <div class="col-12 col-md-4 col-lg-2 mt-md-4" v-for="product in shuffledProducts" :key="product.id">
        <div class="card border-0 mb-4 bg-light">
          <router-link :to="{ path: 'product', query: { id: product.id }}">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded border border-1 border-secondary"
            :alt="product.description"
          />
          </router-link>
          <div class="card-body text-center bg-light">
            <h4><router-link :to="{ path: 'product', query: { id: product.id }}" style="text-decoration: none;">{{ product.content }} {{ product.unit }}</router-link></h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg-light mt-7">
    <div class="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>Lorem ipsum.</h3>
                <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                <p><small>—Lorem ipsum dolor sit amet.—</small></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>Lorem ipsum.</h3>
                <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                <p><small>—Lorem ipsum dolor sit amet.—</small></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>Lorem ipsum.</h3>
                <p class="my-5">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                <p><small>—Lorem ipsum dolor sit amet.—</small></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div> -->
  <swiper
    :spaceBetween="100"
    :centeredSlides="true"
    :autoplay="autoplayConfig"
    :pagination="paginationConfig"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="row justify-content-between mt-4 ms-6">
        <div class="col-md-6">
          <img src="/src/assets/Eves.png" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">多樣性</h4>
          <p class="text-muted">我們擁有各種各樣的寶可夢招式，涵蓋了所有屬性和戰鬥風格，無論你是喜歡攻擊、防守還是特殊技能，你都能找到適合你寶可夢的招式。</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row justify-content-between mt-4 ms-6">
        <div class="col-md-6">
          <img src="/src/assets/diffBalls.png" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">品質保證</h4>
          <p class="text-muted">我們的招式機經過嚴格的測試和品質控制，確保每一個招式的威力和可靠性都是最高水準的。你可以放心購買，讓你的寶可夢在戰鬥中保持領先優勢。</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="row justify-content-between mt-4 ms-6">
        <div class="col-md-6">
          <img src="/src/assets/trainers.png" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">專業服務</h4>
          <p class="text-muted">我們擁有專業的寶可夢訓練師團隊，隨時為你提供專業的建議和支持。無論是選擇適合你寶可夢的招式，還是戰鬥策略的制定，我們都會竭盡全力為你服務。</p>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide> -->
  </swiper>
</body>
</template>

<script>
import { mapActions, mapState } from 'pinia'

import pokemonStore from '../../stores/pokemonStore'
import productStore from '../../stores/productStore'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import './style.css'

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Autoplay, Pagination, Navigation],
      autoplayConfig: {
        delay: 5000,
        disableOnInteraction: true
      },
      paginationConfig: {
        clickable: true
      },
      shuffledProducts: []
    }
  },
  computed: {
    ...mapState(productStore, ['allProducts', 'isProductsLoading']),
    ...mapState(pokemonStore, ['typeNameList', 'isAttributesLoading'])
  },
  mounted () {
    this.exportTypeNamesList()
    this.getAllProducts()
  },
  methods: {
    ...mapActions(pokemonStore, ['exportTypeNamesList']),
    ...mapActions(productStore, ['getAllProducts'])
  },
  watch: {
    allProducts () {
      // this.isProductsLoading = true
      this.shuffledProducts = this.allProducts.products.slice().sort(() => 0.5 - Math.random()).slice(0, 6)
      // console.log(this.filterdProducts)
    }
  }
}
</script>
