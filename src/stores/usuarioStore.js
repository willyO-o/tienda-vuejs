import { defineStore } from 'pinia'
import { ref } from 'vue'


const useUsuarioStore = defineStore(
    'usuario',
    () => {
        const usuario = ref({})

        const setUsuario = (datosUsuario) => {

            usuario.value = { ...datosUsuario }
        }

        const deleteUsuario = () => {
            usuario.value = {}
        }

        return {
            usuario,
            setUsuario,
            deleteUsuario
        }


    },
    {
        persist: true,
        storage: localStorage,
    }
)

export default useUsuarioStore
