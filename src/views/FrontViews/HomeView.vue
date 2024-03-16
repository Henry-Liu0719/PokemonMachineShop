<template>
<body>
  <div class="position-relative">
    <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url('/src/assets/pngwing.png');
    background-position: center center; opacity: 0.2;"></div>
    <div class="container d-flex flex-column" style="min-height: 100vh;">

      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center" style="z-index: 1">
          <h2>歡迎來到寶可夢招式機商店！</h2>
          <p class="text-muted mb-0">在我們的商店裡，你可以找到各種強大的寶可夢招式機，這些招式將幫助你的寶可夢在戰鬥中更加強大。無論是火焰、水流、雷電，還是其他超能力，我們都擁有最新、最強大的招式供你選擇。</p>
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
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">根據屬性篩選</h4>
        <!-- {{ typeNameList }} -->
        <button type="button" v-for="type in Object.entries(typeNameList)" :key="type[0]" class="m-2 py-2 d-inline btn btn-outline-primary" @click="isLoading = true;getAllProducts(1,yOffset,type[1])">{{ type[1] }}</button>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img src="/src/assets/pokemonBalls.png" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">根據神奇寶貝搜尋(開發中)</h4>
        <p class="text-muted">輸入神奇寶貝的名稱立即搜尋</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4" v-for="product in shuffledProducts" :key="product.id">
        <div class="card border-0 mb-4">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>{{ product.unit }}</h4>
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

</body>
</template>

<script>
import { mapActions, mapState } from 'pinia'

import pokemonStore from '../../stores/pokemonStore'
import productStore from '../../stores/productStore'

export default {
  data () {
    return {
      shuffledProducts: []
    }
  },
  computed: {
    ...mapState(productStore, ['products']),
    ...mapState(pokemonStore, ['summarizedProductList', 'typeNameList'])
  },
  mounted () {
    this.summarizeProductList()
    this.getAllProducts()
    // this.exportTypeNamesList()
    // console.log('summarizedProductList', this.summarizedProductList)
    // console.log('typeNameList', this.typeNameList)
  },
  methods: {
    ...mapActions(pokemonStore, ['summarizeProductList', 'exportTypeNamesList']),
    ...mapActions(productStore, ['getAllProducts'])
  },
  watch: {
    products () {
      this.shuffledProducts = this.products.products.slice().sort(() => 0.5 - Math.random()).slice(0, 3)
      // console.log(this.filterdProducts)
    }
  }
}
</script>
