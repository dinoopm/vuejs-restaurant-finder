<template>
  <div class="restuarant-details p-14 dark:bg-blue-950 dark:text-white">
    <div class="restuarant-details flex">
      <div class="basis-7/12">
        <h2 class="text-3xl font-bold underline pb-5">
          {{ selectedBusiness.name }}
        </h2>
        <p class="text-xl font-bold pb-5">
          <span class="mr-2">Rating: {{ selectedBusiness.rating }}</span>
        </p>
        <p class="flex text-xl pb-5">
          <img src="../assets/images/marker-icon.svg" /><span
            class="ml-2 self-center"
            >{{ selectedBusiness?.location?.formatted_address }}</span
          >
        </p>
        <p class="flex text-xl pb-5">
          <img src="../assets/images/phone-icon.svg" /><span
            class="ml-2 self-center"
            >{{ selectedBusiness?.display_phone }}</span
          >
        </p>
      </div>
      <div class="basis-5/12">
        <div v-for="photo in selectedBusiness.photos">
          <img
            :src="photo"
            width="500"
            :alt="selectedBusiness.name + ' image'"
          />
        </div>
      </div>
    </div>
    <div class="rating pt-5">
      <h3 class="text-3xl font-bold pb-5">Review</h3>
      <p v-if="!selectedBusiness.reviews.length">No reviews yet!</p>
      <ul class="list-disc ml-14" v-for="review in selectedBusiness.reviews">
        <Review :review="review" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedBusiness"],
};
</script>
