import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/modules/public/views/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'Inicio',
          component: () => import('@/modules/public/views/InicioView.vue')
        },
        {
          path: 'tienda',
          name: 'Tienda',
          component: () => import('@/modules/public/views/TiendaView.vue')
        },
        {
          path: 'quienes-somos',
          name: 'QuienesSomos',
          component: () => import('@/modules/public/views/QuienesSomosView.vue')
        },
        {
          path: 'contacto',
          name: 'Contacto',
          component: () => import('@/modules/public/views/ContactoView.vue')

        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/modules/public/views/LoginView.vue')

        },
        {
          path: 'carrito',
          name: 'Carrito',
          component: () => import('@/modules/public/views/CarritoView.vue')

        },
        {
          path: 'detalle-producto/:id',
          name: 'DetalleProducto',
          component: () => import('@/modules/public/views/DetalleProductoView.vue')

        },

      ]

    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: () => import('@/modules/admin/views/AdminLayout.vue'),
      meta: { requiereAutenticacion: true, rol: 'admin' },
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token')
        if (!token) {
          next({ name: 'Login' })
        } else {
          next()
        }

      },
      children: [
        {
          path: '',
          name: 'Tablero',
          component: () => import('@/modules/admin/views/TableroView.vue')

        },
        {
          path: 'productos',
          name: 'CrudProductos',
          component: () => import('@/modules/admin/views/ProductoView.vue')
        },
        {
          path: 'productos/crear',
          name: 'CrearProducto',
          component: () => import('@/modules/admin/views/FormularioProductoView.vue')


        },
        {
          path: 'productos/editar/:id',
          name: 'EditarProducto',
          component: () => import('@/modules/admin/views/FormularioProductoView.vue')
        }
      ]
    }
  ],
})

// router.beforeEach((to, from, next) => {

//   const rol = to.meta.rol
//   const requiereAthenticacion = to.meta.requiereAutenticacion
//   const rolUsuario = 'admin'
//   if (requiereAthenticacion) {

//     if (rol === rolUsuario) {
//       next()
//     } else {
//       next({ name: 'Inicio' })
//     }

//   } else {
//     next()
//   }

// })

export default router
