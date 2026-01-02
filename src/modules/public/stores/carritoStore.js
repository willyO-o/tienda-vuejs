import { defineStore } from "pinia";

import { ref, computed } from "vue";


const useCarritoStore = defineStore('carrito', () => {

    const carrito = ref([])

    const agregarAlCarrito = (producto => {



        const existeEnCarrito = carrito.value.find(item => item.id == producto.id)

        if (existeEnCarrito) {

            existeEnCarrito.cantidad += 1

        } else {
            carrito.value.push({ ...producto, cantidad: 1 });
        }

    })


    const elimiarDelCarrito = (idProducto) => {

        carrito.value = carrito.value.filter(items => items.id !== idProducto)

    }

    const calcularTotal = computed(() => {

        return carrito.value.reduce((total, item) => total + item.precio * item.cantidad, 0)
    })








    return {
        carrito,
        agregarAlCarrito,
        elimiarDelCarrito,
        calcularTotal
    }

})


export default useCarritoStore;