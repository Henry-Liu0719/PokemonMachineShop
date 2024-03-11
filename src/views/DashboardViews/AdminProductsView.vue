<template>
  <div>
    AdminProductsView
  </div>
</template>
<script>
import axios from 'axios'

const { VITE_URL, VITE_PATH, VITE_POKEMON_API } = import.meta.env

export default {
  data () {
    return {
      summarizedProductList: [],
      products: [],
      machines: [],
      machineList: []
    }
  },
  components: {
    // UserProductModal
  },
  mounted () {
    this.summarizeProductList()
  },
  methods: {
    async summarizeProductList () {
      await this.getMachines()
      // console.log(this.machines)
      await this.getMachineList()
      this.createSummarizedProductList()
      console.log(this.machineList)
      // console.log(this.summarizedProductList)
      this.filterText()
    },
    async getMachines () {
      try {
        const res = await axios.get(`${VITE_POKEMON_API}/item-category/37`)
        // console.log(res)
        this.machines = res.data.items || []
      } catch (err) {
        console.dir(err)
      }
    },
    async getMachineList () {
      try {
        await Promise.all(this.machines.map(async (item, index) => {
          const res = await axios.get(item.url)
          // console.log(res)
          if (res.data.flavor_text_entries.length) {
            this.machineList.push(res.data)
          }
          // this.summarizedProductList[index] = { text: res.data.flavor_text_entries[19].text }
        }))
      } catch (err) {
        console.dir(err)
      }
    },
    createSummarizedProductList () {
      this.machineList.forEach(item => {
        this.summarizedProductList.push({})
      })
    },
    filterText () {
      const flavorArr = []
      this.machineList.forEach(item => {
        flavorArr.push(item.flavor_text_entries)
      })
      const entriesArr = []
      flavorArr.forEach(item => {
        entriesArr.push(item.filter(element => element.language.name === 'zh-Hant')[0] || item[0])
      })
      // const textArr = flavorArr.map(item => item.language.name === 'zh-Hant')
      // console.log(flavorArr)
      // console.log(entriesArr)
      // console.log(this.summarizedProductList)
      entriesArr.forEach((item, index) => {
        this.summarizedProductList[index].text = item.text
      })
      // console.log(this.summarizedProductList)
    },
    getAllProducts () {
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          // this.products = res.data.products
        })
        .catch((error) => {
          console.dir(error)
        })
    }
  }
}
</script>
