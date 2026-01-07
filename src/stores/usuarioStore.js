import { defineStore } from 'pinia'
import { ref } from 'vue'


const useUsuarioStore = defineStore(
    'usuario',
    () => {
        const usuario = ref({})

        const setUsuario = (datosUsuario) => {
            usuario.value = datosUsuario
        }

        return {
            usuario,
            setUsuario
        }


    },
    {
        persist: true,
        storage: localStorage,
    }
)

export default useUsuarioStore
