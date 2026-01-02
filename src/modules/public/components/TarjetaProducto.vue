<template>

    <div :class="clases">
        <div class="card">
            <div class="card-header p-0 position-relative mt-2 mx-2 z-index-2">
                <a class="d-block blur-shadow-image">
                    <img :src="primeraImagen(producto.imagen)" alt="img-colored-shadow"
                        class="img-fluid w-100 border-radius-lg">
                </a>
            </div>
            <div class="card-body text-center">
                <h5 class="font-weight-normal">
                    <RouterLink :to="`/detalle-producto/${producto.id}`">{{ producto.titulo }}</RouterLink>
                </h5>
                <h4>
                    {{ producto.precio }} Bs.
                </h4>
                <p class="mb-0">
                    {{ extractoTexto(producto.descripcion) }}
                </p>
                <button @click="carritoStore.agregarAlCarrito(producto)" type="button"
                    class="btn bg-gradient-info btn-sm mb-0 mt-3">
                    Añadir al carrito
                </button>
            </div>
        </div>


    </div>

</template>


<script setup>

import { defineProps } from 'vue';
import { extractoTexto } from '@/helpers/textHelper'
import { primeraImagen } from '@/helpers/imagenHelper'

import useCarritoStore from '@/modules/public/stores/carritoStore'

const carritoStore = useCarritoStore()





const props = defineProps({
    producto: {
        type: Object,
        required: false
    },
    clases: {
        type: String,
        required: false,
        default: 'col-lg-4 col-md-6 mt-lg-0 mt-4'
    }
})

</script>