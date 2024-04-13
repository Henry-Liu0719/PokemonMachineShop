<template>
<div class="container">
</div>
<!-- <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
  <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
  <h2 class="fw-bold">神奇寶貝招式機百貨商店</h2>
</div> -->
<div class="container mt-md-5 mt-3 mb-7 mx-1">
  <loadingOverlay :active="isProductsLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="row">
    <div class="col-4 col-md-3">
      <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
        <div class="card border-0 mx-3">
          <div class="card-header px-0 py-4 bg-white border-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            <div class="">
              <h3 class="mb-0 text-center">
                屬性瀏覽
              </h3>
              <!-- <i class="fas fa-chevron-down"></i> -->
            </div>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="py-0">
              <ul class="list-group">
                <button type="button"  href="#" class="page-link fs-5" @click="typeSelected = '全部';this.$route.query.keyWord = '';isLoading = true;getProducts(1,yOffset,'')">
                  <li class="list-group-item py-2 px-2" :class="{'active':typeSelected == '全部'}">
                    瀏覽全部
                  </li>
                </button>
                <button type="button"  href="#" class="page-link fs-5" v-for="type in Object.entries(typeNameList)" :key="type[0]">
                  <li class="list-group-item py-2 px-2" :class="{'active':typeSelected == type[0]}" @click="this.typeSelected = type[0];this.$route.query.keyWord = '';isLoading = true;getProducts(1,yOffset,type[1])">
                    {{ type[1] }}

                  </li>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-8 col-md-9">
      <div class="row">
        <h4 class="opacity-0 mt-6"  :class="{'opacity-100':!filterdProducts.products?.length && !isProductsLoading}">無相符的查詢結果</h4>
        <h4 class="opacity-0 mt-6"  :class="{'opacity-100':$route.query.keyWord?.length}">「{{ $route.query.keyWord }}」的招式機配對結果</h4>
        <div class="col-12 col-md-4 col-lg-3" v-for="product in filterdProducts.products" :key="product.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <router-link :to="{ path: 'product', query: { id: product.id }}" class="vl-parent">
              <img :src="product.imageUrl" class="card-img-top object-fit-contain position-relative rounded border border-1 border-secondary" alt="product.description" style="width: 100%;">
              <loadingOverlay :active="isUpdating" :is-full-page="false">
                <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
              </loadingOverlay>
            </router-link>
              <!-- {{ favorites.some(item => item.id === product.id) }} -->
              <span>
                <button type="button" class="position-absolute top-0 start-0 badge bg-secondary border-0" style="width:3rem;height:1.5rem;border-radius:0.375rem 0;" @click.prevent="addToFavorites(product)" v-if="!favorites.some(item => item.id === product.id)">
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
                <button type="button" class="position-absolute top-0 start-0 badge bg-primary border-0" style="width:3rem;height:1.5rem;border-radius:0.375rem 0 ;" @click.prevent="removeFromFavorites(product.id)" v-else>
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
              </span>
              <span>
                <button type="button" class="position-absolute top-0 start-100 badge bg-secondary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="addToCart(product.id,1)" v-if="!carts.carts.some(item => item.product.id === product.id)">
                  <i class="bi bi-cart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
                <button type="button" class="position-absolute top-0 start-100 badge bg-primary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="deleteCart(carts.carts.filter(itme => itme.product_id == product.id)[0].id)" v-else>
                  <i class="bi bi-cart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
              </span>
            <!-- <btn type="button" href="#" class="text-dark" @click="addToFavorites(product)">
              <i class="far fa-heart position-absolute z-1" style="right: 16px; top: 16px"></i>
            </btn> -->
            <div class="card-body p-0">
              <router-link :to="{ path: 'product', query: { id: product.id }}" style="text-decoration: none;">
                <h4 class="mb-0 mt-3">{{ product.content }} {{ product.unit }}</h4>
                </router-link>
              <p class="card-text mb-0">NT${{ product.price?.toLocaleString() }} <span class="text-muted "><del v-if="product.price != product.origin_price">NT${{ product.origin_price?.toLocaleString() }}</del></span></p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
      <nav class="d-flex justify-content-center" v-if="!filterdProducts?.products?.length == 0">
        <ul class="pagination pagination-lg">
          <!-- <template v-for="index in products.pagination?.total_pages" :key="index">
          </template> -->
          <li class="page-item">
            <button type="button"  class="page-link" aria-label="Previous" :class="{disabled:!filterdProducts?.pagination?.has_pre}" @click="getProducts(products.pagination.current_page-1,yOffset)">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item" :class="{active:filterdProducts.pagination.current_page == index}" v-for="index in filterdProducts.pagination?.total_pages" :key="index" ><button class="page-link" @click="getProducts(index,yOffset)">{{ index }}</button></li>
          <!-- {{ products.pagination }} -->
          <li class="page-item">
            <button type="button"  class="page-link" aria-label="Next" :class="{disabled:!filterdProducts?.pagination?.has_next}" @click="getProducts(products.pagination.current_page+1,yOffset)">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/productStore.js'
