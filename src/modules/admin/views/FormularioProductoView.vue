<template>

    <h2>Registro de Producto</h2>
    <div class="card">
        <div class="card-body">


            <Form :validation-schema="productoValidationSchema" @submit="registrarProducto">
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Titulo</label>

                        <div class="input-group input-group-outline ">
                            <Field type="email" class="form-control" name="titulo" v-model="datosProducto.titulo" />
                        </div>
                        <ErrorMessage name="titulo" class="text-danger" />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Categoria</label>

                        <div class="input-group input-group-outline ">
                            <Field as="select" name="categoria_id" id="" v-model="datosProducto.categoria_id"
                                class="form-select border">
                                <option :value="0" selected="">Seleccione</option>
                                <option :value="categoria.id" v-for="categoria in listadoCategorias"
                                    :key="categoria.id">{{ categoria.categoria }}</option>
                            </Field>

                        </div>
                        <ErrorMessage name="categoria_id" class="text-danger" />


                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">Precio</label>

                        <div class="input-group input-group-outline  ">
                            <Field type="number" name="precio" class="form-control" v-model="datosProducto.precio" />
                        </div>
                        <ErrorMessage name="precio" class="text-danger" />

                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Stock</label>

                        <div class="input-group input-group-outline ">
                            <Field type="number" name="stock" class="form-control" v-model="datosProducto.stock" />
                        </div>
                        <ErrorMessage name="stock" class="text-danger" />

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
                            <input type="text" class="form-control py-1" v-model="imagen" />
                            <button type="button" class="btn btn-primary " :class="{ disabled: imagen == '' }"
                                @click="agregarImagen">
                                Agregar
                            </button>
                        </div>
                    </div>

                    <span v-if="errorImagen != false" role="alert" class="text-danger">{{ errorImagen }} </span>


                </div>
                <div class="row mb-3">
                    <div class="col-md-12">
                        <div class="row">

                            <div v-for="(img, index) in listadoImagenes" :key="index" class="col-md-3">
                                <div class="card p-0">
                                    <img :src="img" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg">
                                    <span @click="quitarImagen(index)"
                                        class=" cursor-pointer text-danger position-absolute top-0 end-0 mt-2 me-2">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                </div>
                            </div>

                            <div v-if="listadoImagenes == 0" class="text-center p-5">
                                <p class="h5"> No se adjuntaron Imagenes</p>
                            </div>


                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    {{ route.params.id ? 'Actualizar' : 'Registrar' }} Producto
                </button>
            </Form>
        </div>
    </div>

</template>

<script setup>

import { reactive, onMounted, ref, computed } from 'vue';
import { getCategorias } from '@/services/categoriaService'
import { productoValidationSchema } from '@/modules/admin/schemas/productoValidationSchema'
import { Form, Field, ErrorMessage } from 'vee-validate';


import { setProducto, getProductoId, updateProducto } from '@/services/productoService'

import { useRouter, useRoute } from 'vue-router';
import Swal from 'sweetalert2';


const datosProducto = reactive({
    titulo: "",
    descripcion: "",
    imagen: "",
    precio: 0,
    stock: 0,
    categoria_id: 0
})

const router = useRouter()
const route = useRoute()
const imagen = ref("")

const listadoImagenes = ref([])

const listadoCategorias = ref([])

const cargarCategorias = async () => {

    const resultado = await getCategorias()
    listadoCategorias.value = resultado.data
}

const listarProductoID = async (idProducto) => {

    const resultado = await getProductoId(idProducto)

    datosProducto.titulo = resultado.titulo
    datosProducto.descripcion = resultado.descripcion
    datosProducto.precio = resultado.precio
    datosProducto.stock = resultado.stock
    datosProducto.categoria_id = resultado.categoria_id
    datosProducto.imagen = resultado.imagen
    listadoImagenes.value = JSON.parse(resultado.imagen)

}


onMounted(() => {

    if (route.params.id) {
        listarProductoID(route.params.id)
    }

    cargarCategorias()
})




const agregarImagen = () => {

    listadoImagenes.value.push(imagen.value)
    imagen.value = ""
}

const quitarImagen = (indice) => {
    listadoImagenes.value.splice(indice, 1)
}

const registrarProducto = async () => {

    datosProducto.imagen = JSON.stringify(listadoImagenes.value)


    if (route.params.id) {

        var resultado = await updateProducto(datosProducto, route.params.id)

    } else {
        var resultado = await setProducto(datosProducto)


    }


    Swal.fire('Éxito', resultado.message, 'success');

    router.push({ name: 'CrudProductos' })


}


const errorImagen = computed(() => {


    if (listadoImagenes.value.length != 0) {
        return false
    }

    return "Debe agregar al menos una imagen"

})

</script>