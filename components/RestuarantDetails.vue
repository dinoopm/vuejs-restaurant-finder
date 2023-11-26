<template>
        <div class="restuarant-details p-14">
            <div class="restuarant-details flex">
                <div class="basis-8/12">
                    <h2 class="text-3xl font-bold underline pb-5">Jim block</h2>
                    <p class="text-xl font-bold pb-5"><span class="mr-2">Rating:</span>2</p>
                    <p class="flex text-xl pb-5"><img src="../assets/images/marker-icon.svg"><span class="ml-2 self-center">Billindamm 40, Hamburg</span></p>
                    <p class="flex text-xl pb-5"><img src="../assets/images/phone-icon.svg"><span class="ml-2 self-center">+4917677772323</span></p>

                </div>
                <div class="basis-4/12"></div>
            </div>

            <div class="rating pt-5">
                <h3 class="text-3xl font-bold pb-5">Review</h3>

                <ul class="list-disc ml-14">
                   <Review />      
                </ul>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>