<template>

    <h2>Registro de Producto</h2>
    <div class="card">
        <div class="card-body">


            <form>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Titulo</label>

                        <div class="input-group input-group-outline ">
                            <input type="email" class="form-control" v-model="datosProducto.titulo">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Categoria</label>

                        <div class="input-group input-group-outline ">

                            <select name="" id="" v-model="datosProducto.categoria_id" class="form-select border">
                                <option value="" selected="">Seleccione</option>
                                <option :value="categoria.id" v-for="categoria in listadoCategorias"
                                    :key="categoria.id">{{ categoria.categoria }}</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Precio</label>

                        <div class="input-group input-group-outline  ">
                            <input type="number" class="form-control" v-model="datosProducto.precio">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Stock</label>

                        <div class="input-group input-group-outline ">
                            <input type="number" class="form-control" v-model="datosProducto.stock">
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <label class="form-label">Descripcion</label>

                        <div class="input-group input-group-outline  ">
                            <textarea class="form-control" v-model="datosProducto.descripcion" rows="6"></textarea>
                        </div>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <label class="form-label">Imagenes</label>

                        <div class="input-group input-group-outline  ">
                            <input type="text" class="form-control " v-model="imagen" />
                            <button class="btn btn-primary ">
                                Agregar
                            </button>
                        </div>
                    </div>


                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">

                                <div class="card p-0">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNL1qOw4TgITZl5F2utJvaCIB5rVWzdLEVrw&s"
                                        alt="img-blur-shadow" class="img-fluid shadow border-radius-lg">
                                    <a href="" class="text-danger position-absolute top-0 end-0 mt-2 me-2">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script setup>

import { reactive, onMounted, ref } from 'vue';
import { getCategorias } from '@/services/categoriaService'

const datosProducto = reactive({
    titulo: "iPhone 13",
    descripcion: "Nuevo iPhone 13",
    imagen: "[\"https://cdnx.jumpseller.com/kadrihel1/image/39075964/resize/635/635?1693415938\",\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_U-mBlGNXylsj4G7Ryqd_m_l_P_OHIhUzb4UE5vF8JZ_X12lHvOpDNP88m7pTsqrzpw&usqp=CAU\"]",
    precio: 999.99,
    stock: 100,
    categoria_id: ""
})

const imagen = ref("")

const listadoCategorias = ref([])

const cargarCategorias = async () => {

    const resultado = await getCategorias()

    listadoCategorias.value = resultado.data
    console.log("categorias ", resultado);
}

onMounted(() => {
    cargarCategorias()
})


</script>