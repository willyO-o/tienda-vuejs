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

        <div class="row" v-if="mostrarSpinner">
            <div class="col-12 text-center my-5">

                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>

        <div v-else class="row">
            <TarjetaProducto v-for="item in listadoProductos" :key="item.id" :producto="item"
                clases="col-lg-3 col-md-4 col-sm-6 mt-4" />


            <div v-show="listadoProductos.length == 0" class="col-12">

                <h5 class="text-center p-5">No se encontraron resultados</h5>

            </div>

            <div v-if="listadoProductos.length > 0" class="row justify-content-center">
                <div class="col-auto my-4">
                    <Pagination :totalItems="totalItems" :porPagina="datosBusqueda.limit"
                        :paginaActual="datosBusqueda.page" @cambiarPagina="cargarProductos" />

                </div>
            </div>

        </div>


    </div>



</template>

<script setup>

import TarjetaProducto from '@/modules/public/components/TarjetaProducto.vue'
import Pagination from '@/components/Pagination.vue'

import { getProductos } from '@/services/productoService'
import { onMounted, ref } from 'vue'





const listadoProductos = ref([])

const mostrarSpinner = ref(false)

const totalItems = ref(0)

const datosBusqueda = ref({
    limit: 12,
    page: 1,
    search: ''
})


const ejecutarBusqueda = () => {

    cargarProductos()
}


const cargarProductos = async (nroPagina = 1) => {
    mostrarSpinner.value = true

    datosBusqueda.value.page = nroPagina

    const resultado = await getProductos(datosBusqueda.value)


    listadoProductos.value = resultado.data
    totalItems.value = resultado.total

    mostrarSpinner.value = false

}


onMounted(() => {
    cargarProductos()
})






</script>