<template>
  <div class="w-full h-[calc(100vh-80px)] flex">
    <div class="overflow-y-auto relative block border-r-2">
      <div class="sticky top-0 bg-gray-300 p-5">
        <RestuarantResultsCount :total="store.total" />
      </div>
      <div class="restuarants-list divide-y">
        <div v-for="business in store.business">
          <Restuarant
            :business="business"
            :id="store.selectedBusiness.id"
            @click="store.getSelectedBusiness(business.id)"
          />
        </div>
      </div>
    </div>
    <div class="w-3/4 overflow-y-auto relative">
      <RestuarantDetails :selectedBusiness="store.selectedBusiness" />
    </div>
  </div>
</template>

<script setup>
import { useRestuarantsStore } from "@/stores/restuarants";
const store = useRestuarantsStore();
await useAsyncData("restuarants", () => store.getRestuarants());

useHead({
  title: "Nuxt 3 | Restuarant finder",
  meta: [{ name: "description", content: "Nux 3 restuarant finder app" }],
});
</script>
