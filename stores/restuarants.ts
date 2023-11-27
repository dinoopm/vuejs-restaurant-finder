import { defineStore } from 'pinia'

export const useRestuarantsStore = defineStore('restuarants', {
  state: () => ({
    total: 0,
    business: [],
    selectedBusiness: []

  }),
  actions: {
      async getRestuarants () {
          const data = await $fetch('http://localhost:3000/api/data') as any;
          this.total = data.data.search.total;
          this.business = data.data.search.business;
          this.selectedBusiness = this.business[0];
      }
  }
})