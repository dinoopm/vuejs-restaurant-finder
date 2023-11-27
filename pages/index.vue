
<template>
  <div class="flex flex-col lg:flex-row">  
    <div class="sidebar basis-2/12 lg:min-h-screen border-r-2">
        <div class="restuarant-count bg-gray-300 p-5">
             <RestuarantResultsCount :total = "store.total" />
        </div>
        <div class="restuarants-list divide-y">
            <div v-for="business in store.business">
               <Restuarant :business = 'business' :id = 'store.selectedBusiness.id' @click="store.getSelectedBusiness(business.id)" />
            </div>
        </div>
    </div>
    <div class="main-content basis-10/12 lg:min-h-screen">
        <RestuarantDetails :selectedBusiness = 'store.selectedBusiness'/>
    </div>
  </div>
</template>

<script setup>
  import { useRestuarantsStore } from '@/stores/restuarants';
  const store = useRestuarantsStore()
  await useAsyncData('restuarants', () => store.getRestuarants())
</script>