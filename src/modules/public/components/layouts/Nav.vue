<template>
    <!-- Navbar Transparent -->
    <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent ">
        <div class="container">
            <RouterLink class="navbar-brand  text-white " to="/" rel="tooltip"
                title="Designed and Coded by Creative Tim" data-placement="bottom">
                Mi Tienda
            </RouterLink>
            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </span>
            </button>
            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
                <ul class="navbar-nav navbar-nav-hover ms-auto">

                    <li class="nav-item ms-lg-auto">
                        <RouterLink class="nav-link nav-link-icon me-2" to="/">
                            <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                data-bs-placement="bottom" title="Star us on Github">Inicio</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item ms-lg-auto">
                        <RouterLink class="nav-link nav-link-icon me-2" to="/tienda">
                            <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                data-bs-placement="bottom" title="Star us on Github">Tienda</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item ms-lg-auto">
                        <RouterLink class="nav-link nav-link-icon me-2" to="/quienes-somos">
                            <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                data-bs-placement="bottom" title="Star us on Github">Quienes Somos</p>
                        </RouterLink>
                    </li>
                    <li class="nav-item ms-lg-auto">
                        <RouterLink class="nav-link nav-link-icon me-2" to="/contacto">
                            <p class="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                data-bs-placement="bottom" title="Star us on Github">Contacto</p>
                        </RouterLink>
                    </li>

                    <li class="nav-item dropdown dropdown-hover ">
                        <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                            id="dropdownMenuPages8" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="material-symbols-rounded opacity-6 me-2 text-md">shopping_cart</i>

                        </a>
                        <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                            aria-labelledby="dropdownMenuPages8">
                            <div class=" d-lg-block">


                                <CarritoCompras />

                            </div>
                            <!-- <div class="d-lg-none">
                                <h6 class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                    Landing Pages pantalla pequeña
                                </h6>
                                <a href="/pages/about-us.html" class="dropdown-item border-radius-md">
                                    <span>About Us</span>
                                </a>
                                <a href="/pages/contact-us.html" class="dropdown-item border-radius-md">
                                    <span>Contact Us</span>
                                </a>
                                <a href="/pages/author.html" class="dropdown-item border-radius-md">
                                    <span>Author</span>
                                </a>
                                <h6
                                    class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                                    Account
                                </h6>
                                <a href="/pages/sign-in.html" class="dropdown-item border-radius-md">
                                    <span>Sign In</span>
                                </a>
                            </div> -->
                        </div>
                    </li>

                    <li class="nav-item my-auto ms-3 ms-lg-0">
                        <RouterLink to="/login" class="btn btn-sm  bg-white  mb-0 me-1 mt-2 mt-md-0">Iniciar Sesión
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>


<script setup>

import CarritoCompras from '@/modules/public/components/CarritoCompras.vue';

</script>