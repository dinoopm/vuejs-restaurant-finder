import { defineStore } from 'pinia'

export const useRestuarantsStore = defineStore('restuarants', {
  state: () => ({
    data: [],
  }),
})