import { defineStore } from 'pinia'

export const useRestuarantsStore = defineStore('restuarants', {
  state: () => ({
    total: 0,
    business: [],
    selectedBusiness: {}

  }),
  actions: {
      async getRestuarants () {
          const data = await $fetch('http://localhost:3000/api/data') as any;
          this.selectedBusiness = data.data.search.business[0] || [];
          this.total = data.data.search.total || 0;
          this.business = data.data.search.business || [];
      },
      getSelectedBusiness (id: string) {
          console.log(id);
          this.selectedBusiness = this.business.filter( (b: {id: string}) => b.id === id)[0];

          console.log(this.selectedBusiness);
      }
  }
})