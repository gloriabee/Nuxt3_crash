<script setup lang="ts">
    
</script>

<template>
    <div>

        <!--Navigation header-->
        <header class="shadow-sm bg-white">
            <nav class="container flex p-4 mx-auto justify-between">
                <NuxtLink to="/" class="font-bold">Logo</NuxtLink>
                <ul class="ml-auto gap-4 flex">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="about">About</NuxtLink></li>
                    <li><NuxtLink to="projects">Projects</NuxtLink></li>
                    <li><NuxtLink to="contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!--output the page content-->
        <div class="container mx-auto p-4">
            <slot></slot>
        </div>


    </div>
</template>



<style scoped>
    .router-link-exact-active{
        color: blue;
    }
</style>