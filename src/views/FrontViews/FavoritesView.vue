<template>
<div class="container">
  <loadingOverlay :active="isFavoritesLoading" :is-full-page="true">
    <img src="/src/assets/img/Animation - 1710557059960.gif" alt="讀取中" class="img-fluid">
  </loadingOverlay>
  <div class="row">
    <div class="col-12 col-sm-4 col-md-3 order-last order-sm-first">
      <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
        <div class="card border-0 mx-3">
          <div class="card-header px-0 py-4 bg-light border-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            <div>
              <h3 class="mb-0 text-center">
                屬性瀏覽
                <i class="bi bi-chevron-down"></i>
              </h3>
            </div>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="py-0">
              <ul class="list-group">
                <button type="button" href="#" class="page-link fs-5" @click="filterType('全部')">
                  <li class="list-group-item py-2 px-2" :class="typeSelected == '全部'?'active':'bg-light'">
                    瀏覽全部
                  </li>
                </button>
                <button type="button" href="#" class="page-link fs-5" v-for="type in Object.entries(typeNameList)" :key="type[0]">

                <li @click="filterType(type[1])" class="list-group-item py-2 px-2" :class="typeSelected == type[1]?'active':'bg-light'" >
                {{ type[1] }}
                </li>
              </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-8 col-md-9">
      <div class="row">
        <h4 class="opacity-0 mt-6"  :class="{'opacity-100':!filterdFavorites?.length}">尚未收藏任何商品</h4>
        <h4 class="opacity-0 mt-6">對齊產品列表版面使用，不顯示</h4>
        <div class="col-12 col-md-4 col-lg-3" v-for="product in filterdFavorites" :key="product.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <RouterLink :to="{ path: 'product', query: { id: product.id }}">
              <img :src="product.imageUrl" class="card-img-top object-fit-contain position-relative rounded border border-1 border-secondary" :alt="product.description" style="width: 100%;" :title="product.description">
            </RouterLink>
              <!-- {{ favorites.some(item => item.id === product.id) }} -->
              <span>
                <button type="button" class="position-absolute top-0 start-100 badge bg-secondary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="" v-if="!favorites.some(item => item.id === product.id)">
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
                <button type="button" class="position-absolute top-0 start-100 badge bg-primary border-0" style="transform: translate(-100%, 0);width:3rem;height:1.5rem;border-radius: 0 0.375rem;" @click.prevent="remove(product)" v-else>
                  <i class="bi bi-heart"></i>
                  <span class="visually-hidden">unread messages</span>
                </button>
              </span>
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
      <!-- <nav class="d-flex justify-content-center d-none" v-if="!filterdFavorites?.length == 0">
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" aria-label="Previous" :class="{disabled:!filterdProducts?.pagination?.has_pre}" @click="getProducts(products.pagination.current_page-1,yOffset)">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item" :class="{active:filterdProducts.pagination.current_page == index}" v-for="index in filterdProducts.pagination?.total_pages" :key="index" ><button class="page-link" @click="getProducts(index,yOffset)">{{ index }}</button></li>
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
import Swal from 'sweetalert2'

import pokemonStore from '@/stores/pokemonStore.js'
import favoriteStore from '@/stores/favoriteStore.js'

export default {
  data () {
    return {
      filterdFavorites: [],
      yOffset: 0,
      typeSelected: '全部',
      isFavoritesLoading: true
    }
  },
  components: {
  },
  mounted () {
    // console.log(this.favorites)
    this.init()
    // console.log(this.filterdProducts)
    // this.yOffset = document.querySelector('div.container.mt-md-5.mt-3.mb-7 > div > div.col-8 > div > h4').getBoundingClientRect().top + window.pageYOffset
  },
  computed: {
    ...mapState(pokemonStore, ['typeNameList']),
    ...mapState(favoriteStore, ['favorites'])
  },
  watch: {
    favorites () {
      this.isFavoritesLoading = false
      this.filterdFavorites = [...this.favorites]
    }
  },
  methods: {
    ...mapActions(pokemonStore, ['exportTypeNamesList']),
    ...mapActions(favoriteStore, ['addToFavorites', 'removeFromFavorites', 'getFavorites']),
    async init () {
      this.exportTypeNamesList()
    },
    filterType (type = '全部') {
      window.scrollTo({ top: this.yOffset, behavior: 'smooth' })
      this.filterdFavorites = type === '全部'
        ? this.filterdFavorites = this.favorites
        : this.favorites.filter(item => item.category === type)
      this.typeSelected = type
    },
    remove (product) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: `要將${product.unit}從收藏商品移除嗎?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '移除',
        cancelButtonText: '取消操作',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeFromFavorites(product.id)
          Swal.fire({
            title: `${product.unit}已從收藏商品移除`,
            icon: 'success',
            timer: 1000,
            showConfirmButton: false,
            showCancelButton: false
          })
        } else if (
        /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: '操作已取消',
            icon: 'warning'
          })
        }
      })
    }
  }
}
</script>
