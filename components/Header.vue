<template>
  <header class="bg-black p-5 flex">
    <h1 class="text-white text-3xl font-bold w-3/4">Restaurant finder</h1>
    <ClientOnly>
      <button
        class="text-white w-1/4 text-right"
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
      >
        <span v-if="$colorMode.value == 'light'">Dark mode</span>
        <span v-else="$colorMode.value == 'dark'">Light mode</span>
      </button>
    </ClientOnly>
  </header>
</template>

<script setup>
const setColorTheme = (newTheme) => {
  useColorMode().preference = newTheme;
};
</script>
