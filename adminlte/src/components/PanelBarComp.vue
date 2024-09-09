<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link" data-widget="pushmenu" role="button">
                    <i class="nav-icon fa-solid fa-bars"></i>
                </a>
            </li>
            <li class="nav-item d-none d-sm-inline-block"></li>
            <li class="nav-item d-none d-sm-inline-block"></li>
        </ul>
    </nav>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- logo -->
        <RouterLink to="/" class="brand-link">
            <img src="../assets/icons/Logo.png" alt="Logo Main">
            <span class="brand-text font-weight-light">Colour Artisan: Admin</span>
        </RouterLink>

        <!-- sidebar -->
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="https://placehold.co/25x25" alt="User Image" class="img-circle elevation-2">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Lorem, ipsum.</a>
                </div>
            </div>
        </div>

        <!-- sidebar search from -->
        <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- sidebar menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-cog"></i>
                        <p>
                            Master Data Configuration
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-box"></i>
                        <p>
                            Machines
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tree"></i>
                        <p>
                            System Management
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-users-cog"></i>
                        <p>
                            Users & Permissions
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-edit"></i>
                        <p>
                            History & Logs
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
</template>