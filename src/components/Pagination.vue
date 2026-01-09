<template>

    <div class="pagination-container justify-content-center">
        <ul class="pagination pagination-success">
            <li class="page-item">
                <a class="page-link " :class="{ disabled: paginaActual == 1 }" href="javascript:;"
                    @click="paginaCambiada(paginaActual - 1)" aria-label="Previous">
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            arrow_back
                        </span></span>
                </a>
            </li>





            <li v-for="nroPagina in totalBotones" class="page-item" :class="{ active: nroPagina == paginaActual }">
                <a class="page-link" :class="{ disabled: nroPagina == paginaActual }" href="javascript:;"
                    @click="paginaCambiada(nroPagina)">{{ nroPagina }}</a>
            </li>




            <li class="page-item">
                <a class="page-link" href="javascript:;" aria-label="Next" @click="paginaCambiada(paginaActual + 1)"
                    :class="{ disabled: paginaActual == totalBotones }">
                    <span aria-hidden="true"><span class="material-symbols-rounded">
                            arrow_forward
                        </span></span>
                </a>
            </li>
        </ul>
    </div>


</template>


<script setup>

import { defineProps, defineEmits, computed } from 'vue';


const emits = defineEmits(['cambiarPagina'])

const props = defineProps({
    totalItems: {
        type: Number,
        required: true
    },
    porPagina: {
        type: Number,
        required: true
    },
    paginaActual: {
        type: Number,
        required: true
    }
})

const totalBotones = computed(() => {

    return Math.ceil(props.totalItems / props.porPagina)
})

// const totalBotones = Math.ceil(props.totalItems / props.porPagina)

const paginaCambiada = (pagina) => {
    emits('cambiarPagina', pagina)
}



</script>