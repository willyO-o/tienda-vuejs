<template>
    <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
        Carrito de Compras
    </h6>

    <ul class="list-group overflow-auto border-top border-bottom" style="max-height: 200px;">


        <li v-for="item in carritoStore.carrito" :key="item.id"
            class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
            <div class="avatar me-3">
                <img v-bind:src="primeraImagen(item.imagen)" alt="kal" class="border-radius-lg shadow">
            </div>
            <div class="d-flex align-items-start flex-column justify-content-center">
                <h6 class="mb-0 text-sm">{{ item.titulo }}</h6>
                <p class="mb-0 text-xs">{{ item.cantidad }} x {{ item.precio }}Bs.</p>
            </div>
            <a @click="carritoStore.elimiarDelCarrito(item.id)"
                class="btn text-danger btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">
                <i class="fa-solid fa-trash"></i>
            </a>
        </li>



        <li v-if="carritoStore.carrito.length == 0">
            <p class="text-center text-sm">No hay productos en el carrito</p>

        </li>




    </ul>

    <li v-if="carritoStore.carrito.length !== 0">
        <p class="text-start text-sm">Total a pagar Bs. <b>{{ carritoStore.calcularTotal }}</b></p>

    </li>
    <div class="d-flex justify-content-between">
        <RouterLink to="/carrito" class="text-sm text-dark text-link">Ver Carrito
        </RouterLink>
        <RouterLink to="/checkout" class="text-sm">Ir a Pagar</RouterLink>
    </div>



</template>

<script setup>

import useCarritoStore from '@/modules/public/stores/carritoStore'

import { primeraImagen } from '@/helpers/imagenHelper'

const carritoStore = useCarritoStore()


</script>