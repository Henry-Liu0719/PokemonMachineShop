<template>
<div class="container">
  <loadingOverlay :active="isPokemonLoading" :is-full-page="true">
    <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid">
  </loadingOverlay>

  <div class="row align-items-center">
    <div class="col-12 col-md-5 col-xl-4">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="autoplayConfig"
        :pagination="paginationConfig"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in imagesUrl" :key="item">
          <img :src="item" class="d-block w-100" alt="">
          <!-- <div>
          </div> -->
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-12 col-md-6 col-xl-4 row ms-3">
      <nav aria-label="breadcrumb" class="col-12">
        <ol class="breadcrumb bg-white px-0 mb-0 py-3">
          <li class="breadcrumb-item"><a class="text-muted" href="./index.html">首頁</a></li>
          <!-- <li class="breadcrumb-item"><router-link class="text-muted" to="pokemons">寶可夢列表</router-link></li> -->
          <li class="breadcrumb-item active" aria-current="page">{{$route.query.pokemonName}} </li>
        </ol>
      </nav>
      <div class="col-6">
        <h2 class="fw-bold h1 mb-1">{{$route.query.pokemonName}}</h2>
        <span v-for="type in pokemon.types" :key="type.slot" class="btn btn-dark w-50 py-2 border-0" :style="{'background-color':typeColorList[type.type.name]}">{{ typeNameList[type.type.name] }}</span>

      </div>
      <div class="col-6">
        <!-- <p class="mb-0 text-muted /*text-end*/"><del>NT${{pokemon?.name}}</del></p> -->
        <p class="h4 fw-bold /*text-end*/">圖鑑編號：<br>{{ pokemon?.id }}</p>
        <p class="h4 fw-bold /*text-end*/">身高：<br>{{ pokemon?.height /10 }}  公尺</p>
        <p class="h4 fw-bold /*text-end*/">體重：<br>{{ pokemon?.weight/10 }}  公斤</p>
        <!-- <p class="h4 fw-bold /*text-end*/">：{{ pokemon?.name }}</p> -->
      </div>
      <div class="row align-items-center">
        <div class="col-6">
        </div>
      </div>
    </div>
    <div class="col-12 col-xl-3">
      <p class="text-muted"> {{ pokemon.description }} </p>
    </div>
  </div>
  <!-- <div class="row my-5">
    <div class="col-md-4">
      <p>{{ pokemon?.name }}</p>
    </div>
    <div class="col-md-3">
      <p class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
    </div>
  </div> -->
  <div class="row mt-5 vl-parent">
      <h3>該寶可夢可學習的招式機清單</h3>
        <!-- <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid w-auto opacity-0" v-if="isProductsLoading"> -->
        <loadingOverlay :active="isProductsLoading" :is-full-page="true">
        <img src="/src/assets/Animation - 1710557059960.gif" alt="" class="img-fluid">
      </loadingOverlay>
      <div class="col-12 col-sm-4 col-md-3 col-lg-2 mt-md-4" v-for="product in learnedMachines" :key="product.id">
        <div class="card border-0 mb-4">
          <router-link :to="{ path: 'product', query: { id: product.id }}">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded-100 rounded border border-1 border-secondary"
            alt="pokemon.name"
          />
          </router-link>
          <div class="card-body text-center">
            <router-link :to="{ path: 'pokemon', query: { id: pokemon.id }}" class=" page-link text-primary">
              <h4>{{ product.unit }}</h4>
            </router-link>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                {{ product.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
import axios from 'axios'
import Swal from 'sweetalert2'
import { mapActions, mapState } from 'pinia'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// import { defineStore } from 'pinia'
// import cartStore from '../../stores/cartStore'
import productStore from '../../stores/productStore'
import pokemonStore from '../../stores/pokemonStore'

const { VITE_POKEMON_API } = import.meta.env
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      modules: [Autoplay, Pagination, Navigation],
      autoplayConfig: {
        delay: 1000,
        disableOnInteraction: false
      },
      paginationConfig: {
        clickable: true
      },
      shuffledProducts: [],
      pokemon: {},
      imagesUrl: [],
      learnedMachines: [],
      isPokemonLoading: true
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    // ...mapState(cartStore, ['isUpdating']),
    ...mapState(productStore, ['isProductsLoading', 'allProducts']),
    ...mapState(pokemonStore, ['typeNameList', 'typeColorList'])
  },
  watch: {
    // product () {
    // }
  },
  methods: {
    // ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productStore, ['getAllProducts', 'isProductLoading']),
    ...mapActions(pokemonStore, ['exportTypeNamesList', 'createTypeColorList']),
    async init () {
      this.createTypeColorList()
      await this.getAllProducts()
      this.exportTypeNamesList()
      await this.getPokemon()
      this.getLearnedMachines()
    },
    async getPokemon () {
      this.isPokemonLoading = true

      try {
        const res = await axios.get(`${VITE_POKEMON_API}/pokemon/${this.$route.query.id}`)
        this.isPokemonLoading = false
        console.log(res.data)
        this.pokemon = res.data

        this.imagesUrl.push(res.data.sprites.front_default)
        this.imagesUrl.push(res.data.sprites.back_default)
        this.imagesUrl.push(res.data.sprites.front_female)
        this.imagesUrl.push(res.data.sprites.back_female)
        this.imagesUrl.push(res.data.sprites.front_shiny)
        this.imagesUrl.push(res.data.sprites.back_shiny)
        this.imagesUrl.push(res.data.sprites.front_shiny_female)
        this.imagesUrl.push(res.data.sprites.back_shiny_female)
        this.imagesUrl = this.imagesUrl.filter(item => item)

        const descriptionResponse = await axios.get(`${VITE_POKEMON_API}/pokemon-species/${this.$route.query.id}`)
        console.log(descriptionResponse)
        this.pokemon.description = descriptionResponse.data.flavor_text_entries[0].flavor_text
        descriptionResponse.data.flavor_text_entries.forEach(item => {
          if (item.language.name === 'zh-Hant') {
            this.pokemon.description = item.flavor_text
          }
        })

        // this.imagesUrl = Object.values(res.data.sprites).filter(item => typeof (item) === 'string')
        // const arr = [
        //   this.imagesUrl[2],
        //   this.imagesUrl[0],
        //   this.imagesUrl[3],
        //   this.imagesUrl[1]
        // ]
        // this.imagesUrl = [...arr]

        // console.log(this.imagesUrl)

      // const keys = [...Object.keys(res.data.sprites)]
      // keys.sort((a, b) => {
      //   if (a.includes('front') && !b.includes('front')) {
      //     return -1 // 将包含 "front" 的元素排在前面
      //   } else if (!a.includes('front') && b.includes('front')) {
      //     return 1 // 将包含 "front" 的元素排在后面
      //   } else {
      //     return 0 // 其他情况保持不变
      //   }
      // })
      // const otherKeys = []
      // Object.keys(res.data.sprites.other).forEach(item => otherKeys.push(item))
      // console.log(keys)
      // console.log(otherKeys)
      // const images = []
      // keys.forEach(item => {
      //   images.push(res.data.sprites[item])
      // })
      // console.log(images)
      } catch (err) {
        console.dir(err)
        Swal.fire({
          // position: 'top-end',
          icon: 'false',
          title: '讀取寶可夢失敗，請聯繫管理員',
          showConfirmButton: false,
          timer: 1000
        })
        this.isPokemonLoading = false
      }
    },
    getLearnedMachines () {
      this.learnedMachines = []
      this.allProducts.products.forEach(item => {
        item.pokemons?.forEach(element => {
          if (element.name === this.$route.query.pokemonName) {
            this.learnedMachines.push(item)
            console.log(1)
          }
        })
      })
      console.log(this.learnedMachines)
    }

  }

}
</script>
