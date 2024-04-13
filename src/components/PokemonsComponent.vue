<template>
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
              <h4 class="mb-0 mt-3">
                  <router-link :to="{ path: 'pokemon', query: { id: pokemon.id ,pokemonName: pokemon.chineseName}}" style="text-decoration: none;">
                  {{ pokemon.id }} {{ pokemon.chineseName }}
                  </router-link>
                </h4>
              <!-- <p class="card-text mb-0">NT${{ product.price }} <span class="text-muted "><del>NT${{ product.origin_price }}</del></span></p> -->
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import pokemonStore from '@/stores/pokemonStore.js'
export default {
  name: 'PokemonsComponent',
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
      // console.log(this.pokemons)
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
        // this.filterdPokemons = { }
        this.filterdPokemons = { ...obj }
      }
    }
  }
}
</script>
