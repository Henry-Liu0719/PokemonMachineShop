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
      productList: [],
      products: [],
      machines: [],
      machineList: [],
      moveUrlList: [],
      moveList: [],
      typeUrlList: [],
      typeList: [],
      typeNameList: {}
    }
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
      console.log('machineList', this.machineList)
      this.addMachineName()
      this.addCost()
      this.addId()
      this.addMachinePhoto()
      await this.getMoveUrlList()
      await this.getMoveList()
      this.addMoveName()
      this.addMoveText()
      await this.createTypeUrlList()
      await this.getTypeList()
      this.getTypeNamesList()
      // console.log('typeNameList', this.typeNameList)
      this.addMoveType()
      this.addLearnedByPokemon()
      this.createProductList()
      // console.log('summarizedProductList', this.summarizedProductList)
      console.log('productList', this.productList)
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
        this.machineList = this.machineList.sort(function (a, b) {
          return a.id < b.id ? -1 : 1// 升序排序
        })
      } catch (err) {
        console.dir(err)
      }
    },
    async getMoveUrlList () {
      try {
        await Promise.all(this.machineList.map(async (item, index) => {
          const res = await axios.get(item.machines[0].machine.url)
          if (res.data) {
            this.moveUrlList.push(res.data)
          }
        }))
        // console.log(this.moveUrlList)
      } catch (err) {
        console.dir(err)
      }
    },
    async getMoveList () {
      try {
        await Promise.all(this.moveUrlList.map(async (item, index) => {
          const res = await axios.get(item.move.url)
          if (res.data) {
            this.moveList.push(res.data)
          }
        }))
        this.moveList = this.moveList.sort(function (a, b) {
          return a.machines[0].machine.url < b.machines[0].machine.url ? -1 : 1// 升序排序
        })
        console.log('moveList', this.moveList)
      } catch (err) {
        console.dir(err)
      }
    },
    async createTypeUrlList () {
      try {
        const res = await axios.get(`${VITE_POKEMON_API}/type`)
        // console.log(res)
        res.data.results.forEach((item, index) => {
          // const name = item.name
          // this.typeUrlList.push({ name: item.name })
          this.typeUrlList.push({ url: item.url })
          this.typeUrlList[index].name = item.name
        })
      } catch (err) {
        console.dir(err)
      }
    },
    async getTypeList () {
      try {
        await Promise.all(this.typeUrlList.map(async (item, index) => {
          const res = await axios.get(item.url)
          if (res.data) {
            this.typeList.push(res.data)
          }
        }))
        // console.log('typeList', this.typeList)
      } catch (err) {
        console.dir(err)
      }
    },
    getTypeNamesList () {
      const namesArr = []
      this.typeList.forEach(item => {
        namesArr.push(item.names)
      })
      const chineseNameArr = []
      namesArr.forEach(item => {
        chineseNameArr.push(item.filter(element => element.language.name === 'zh-Hant')[0].name || item[0].name)
      })
      // console.log('chineseNameArr', chineseNameArr)
      const engNameArr = []
      namesArr.forEach(item => {
        engNameArr.push(item.filter(element => element.language.name === 'en')[0].name || item[0].name)
      })
      // console.log('engNameArr', engNameArr)
      engNameArr.forEach((element, index) => {
        // this.typeNameList.push({})
        this.typeNameList[element.toLowerCase()] = chineseNameArr[index]
      })
      // console.log('typeNameList', this.typeNameList)
    },
    createSummarizedProductList () {
      this.machineList.forEach(item => {
        this.summarizedProductList.push({})
      })
    },
    addMoveText () {
      const flavorArr = []
      this.moveList.forEach(item => {
        flavorArr.push(item.flavor_text_entries)
      })
      const entriesArr = []
      flavorArr.forEach(item => {
        entriesArr.push(item.filter(element => element.language.name === 'zh-Hant')[0] || item[0])
      })
      // const textArr = flavorArr.map(item => item.language.name === 'zh-Hant')
      entriesArr.forEach((item, index) => {
        this.summarizedProductList[index].text = item.flavor_text
      })
      // console.log(this.summarizedProductList)
    },
    addMoveName () {
      const namesArr = []
      this.moveList.forEach(item => {
        namesArr.push(item.names)
      })
      const entriesArr = []
      namesArr.forEach(item => {
        entriesArr.push(item.filter(element => element.language.name === 'zh-Hant')[0] || item[0])
      })
      entriesArr.forEach((item, index) => {
        this.summarizedProductList[index].move_name = item.name
      })
      // console.log(this.summarizedProductList)
    },
    addMoveType () {
      this.moveList.forEach((item, index) => {
        this.summarizedProductList[index].type = this.typeNameList[item.type.name.toLowerCase()]
      })
    },
    addLearnedByPokemon () {
      this.moveList.forEach((item, index) => {
        this.summarizedProductList[index].learned_by_pokemon = item.learned_by_pokemon
      })
    },
    addMachineName () {
      const namesArr = []
      this.machineList.forEach(item => {
        namesArr.push(item.names)
      })
      const nameArr = []
      namesArr.forEach(item => {
        nameArr.push(item.filter(element => element.language.name === 'zh-Hant')[0] || item[0])
      })
      nameArr.forEach((item, index) => {
        this.summarizedProductList[index].machine_name = item.name
      })
      // console.log(this.summarizedProductList)
    },
    addCost () {
      this.machineList.forEach((item, index) => {
        this.summarizedProductList[index].cost = item.cost
      })
    },
    addId () {
      this.machineList.forEach((item, index) => {
        this.summarizedProductList[index].id = item.name
      })
    },
    addMachinePhoto () {
      this.machineList.forEach((item, index) => {
        this.summarizedProductList[index].photo = item.sprites.default
      })
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
    },
    createProductList () {
      this.summarizedProductList.forEach(item => {
        this.productList.push({
          origin_price: item.cost,
          id: item.id,
          learned_by_pokemon: item.learned_by_pokemon,
          title: item.machine_name,
          category: item.move_name,
          text: item.text,
          imageUrl: item.photo,
          unit: item.type,
          price: item.cost * 0.8
          // description: item.text,
          // content: '這是內容',
          // is_enabled: 1,
          // imagesUrl: [
          //   '圖片網址一',
          //   '圖片網址二',
          //   '圖片網址三',
          //   '圖片網址四',
          //   '圖片網址五'
          // ]
        })
      })
    }
  }
}
</script>
