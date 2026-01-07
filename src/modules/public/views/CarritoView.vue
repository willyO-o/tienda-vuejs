<template>




    <div class="card  card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <!-- Section with four info areas left & one card right with image and waves -->
        <h2 class="text-center">Carrito de compras</h2>

        <div class="container py-5">
            <div class="row">

                <div class="col-md-8">

                    <div class="card">
                        <div class="table-responsive">
                            <table class="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Producto</th>
                                        <th
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                            Cantidad</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Precio Unitario</th>
                                        <th
                                            class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                            Sub total</th>

                                        <th class="text-secondary opacity-7"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in carritoStore.carrito" :key="item.id">
                                        <td>
                                            <div class="d-flex px-2 py-1">
                                                <div>
                                                    <img :src="primeraImagen(item.imagen)"
                                                        class="avatar avatar-md me-3">
                                                </div>
                                                <div class="d-flex flex-column justify-content-center">
                                                    <RouterLink class="text-decoration-none text-dark"
                                                        :to="`/detalle-producto/${item.id}`">
                                                        <h6 class="mb-0 text-xs">{{ item.titulo }}</h6>
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-center align-items-center">
                                                <span class="btn btn-dark" id="basic-addon1"
                                                    @click="reducirCantidad(item)">
                                                    <i class="fas fa-minus"></i>
                                                </span>
                                                <input type="number" class="form-control" v-model="item.cantidad">

                                                <span class="btn btn-dark" id="basic-addon2"
                                                    @click="adicionarCantidad(item)">
                                                    <i class="fas fa-plus"></i>
                                                </span>
                                            </div>
                                        </td>

                                        <td class="align-middle text-center text-sm">
                                            <span class="">{{ item.precio }}
                                                bs.</span>
                                        </td>
                                        <td class="align-middle text-center text-sm">
                                            <span class="">{{ item.precio * item.cantidad }}
                                                bs.</span>
                                        </td>

                                        <td class="align-middle">
                                            <a @click="carritoStore.elimiarDelCarrito(item.id)" href="javascript:;"
                                                class="text-secondary font-weight-normal text-xs" data-toggle="tooltip"
                                                data-original-title="Edit user">
                                                <i class="fas fa-trash-alt text-danger"></i>
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
                <div class="col-md-4">

                    <div class="card">
                        <div class="card-body">
                            <h5>Resumen del Pedido</h5>

                            <h3>Total : <b>{{ carritoStore.calcularTotal }} bs.</b></h3>

                            <button class="btn btn-primary btn-lg w-100 mt-3">
                                Pagar
                            </button>


                        </div>

                    </div>


                </div>

            </div>
        </div>


    </div>



</template>

<script setup>


import useCarritoStore from '@/modules/public/stores/carritoStore';
import { primeraImagen } from '@/helpers/imagenHelper';




const carritoStore = useCarritoStore();




const adicionarCantidad = (producto) => {
    producto.cantidad += 1;

}

const reducirCantidad = (producto) => {

    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
    }
}

</script>