<template>

    <div class="row">
        <div class="col-12">
            <div class="card my-4">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div
                        class="bg-gradient-dark shadow-dark border-radius-lg px-4 pt-2 d-flex justify-content-between align-items-center">
                        <h6 class="text-white text-capitalize ps-3">Productos</h6>
                        <RouterLink class="btn btn-primary btn-sm" :to="{ name: 'CrearProducto' }">
                            <i class="fas fa-plus"></i> Nuevo Producto
                        </RouterLink>
                    </div>
                </div>
                <div class="card-body px-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Producto</th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        Precio</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Stock</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Categoria</th>
                                    <th
                                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Acciones</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr v-for="item in listadoProductos" :key="item.id">
                                    <td>
                                        <div class="d-flex px-2 py-1">
                                            <div>
                                                <img :src="primeraImagen(item.imagen)"
                                                    class="avatar avatar-lg me-3 border-radius-lg" alt="user1">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="mb-0 text-sm">{{ item.titulo }}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">{{ item.precio }} Bs.</p>
                                    </td>
                                    <td class="align-middle text-center text-sm">
                                        <span class="badge badge-sm "
                                            :class="item.stock < 4 ? 'bg-gradient-danger' : 'bg-gradient-success'">
                                            {{ item.stock }}
                                        </span>
                                    </td>
                                    <td class="align-middle text-center">
                                        <span class="text-secondary text-xs font-weight-bold">{{
                                            item.categoria }}</span>
                                    </td>
                                    <td class="align-middle">
                                        <a href="javascript:;" class="text-info font-weight-bold text-xs"
                                            @click="abrirModal(item.id)" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-eye"> </i>
                                        </a>
                                        <RouterLink :to="{ name: 'EditarProducto', params: { id: item.id } }"
                                            class="text-warning mx-2 font-weight-bold text-xs" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-edit"> </i>
                                        </RouterLink>
                                        <a @click="eliminarProducto(item.id)" href="javascript:;"
                                            class="text-danger font-weight-bold text-xs" data-toggle="tooltip"
                                            data-original-title="Edit user">
                                            <i class="fas fa-trash"> </i>
                                        </a>
                                    </td>
                                </tr>


                            </tbody>

                            <tbody>
                                <tr v-show="listadoProductos.length == 0 && !mostrarSpinner">
                                    <td colspan="100%">
                                        <h5 class="text-center p-5">No se encontraron resultados</h5>

                                    </td>
                                </tr>
                                <tr v-if="mostrarSpinner">
                                    <td colspan="100%">
                                        <div class="col-12 text-center my-5">

                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                    <div>

                        <Pagination :totalItems="totalItems" :porPagina="datosBusqueda.limit"
                            :paginaActual="datosBusqueda.page" @cambiarPagina="cargarProductos" />

                    </div>

                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modalProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content ">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-normal" id="exampleModalLabel">Detalles del Producto</h5>
                    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body card">
                    <span class="badge rounded-pill bg-light text-dark w-30 mt-n2 mx-auto">Disponible</span>
                    <div class="card-header text-center pt-4 pb-3">
                        <h2 class="font-weight-bold mt-2">
                            {{ datosProducto.titulo }}
                        </h2>
                        <h3>
                            {{ datosProducto.precio }} Bs.
                        </h3>
                    </div>
                    <div class="card-body text-lg-start text-center pt-0">

                        <div class="row justify-content-center">

                            <div class="col-md-6">
                                <CarruselProducto :imagenes="imagenesProducto" />

                            </div>
                        </div>


                        <div class="d-flex justify-content-lg-start justify-content-center p-2">
                            <p>Descripción: </p>
                            <p>{{ datosProducto.descripcion }}</p>
                        </div>

                        <div class="d-flex justify-content-lg-start justify-content-center p-2">
                            <span class="ps-3">{{ datosProducto.categoria }} </span>
                        </div>

                        <div class="d-flex justify-content-lg-start justify-content-center p-2">
                            <span class="ps-3">{{ datosProducto.stock }} unidades </span>
                        </div>


                    </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>

import { ref, onMounted } from 'vue';
import { getProductos } from '@/services/productoService'

import { primeraImagen } from '@/helpers/imagenHelper';

import Pagination from '@/components/Pagination.vue'

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getProductoId, deleteProducto } from '@/services/productoService'
import CarruselProducto from '@/components/CarruselProducto.vue';
import { convertirImagen } from '@/helpers/imagenHelper';
import Swal from 'sweetalert2';


const listadoProductos = ref([]);

const datosProducto = ref({
    titulo: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    categoria: '',
    imagen: []

})

const imagenesProducto = ref([])

const mostrarSpinner = ref(false);
const totalItems = ref(0)


const datosBusqueda = ref({
    limit: 10,
    page: 1,
    search: ''
})




const cargarProductos = async (nroPagina = 1) => {
    mostrarSpinner.value = true

    datosBusqueda.value.page = nroPagina

    const resultado = await getProductos(datosBusqueda.value)


    listadoProductos.value = resultado.data

    totalItems.value = resultado.total

    mostrarSpinner.value = false

}

const abrirModal = async (idProducto) => {

    const resultado = await getProductoId(idProducto)


    datosProducto.value = resultado

    imagenesProducto.value = convertirImagen(resultado.imagen)


    const modal = new Modal(document.querySelector('#modalProductos'))

    modal.show()

}


const eliminarProducto = (idProducto) => {


    Swal.fire({
        title: "Esta usted Seguro?",
        text: "¡Esta acción no se puede deshacer!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {


            deleteProducto(idProducto).then(resultado => {
                Swal.fire('Éxito', resultado.message, 'success');
                cargarProductos()
            })

        }
    });




}



onMounted(() => {
    cargarProductos()
})


</script>