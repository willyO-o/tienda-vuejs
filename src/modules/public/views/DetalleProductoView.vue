<template>




    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <!-- Section with four info areas left & one card right with image and waves -->

        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active">
                            </li>
                            <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div v-for="(img, index) in convertirImagen(producto.imagen)" :key="index"
                                class="carousel-item" :class="{ active: index == 0 }">
                                <img class="d-block w-100" :src="img" alt="First slide">
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Anterior</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Siguiente</span>
                        </a>
                    </div>

                </div>

                <div class="col-md-6">






                    <div class="card shadow-lg">
                        <span class="badge rounded-pill bg-dark text-white w-30 mt-n2 mx-auto">Producto Nuevo</span>
                        <div class="card-header text-start pt-4 pb-3 ">
                            <h1 class="font-weight-bold mt-2">
                                {{ producto.titulo }}
                            </h1>
                            <p class=" mt-2 h2">
                                <small class="text-lg mb-auto">Precio Bs.:</small>{{ producto.precio }}
                            </p>
                        </div>
                        <div class="card-body text-lg-start text-center pt-0">
                            <div class="d-flex justify-content-lg-start justify-content-center p-2">
                                <i class="material-symbols-rounded my-auto">remove</i>
                                <span class="ps-3">Categoria: {{ producto.categoria }}</span>
                            </div>

                            <div class="d-flex justify-content-lg-start justify-content-center p-2">
                                <i class="material-symbols-rounded my-auto">remove</i>
                                <span class="ps-3 text-muted">Cantidad disponible: {{ producto.stock }} </span>
                            </div>




                            <div class="d-flex justify-content-start  p-2">

                                <div class="d-flex justify-content-start align-items-center">
                                    <span class="btn btn-dark" id="basic-addon1" @click="reducirCantidad()">
                                        <i class="fas fa-minus"></i>
                                    </span>
                                    <input type="number" class="form-control w-25" v-model="cantidad">

                                    <span class="btn btn-dark" id="basic-addon2" @click="adicionarCantidad()">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                </div>

                                <button class="btn btn-dark" @click="carritoStore.agregarAlCarrito(producto, cantidad)">
                                    <i class="fas fa-shopping-cart"></i>
                                    Añadir al Carrito
                                </button>


                            </div>

                            <a href="javascript:;" class="btn btn-icon bg-gradient-info d-lg-block mt-3 mb-0">
                                <i class="fab fa-paypal me-2"></i>
                                Pagar con PayPal
                                <i class="fas fa-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body p-5">

                            <h3>Descripción del producto</h3>
                            <p class="text-md">
                                {{ producto.descripcion }}
                            </p>


                        </div>
                    </div>

                </div>



            </div>

        </div>


    </div>



</template>

<script setup>

import { convertirImagen } from '@/helpers/imagenHelper';

import { getProductoId } from '@/services/productoService';

import { ref, onMounted } from 'vue';

import { useRoute } from 'vue-router';


import useCarritoStore from '@/modules/public/stores/carritoStore';


const carritoStore = useCarritoStore();
const router = useRoute();


const cantidad = ref(1);


const producto = ref({
    imagen: '[]',
});


const extraerDatosProducto = async () => {

    const idProducto = router.params.id

    const resultado = await getProductoId(idProducto);
    producto.value = resultado;

    console.log(producto.value);
}



const adicionarCantidad = () => {

    if (cantidad.value < producto.value.stock) {
        cantidad.value += 1;
    }

}

const reducirCantidad = () => {

    if (cantidad.value > 1) {
        cantidad.value -= 1;
    }

}

onMounted(() => {

    extraerDatosProducto();


})






</script>