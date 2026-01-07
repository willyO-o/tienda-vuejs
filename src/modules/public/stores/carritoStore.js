import { defineStore } from "pinia";

import { ref, computed } from "vue";


const useCarritoStore = defineStore(
    'carrito',
    () => {

        const carrito = ref([])

        const agregarAlCarrito = (producto, cantidad = 1) => {



            const existeEnCarrito = carrito.value.find(item => item.id == producto.id)


            if (existeEnCarrito) {
                let cantidadTotal = existeEnCarrito.cantidad + cantidad;

                if (cantidadTotal > producto.stock) {
                    existeEnCarrito.cantidad = producto.stock;
                } else {
                    existeEnCarrito.cantidad += cantidad;

                }

            } else {
                carrito.value.push({ ...producto, cantidad: cantidad });
            }

        }


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

    },
    {
        persist: true,
        storage: localStorage,
    }

)



export default useCarritoStore;