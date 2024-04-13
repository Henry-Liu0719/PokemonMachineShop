import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

const { VITE_POKEMON_API } = import.meta.env

export default defineStore('pokemon', {
  state: () => ({
    summarizedProductList: [],
    productList: [],
    products: [],
    machines: [],
    machineList: [],
    moveUrlList: [],
    moveList: [],
    typeUrlList: [],
    typeList: [],
    typeNameList: {},
    isAttributesLoading: true,
    isPokemonsLoading: true,
    pokemons: {},
    speciesUrlList: [],
    speciesList: [],
    speciesNameList: {},
    pokemonCount: 1025,
    typeColorList: {}

    // pokemonCount: 251
  }),
  actions: {
    async pokemonsView () {
      await this.createSpeciesUrlList()
      await this.getSpeciesList()
      this.getSpeciesNamesList()
      await this.getPokemons()
    },
    async summarizeProductList () {
      await this.getMachines()
      await this.getMachineList()
      this.createSummarizedProductList()
      // console.log('machineList', this.machineList)
      this.addMachineName()
      this.addCost()
      this.addId()
      this.addMachinePhoto()
      await this.getMoveUrlList()
      await this.getMoveList()
      // console.log('moveList', this.moveList)
      this.addMoveName()
      this.addMoveText()
      await this.createTypeUrlList()
      await this.getTypeList()
      this.getTypeNamesList()
      this.addMoveType()
      this.addLearnedByPokemon()
      this.createProductList()
      // console.log('summarizedProductList', this.summarizedProductList)
      // console.log('productList', this.productList)
    },
    async exportTypeNamesList () {
      await this.createTypeUrlList()
      await this.getTypeList()
      this.getTypeNamesList()

      // console.log('typeNameList', this.typeNameList)
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
      } catch (err) {
        console.dir(err)
      }
    },
    async createTypeUrlList () {
      try {
        const res = await axios.get(`${VITE_POKEMON_API}/type`)
        // console.log(res)
        res.data.results.forEach((item, index) => {
          this.typeUrlList.push({ url: item.url })
          this.typeUrlList[index].name = item.name
        })
      } catch (err) {
        Swal.fire({
          position: 'top-end',
          icon: 'false',
          title: '讀取屬性清單失敗，請聯繫管理員',
          showConfirmButton: false,
          timer: 1000
        })
        console.dir(err)
        this.isAttributesLoading = false
      }
    },
    async getTypeList () {
      try {
        await Promise.all(this.typeUrlList.map(async (item, index) => {
          const res = await axios.get(item.url)
          if (res.data) {
            this.typeList.push(res.data)
          }
          this.isAttributesLoading = false
        }))
        // console.log('typeList', this.typeList)
      } catch (err) {
        Swal.fire({
          position: 'top-end',
          icon: 'false',
          title: '讀取屬性清單失敗，請聯繫管理員',
          showConfirmButton: false,
          timer: 1000
        })
        console.dir(err)
        this.isAttributesLoading = false
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
        this.typeNameList[element.toLowerCase()] = chineseNameArr[index]
      })
      delete this.typeNameList['???']
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
    stringifyLearnedByPokemon (arr) {
      const stringifiedArr = []
      arr.forEach(item => {
        stringifiedArr.push(JSON.stringify(item))
      })
      return stringifiedArr
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
    createProductList () {
      this.summarizedProductList.forEach(item => {
        this.productList.push({
          origin_price: item.cost || 9999,
          content: item.id,
          imagesUrl: this.stringifyLearnedByPokemon(item.learned_by_pokemon),
          title: item.machine_name,
          category: item.move_name,
          imageUrl: item.photo,
          description: item.text,
          unit: item.type,
          price: item.cost * 0.8 || 9999,
          is_enabled: 1
        })
      })
    },
    async createSpeciesUrlList () {
      try {
        // const res = await axios.get(`${VITE_POKEMON_API}/pokemon-species?offset=0&limit=${this.pokemonCount}`)
        const res = await axios.get(`${VITE_POKEMON_API}/pokemon-species?offset=${0}&limit=${Math.floor(this.pokemonCount / 3)}`)
        // console.log(res)
        res.data.results.forEach((item, index) => {
          this.speciesUrlList.push({ url: item.url })
          this.speciesUrlList[index].name = item.name
        })
      } catch (err) {
        console.dir(err)
      }
    },
    async getSpeciesList () {
      try {
        await Promise.all(this.speciesUrlList.map(async (item, index) => {
          const res = await axios.get(item.url)
          if (res.data) {
            this.speciesList.push(res.data)
          }
        }))
        // console.log('speciesList', this.speciesList)
      } catch (err) {
        console.dir(err)
      }
    },
    getSpeciesNamesList () {
      const namesArr = []
      this.speciesList.forEach(item => {
        namesArr.push(item.names)
      })
      const chineseNameArr = []
      namesArr.forEach(item => {
        chineseNameArr.push(item.filter(element => element.language.name === 'zh-Hant')[0].name || item[0].name)
      })
      // console.log('namesArr', namesArr)
      // console.log('chineseNameArr', chineseNameArr)
      const engNameArr = []
      namesArr.forEach(item => {
        engNameArr.push(item.filter(element => element.language.name === 'en')[0].name || item[0].name)
      })
      // console.log('engNameArr', engNameArr)
      engNameArr.forEach((element, index) => {
        // this.typeNameList.push({})
        this.speciesNameList[element.toLowerCase()] = chineseNameArr[index]
      })
      // console.log('typeNameList', this.typeNameList)j
    },
    async getPokemons () {
      const promises = []
      for (let index = 1; index <= Math.floor(this.pokemonCount / 3); index++) {
        promises.push(axios.get(`${VITE_POKEMON_API}/pokemon/${index}`))
      }
      const res = {}
      const responses = await Promise.all(promises)
      responses.forEach(element => {
        res[element.data.name] = element.data
        res[element.data.name].chineseName = this.speciesNameList[element.data.name]
      })
      this.pokemons = { ...res }
      this.isPokemonsLoading = false
    },
    createTypeColorList () {
      this.typeColorList = {
        fighting: '#8f191b',
        flying: '#81b9ef',
        normal: '#9fa19f',
        ghost: '#704170',
        steel: '#60a1b8',
        fire: '#e62829',
        rock: '#afa981',
        grass: '#3fa129',
        water: '#2980ef',
        electric: '#fac000',
        ground: '#915121',
        poison: '#9141cb',
        bug: '#b3c163',
        fairy: '#ef70ef',
        ice: '#3fd8ff',
        shadow: '#44685e',
        dragon: '#5060e1',
        psychic: '#f05388',
        dark: '#50413f'
      }
    }
  }
})