import pokemonStore from '@/stores/pokemonStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import cartStore from '@/stores/cartStore.js'

export default {
  data () {
    return {
      yOffset: 0,
      filterdProducts: {},
      searchedProducts: {},
      typeSelected: '全部'
    }
  },
  components: {
  },
  mounted () {
    // console.log(this.favorites)
    this.init()
    // console.log(this.filterdProducts)
    this.yOffset = document.querySelector('div.container.mt-md-5.mt-3.mb-7 > div > div.col-8 > div > h4').getBoundingClientRect().top + window.pageYOffset
  },
  computed: {
    ...mapState(productStore, ['products', 'isProductsLoading', 'allProducts']),
    ...mapState(pokemonStore, ['typeNameList']),
    ...mapState(favoriteStore, ['favorites']),
    ...mapState(cartStore, ['carts', 'isCartsLoading', 'isUpdating'])
  },
  watch: {
    async products () {
      this.filterdProducts = { ...this.products }
      // console.log(this.filterdProducts)
      // console.log(this.$route.query)
      if (this.$route.query.keyWord) {
        await this.getAllProducts()
      }
    },
    allProducts () {
      this.filterdProducts = { ...this.allProducts }
      this.createSearchedProducts()
    }
  },
  methods: {
    ...mapActions(productStore, ['openModal', 'addToCart', 'getProducts', 'filterType', 'getAllProducts']),
    ...mapActions(pokemonStore, ['exportTypeNamesList']),
    ...mapActions(favoriteStore, ['addToFavorites', 'removeFromFavorites', 'getFavorites']),
    ...mapActions(cartStore, ['getCart', 'addToCart', 'deleteCart']),
    async init () {
      this.getCart()
      const category = this.$route.query.category || ''
      // console.log(this.typeSelected)
      await this.getProducts(1, 0, category)
      this.exportTypeNamesList()
    },
    filterType (type = '岩石') {
      this.filterdProducts.products = this.products.products.filter(item => item.unit === type)
      // console.log('products', this.products)
      // console.log('filterdProducts', this.filterdProducts)
      window.scrollTo({ top: this.yOffset, behavior: 'smooth' })
      // console.log('filterdProducts', this.filterdProducts)
    },
    async createSearchedProducts () {
      const keyWord = this.$route.query.keyWord
      // console.log(keyWord)
      console.log('this.filterdProducts', this.filterdProducts)
      this.searchedProducts = {
        success: true,
        products: [],
        pagination: {
          total_pages: 1,
          current_page: 1,
          has_pre: false,
          has_next: false,
          category: ''
        },
        messages: []
      }
      this.searchedProducts.products = this.filterdProducts.products.filter(element => {
        return element.description.includes(keyWord) || element.unit.includes(keyWord) ||
        element.pokemons.some(item => item.name === keyWord)
      })
      console.log('this.searchedProducts', this.searchedProducts)
      this.filterdProducts = { ...this.searchedProducts }
      // console.log('this.filterdProducts', this.filterdProducts)
    }
  }
}
</script>
