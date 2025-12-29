<template>

    <Nav />

    <Header />

    <RouterView />

    <Footer />


</template>


<script setup>
import Nav from '@/modules/public/components/layouts/Nav.vue'
import Footer from '@/modules/public/components/layouts/Footer.vue'
import Header from '@/modules/public/components/layouts/Header.vue'


</script>