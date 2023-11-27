<template>
    <div class="restuarant-item p-6 hover:bg-sky-300">
        <p class="font-bold text-xl">{{ business.name }}</p>
        <p class="text-md flex"><img src="../assets/images/marker-icon.svg"><span>{{ business.location.formatted_address }}</span></p>
    </div>
</template>

<script>
export default {
    props: ['business']
}
</script>