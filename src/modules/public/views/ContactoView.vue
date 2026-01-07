<template>

    <section>
        <div class="page-header min-vh-100">
            <div class="container">
                <div class="row">
                    <div
                        class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                        <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                            style="background-image: url('https://images.unsplash.com/photo-1579541764764-6401d4100dd7?q=80&w=1400&auto=format&fit=crop'); background-size: cover;"
                            loading="lazy"></div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                        <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                            <div class="card-header p-0 position-relative mt-2 mx-2 z-index-2 bg-transparent">
                                <div class="bg-dark shadow-dark border-radius-md p-3">
                                    <h5 class="text-white text-primary mb-0">Contacto</h5>
                                    <p class="text-white text-sm mb-0">Para más preguntas, contáctanos usando nuestro
                                        formulario de contacto.</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="pb-3">
                                    Si tienes alguna duda o consulta, no dudes en contactarnos completando el siguiente
                                    formulario.
                                </p>
                                <Form :validation-schema="contactoValidationSchema" @submit="enviarMensaje"
                                    id="contact-form" method="post" autocomplete="off">
                                    <div class="card-body p-0 my-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-group input-group-static ">
                                                    <label>Nombre completo</label>
                                                    <Field type="text" name="nombre_completo" class="form-control"
                                                        v-model="datosContacto.nombre_completo" />
                                                </div>
                                                <ErrorMessage name="nombre_completo" class="text-danger small" />
                                            </div>
                                            <div class="col-md-6 ps-md-2">
                                                <div class="input-group input-group-static ">
                                                    <label>Tu Correo</label>
                                                    <Field type="email" name="correo" class="form-control"
                                                        v-model="datosContacto.correo" />
                                                </div>
                                                <ErrorMessage name="correo" class="text-danger small" />

                                            </div>
                                        </div>
                                        <div class="form-group mb-0 mt-md-4 mt-4">
                                            <div class="input-group input-group-static ">
                                                <label>¿Cómo podemos ayudarte?</label>
                                                <Field as="textarea" name="mensaje" class="form-control" id="message"
                                                    rows="6" v-model="datosContacto.mensaje"
                                                    placeholder="Describe tu problema en al menos 250 caracteres" />
                                            </div>
                                            <ErrorMessage name="mensaje" class="text-danger small" />
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <button type="submit" class="btn bg-gradient-dark mt-3 mb-0">Enviar
                                                    Mensaje</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

import { reactive } from 'vue';
import { contactoValidationSchema } from '@/modules/public/schemas/contactoValidationSchema.js';
import { Form, Field, ErrorMessage } from 'vee-validate'
import { registrarContacto } from '@/services/contactoService'

import Swal from 'sweetalert2'



const datosContacto = reactive({
    nombre_completo: "",
    correo: "",
    mensaje: ""
})


const enviarMensaje = async () => {


    try {
        const resultado = await registrarContacto(datosContacto)


        datosContacto.nombre_completo = ""
        datosContacto.correo = ""
        datosContacto.mensaje = ""

        Swal.fire({
            icon: "success",
            title: "Exitoso",
            text: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.",
        });


    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Ocurrio un error al enviar el mensaje. Inténtalo de nuevo más tarde.",
        });

    }
    // alert(`Mensaje enviado...`);

}



</script>