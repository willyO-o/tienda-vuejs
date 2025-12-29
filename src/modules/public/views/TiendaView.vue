<template>




    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6 p-md-5">
        <!-- Section with four info areas left & one card right with image and waves -->
        <h1 class="text-center">Productos </h1>

        <div class="row">

            <div class="col-auto">
                <div class="input-group input-group-outline my-3">
                    <span class="input-group-text pe-2">
                        <i class="fas fa-search"></i>
                    </span>
                    <input @keypress.enter="ejecutarBusqueda" v-model="datosBusqueda.search" type="search"
                        class="form-control" placeholder="Buscar...">

                </div>
            </div>

        </div>
        <div class="row">
            <TarjetaProducto v-for="item in listadoProductos" :key="item.id" :producto="item"
                clases="col-lg-3 col-md-4 col-sm-6 mt-4" />


            <div v-show="listadoProductos.length == 0" class="col-12">

                <h5 class="text-center p-5">No se encontraron resultados</h5>

            </div>

        </div>


    </div>



</template>

<script setup>

import { getProductos } from '@/services/productoService'
import { onMounted, ref } from 'vue'

import TarjetaProducto from '@/modules/public/components/TarjetaProducto.vue'



const listadoProductos = ref([])

const datosBusqueda = ref({
    limit: 12,
    page: 1,
    search: ''
})


const ejecutarBusqueda = () => {



    cargarProductos()
}


const cargarProductos = async () => {
    const resultado = await getProductos(datosBusqueda.value)
    listadoProductos.value = resultado.data

}


onMounted(() => {
    cargarProductos()
})






</script>