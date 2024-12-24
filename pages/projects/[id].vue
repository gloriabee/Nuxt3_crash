 <!-- Route parameters : /products/:id eg- /products/1 -->

<script setup lang="ts">
   const {id} = useRoute().params

   definePageMeta({
    layout:'projects'
    })
</script>

<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam saepe amet sequi illo.</p>
    </div>
</template>



<style scoped>

</style>