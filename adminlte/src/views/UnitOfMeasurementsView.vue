<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fiuid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">ยินดีต้อนรับสู่หน้า Unit of Measurements</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <RouterLink to="/">Dashboard</RouterLink>
                            </li>
                            <li class="breadcrumb-item active">
                                <RouterLink to="/unit-of-measurements">Unit of Measurements</RouterLink>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>