<template>
<div class="container">
</div>
<!-- <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
  <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
  <h2 class="fw-bold">神奇寶貝招式機百貨商店</h2>
</div> -->
<div class="container mt-md-5 mt-3 mb-7">
  <loadingOverlay :active="isPokemonsLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="row">
    <!-- <div class="col-4">
      <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
        <div class="card border-0">
          <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            <div class="d-flex justify-content-between align-items-center pe-1">
              <h4 class="mb-0">
                屬性瀏覽
              </h4>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="card-body py-0">
              <ul class="list-unstyled">
                <li>
                  <button href="#" class="m-1 page-link py-1 px-2 d-block text-mute" :class="{'text-primary rounded border border-primary':typeSelected == '全部'}" @click="typeSelected = '全部';this.$route.query.keyWord = '';isLoading = true;getProducts(1,yOffset,'')">瀏覽全部</button>
                </li>
                <li v-for="type in Object.entries(typeNameList)" :key="type[0]">

                <button href="#" class="m-1 page-link py-1 px-2 d-block text-mute" :class="{'text-primary rounded border border-primary':typeSelected == type[0]}" @click="this.typeSelected = type[0];this.$route.query.keyWord = '';isLoading = true;getProducts(1,yOffset,type[1])">{{ type[1] }}</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-12">
      <div class="row">
        <div class="row">
          <v-field type="text" class="form-control col-6" id="ContactMail" aria-describedby="emailHelp" placeholder="輸入寶可夢名稱或圖鑑編號" name="email" required @keyup.enter="searchPokemon" v-model="keyWord"></v-field>
          <!-- <button class="btn btn-primary col-4" @click="searchPokemon">送出查詢</button> -->
        </div>
        <h4 class="opacity-0 mt-6"  :class="{'opacity-100':!Object.keys(filterdPokemons)?.length}">無相符的查詢結果</h4>
        <!-- <h4 class="opacity-0 mt-6"  :class="{'opacity-100':$route.query.keyWord?.length}">「{{ $route.query.keyWord }}」的搜尋結果</h4> -->
        <!-- {{filterdPokemons.abomasnow}} -->
        <div class="col-12 col-md-4 col-lg-3" v-for="pokemon in filterdPokemons" :key="pokemon.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <router-link :to="{ path: 'pokemon', query: { id: pokemon.id ,pokemonName: pokemon.chineseName}}">
              <img :src="pokemon.sprites.front_default" class="card-img-top object-fit-contain position-relative rounded border border-1 border-secondary" alt="product.description" style="width: 100%;">
            </router-link>
              <!-- {{ favorites.some(item => item.id === product.id) }} -->
              <!-- <span>
                <button type="button" class="position-absolute top-0 start-100 badge bg-secondary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="addToFavorites(product)" v-if="!favorites.some(item => item.id === product.id)">
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
                <button type="button" class="position-absolute top-0 start-100 badge bg-primary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="removeFromFavorites(product.id)" v-else>
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
              </span> -->
            <div class="card-body p-0">
              <router-link :to="{ path: 'pokemon', query: { id: pokemon.id ,pokemonName: pokemon.chineseName}}" style="text-decoration: none;">
                <h4 class="mb-0 mt-3">{{ pokemon.id }} {{ pokemon.chineseName }}</h4>
                </router-link>
              <!-- <p class="card-text mb-0">NT${{ product.price }} <span class="text-muted "><del>NT${{ product.origin_price }}</del></span></p> -->
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
      <!-- <nav class="d-flex justify-content-center" v-if="!filterdProducts?.products?.length == 0">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" aria-label="Previous" :class="{disabled:!filterdProducts?.pagination?.has_pre}" @click="getProducts(products.pagination.current_page-1,yOffset)">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item" :class="{active:filterdProducts.pagination.current_page == index}" v-for="index in filterdProducts.pagination?.total_pages" :key="index" ><button class="page-link" @click="getProducts(index,yOffset)">{{ index }}</button></li>
          {{ products.pagination }}
          <li class="page-item">
            <button class="page-link" aria-label="Next" :class="{disabled:!filterdProducts?.pagination?.has_next}" @click="getProducts(products.pagination.current_page+1,yOffset)">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav> -->
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import pokemonStore from '../../stores/pokemonStore.js'
export default {
  data () {
    return {
      filterdPokemons: {},
      keyWord: ''
    }
  },
  mounted () {
    this.pokemonsView()
  },
  computed: {
    ...mapState(pokemonStore, ['typeNameList', 'pokemons', 'speciesUrlList', 'speciesList', 'speciesNameList', 'isPokemonsLoading', 'pokemonCount'])
  },
  watch: {
    pokemons () {
      this.filterdPokemons = { ...this.pokemons }
      console.log(this.pokemons)
      this.keyWord = this.$route.query.searchWord || ''
    },
    keyWord () {
      this.searchPokemon()
    }
  },
  methods: {
    ...mapActions(pokemonStore, ['pokemonsView']),
    searchPokemon () {
      if (this.keyWord === '') {
        this.filterdPokemons = { ...this.pokemons }
      } else {
        const obj = {}
        Object.keys(this.pokemons).forEach(item => {
          if (this.pokemons[item]?.chineseName?.includes(this.keyWord) || this.pokemons[item]?.id === Number(this.keyWord)) {
            obj[item] = this.pokemons[item]
          }
        })
        this.filterdPokemons = { ...obj }
      }
    }
  }
}
</script>
