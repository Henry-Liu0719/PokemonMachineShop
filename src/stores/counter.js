import axios from 'axios'
import { defineStore } from 'pinia'
const { VITE_URL, VITE_PATH } = import.meta.env

export default defineStore('counter', {
  state: () => ({
  }),
  actions: {
    increment () {
      console.log(axios)
      console.log(VITE_URL, VITE_PATH)
    }
  }
})
