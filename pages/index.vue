
<template>
  <div class="flex flex-col lg:flex-row">  
    <div class="sidebar basis-2/12 lg:min-h-screen border-r-2">
        <div class="restuarant-count bg-gray-300 p-5">
             <RestuarantResultsCount />
        </div>
        <div class="restuarants-list divide-y">
            <Restuarant />
            <Restuarant />
            <Restuarant />
            <Restuarant />
            <Restuarant />
            <Restuarant />
        </div>
    </div>
    <div class="main-content basis-10/12 lg:min-h-screen">
        <RestuarantDetails />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRestuarantsStore } from '@/stores/restuarants';
const store = useRestuarantsStore();
</script>

<style lang="scss" scoped>
</style>