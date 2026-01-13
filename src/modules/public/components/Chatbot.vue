<template>


    <div class="chatbot position-fixed bottom-0 end-0 pb-4 z-index-3">


        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Asistente Virtual</h5>
            </div>
            <div class="card-body p-2 overflow-auto" style="height: 300px; width: 350px;">

                <div>



                    <div v-for="(mensaje, index) in mensajes" :key="index">

                        <p v-if="mensaje.respuesta != ''" class="text-end  bg-info text-white">{{ mensaje.respuesta
                        }}</p>

                        <p v-else class="text-start  bg-light text-dark">{{ mensaje.pregunta }}</p>
                    </div>

                </div>




            </div>

            <div class="card-footer">
                <div class="row">
                    <div class="col-auto">
                        <input type="text" v-model="prompt" class="form-control" placeholder="Escribe tu mensaje..." />
                    </div>
                    <div class="col">
                        <button class="btn btn-primary" @click="chatear">
                            <i class="fa fa-paper-plane"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>


    </div>





</template>


<script setup>

import { ref } from 'vue';

import axios from 'axios';

const apiKey = ''



const prompt = ref('');

const mensajes = ref([{
    pregunta: 'Hola! ¿En qué puedo ayudarte hoy?',
    respuesta: ''
}]);




const chatear = async () => {

    mensajes.value.push({
        pregunta: prompt.value,
        respuesta: ''
    });

    const respuesta = await axios.post('https://api.groq.com/openai/v1/chat/completions',
        {
            messages: [
                {
                    role: "user",
                    content: prompt.value
                }
            ],
            model: "openai/gpt-oss-120b",
            temperature: 1,
            max_completion_tokens: 1000,
            top_p: 1,
            stream: false, // stram en estado false 
            // reasoning_effort: "medium",
            stop: null

        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
        }
    )


    const data = respuesta.data;

    console.log(data);

    const answer = data.choices?.[0]?.message?.content || "Sin respuesta";


    mensajes.value.push({
        pregunta: '',
        respuesta: answer
    });









}



</script>