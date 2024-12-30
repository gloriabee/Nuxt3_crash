 <!-- Route parameters : /products/:id eg- /products/1 -->

<script setup lang="ts">
   const {id} = useRoute().params
   const uri= 'https://fakestoreapi.com/products/'+id;

   const {data:product}=await useFetch(uri,{key:id})

   definePageMeta({
    layout:'projects'
    })
</script>

<template>
    <div>
       <ProductDetails :product="product"/>
    </div>
</template>



<style scoped>

</style>