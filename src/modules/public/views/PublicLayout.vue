<template>

    <Nav />

    <Header />

    <RouterView />

    <Footer />

    <Chatbot2 />

</template>


<script setup>
import Nav from '@/modules/public/components/layouts/Nav.vue'
import Footer from '@/modules/public/components/layouts/Footer.vue'
import Header from '@/modules/public/components/layouts/Header.vue'


// import Chatbot from '@/modules/public/components/Chatbot.vue';
import Chatbot2 from '@/modules/public/components/Chatbot2.vue';


</script>