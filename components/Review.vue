<template>
  <li class="pb-5">
    <p class="text-xl font-bold pb-5">
      <span class="mr-2">Rating:</span>{{ review.rating }}
    </p>
    <p class="text-xl">{{ review.text }}</p>
  </li>
</template>

<script>
export default {
  props: ["review"],
};
</script>
