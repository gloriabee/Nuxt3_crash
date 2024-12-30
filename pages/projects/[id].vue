 <!-- Route parameters : /products/:id eg- /products/1 -->

<script setup>
   const {id} = useRoute().params
   const uri= 'https://fakestoreapi.com/products/'+id;

   const {data:product}=await useFetch(uri,{key:id})

   if(!product.value){
    throw createError({statusCode:404, 
        statusMessage:'Product Not Found',
        fatal:true
    })
   }

   definePageMeta({
    layout:'projects'
    })
</script>

<template>
    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description"/>
    </Head>
    <div>
       <ProductDetails :product="product"/>
    </div>
</template>



<style scoped>

</style>