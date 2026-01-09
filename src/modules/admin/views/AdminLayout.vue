<template>


    <Aside />


    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">


        <Nav />


        <div class="container-fluid py-2">



            <RouterView />

            <Footer />


        </div>

    </main>


    <Config />



</template>


<script setup>

import '@/assets/css/material-dashboard.css';
import Aside from '@/modules/admin/components/layouts/Aside.vue'
import Nav from '@/modules/admin/components/layouts/Nav.vue'
import Footer from '@/modules/admin/components/layouts/Footer.vue'
import Config from '@/modules/admin/components/layouts/Config.vue'

import { onMounted } from 'vue';





onMounted(() => {



    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
            damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }

});

</script>