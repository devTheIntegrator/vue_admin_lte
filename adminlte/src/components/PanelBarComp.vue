<script setup>

import { RouterLink } from 'vue-router';
import { ref } from 'vue';

// สร้าง state สำหรับเมนูที่ active
const activeMenu = ref('dashboard');

// ฟังก์ชั่นเพื่อเปลี่ยนเมนูที่ active เมื่อคลิก
const setActiveMenu = (menu) => {
    activeMenu.value = menu;
}

</script>

<template>
    <!-- navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" role="button">
                    <i class="nav-icon fa-solid fa-bars"></i>
                </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <RouterLink to="/about" class="nav-link">About</RouterLink>
            </li>
        </ul>

        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" data-widget="navbar-search" role="button">
                    <i class="fas fa-search"></i>
                </a>
                <div class="navbar-search-block">
                    <form action="" class="form-inline">
                        <div class="input-group input-group-sm">
                            <input type="search" class="form-control form-control-navbar" placeholder="Search"
                                aria-label="Search">
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        </ul>
    </nav>

    <!-- sidebar -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <RouterLink to="/dashboard" class="brand-link">
            <img src="../assets/icons/Logo.png" alt="Colour Logo" class="brand-image img-circle elevation-3">
            <span class="brand-text font-weight-light">CRR: Admin</span>
        </RouterLink>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="https://placehold.co/160x160" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Lorem Ipsum</a>
                </div>
            </div>

            <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                    <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                        aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-sidebar">
                            <i class="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- dashboard menu -->
                    <li class="nav-item menu-open">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'dashboard' }"
                            @click="setActiveMenu('dashboard')">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>
                                Dashboard
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link active">
                                    <i class="fa-solid fa-database nav-icon"></i>
                                    <p>Database</p>
                                </a>
                            </li> -->
                        </ul>
                    </li>

                    <!-- master data configuration menu -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'master-data' }"
                            @click="setActiveMenu('master-data')">
                            <i class="nav-icon fas fa-th"></i>
                            <p>
                                Master Data Config
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview" style="margin-left: 20px;">
                            <li class="nav-item">
                                <RouterLink to="/database" class="nav-link"
                                    :class="{ 'active': activeMenu === 'database' }" @click="setActiveMenu('database')">
                                    <i class="fa-solid fa-database nav-icon"></i>
                                    <p>Database</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/can-data" class="nav-link"
                                    :class="{ 'active': activeMenu === 'can-data' }" @click="setActiveMenu('can-data')">
                                    <i class="fa-solid fa-box-archive nav-icon"></i>
                                    <p>Can Data</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/unit-of-measurements" class="nav-link"
                                    :class="{ 'active': activeMenu === 'unit-of-measurements' }"
                                    @click="setActiveMenu('unit-of-measurements')">
                                    <i class="fa-solid fa-scale-balanced nav-icon"></i>
                                    <p>Unit of Measurements</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/group-products" class="nav-link"
                                    :class="{ 'active': activeMenu === 'group-products' }"
                                    @click="setActiveMenu('group-products')">
                                    <i class="fa-solid fa-layer-group nav-icon"></i>
                                    <p>Group & Products</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/shades" class="nav-link" :class="{ 'active': activeMenu === 'shades' }"
                                    @click="setActiveMenu('shades')">
                                    <i class="fa-solid fa-palette nav-icon"></i>
                                    <p>Shades</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/pricings" class="nav-link"
                                    :class="{ 'active': activeMenu === 'pricings' }" @click="setActiveMenu('pricings')">
                                    <i class="fa-solid fa-dollar-sign nav-icon"></i>
                                    <p>Pricings</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/discount-vat" class="nav-link"
                                    :class="{ 'active': activeMenu === 'discount-vat' }"
                                    @click="setActiveMenu('discount-vat')">
                                    <i class="fa-solid fa-percent nav-icon"></i>
                                    <p>Discount & VAT</p>
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/import-export" class="nav-link"
                                    :class="{ 'active': activeMenu === 'import-export' }"
                                    @click="setActiveMenu('import-export')">
                                    <i class="fa-solid fa-cloud-arrow-up nav-icon"></i>
                                    <p>Import/Export</p>
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <!-- machines menu -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'machines' }"
                            @click="setActiveMenu('machines')">
                            <i class="nav-icon fa-solid fa-cube"></i>
                            <p>
                                Machines
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>ChartJS</p>
                                </a>
                            </li> -->
                        </ul>
                    </li>
                    <!-- system management menu -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'system-management' }"
                            @click="setActiveMenu('system-management')">
                            <i class="nav-icon fa-solid fa-paste"></i>
                            <p>
                                System Management
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- <li class="nav-item">
                                <a href="pages/UI/general.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>General</p>
                                </a>
                            </li> -->
                        </ul>
                    </li>
                    <!-- user & permissions menu -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'user-permissions' }"
                            @click="setActiveMenu('user-permissions')">
                            <i class="nav-icon fa-solid fa-tree"></i>
                            <p>
                                User & Permissions
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- <li class="nav-item">
                                <a href="pages/forms/general.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>General Elements</p>
                                </a>
                            </li> -->
                        </ul>
                    </li>
                    <!-- history & logs -->
                    <li class="nav-item">
                        <a href="#" class="nav-link" :class="{ 'active': activeMenu === 'history-logs' }"
                            @click="setActiveMenu('history-logs')">
                            <i class="nav-icon fa-solid fa-pen-to-square"></i>
                            <p>
                                History & Logs
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <!-- <li class="nav-item">
                                <a href="pages/tables/simple.html" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Simple Tables</p>
                                </a>
                            </li> -->
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<style scoped>
.nav-treeview {
    transition: margin-left 0.3s ease;
}
</style>