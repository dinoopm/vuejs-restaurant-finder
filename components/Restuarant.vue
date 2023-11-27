<template>
    <div class="restuarant-item p-6 hover:bg-sky-300 cursor-pointer" :class="{selected:id === business.id}">
        <p class="font-bold text-xl">{{ business.name }}</p>
        <p class="text-md"><img src="../assets/images/marker-icon.svg" class="inline-block">{{ business.location.formatted_address }}</p>
    </div>
</template>

<script>
export default {
    props: ['business','id']
}
</script>