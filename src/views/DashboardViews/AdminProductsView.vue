<template>
  <div>
    AdminProductsView
  </div>
</template>
<script>
import axios from 'axios'

const { VITE_URL, VITE_PATH, POKEMON_API } = import.meta.env

export default {
  data () {
    return {
      products: [],
      carts: {},
      tempProduct: {},
      productModal: null,
      isLoading: true,
      isUpdating: true,
      isCartAdded: false,
      cartAddedMessage: '',
      qty: 1,
      // orderData:{
      //   "data": {
      //     "user": {
      //       "name": "",
      //       "email": "",
      //       "tel": "",
      //       "address": ""
      //     },
      //     "message": ""
      //   }
      // },
      orderData: {
        data: {
          user: {
            name: 'test',
            email: 'test@gmail.com',
            tel: '0912346768',
            address: 'kaohsiung'
          },
          message: '這是留言'
        }
      }
    }
  },
  components: {
    // UserProductModal
  },
  methods: {
    getPokemons () {
    },
    openModal (product) {
      this.tempProduct = product
      this.$refs.userModal.open()
    },
    addToCart (id, value = 1) {
      const data = {
        data: {
          product_id: id,
          qty: Number(value)
        }
      }
      // console.log(data);
      this.isUpdating = true
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, data)
        .then((res) => {
          console.log(res)
          this.isUpdating = false
          this.cartAddedMessage = `${res.data.data.product.title}加入購物車成功。`
          this.isCartAdded = true
          setTimeout(() => {
            this.isCartAdded = false
          }, 3000)
          this.$refs.userModal.close()
          // this.getCarts();
        })
        .catch((error) => {
          console.dir(error)
        })
    },
    getAllProducts () {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          console.log(res)
          this.isLoading = false
          this.isUpdating = false
          this.products = res.data.products
        })
        .catch((error) => {
          console.dir(error)
        })
    }
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>
