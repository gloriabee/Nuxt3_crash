<script setup>
    const {data}= await useFetch('/api/ninja')

</script>

<template>
    <div>
        <h1>About Me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eius porro soluta non sint, excepturi illum corrupti laborum quidem voluptatibus!</p>
    </div>
    <div> 
        {{ data}}
    </div>
</template>



<style scoped>

</style>