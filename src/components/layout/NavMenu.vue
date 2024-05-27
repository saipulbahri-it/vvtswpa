<template>
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <IconHome />
                        </span>
                        <span class="nav-link-title"> Dashboard </span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/wilayah">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <IconStar />
                        </span>
                        <span class="nav-link-title"> Votes </span>
                        <span class="badge badge-sm bg-red">2</span>
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#navbar-third" data-bs-toggle="dropdown"
                        data-bs-auto-close="outside" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <IconSettings />
                        </span>
                        <span class="nav-link-title"> Manajemen </span>
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/manage/user/korwil"> Koordinator </a>
                        <a class="dropdown-item" href="/manage/user/saksi"> Saksi </a>
                        <a class="dropdown-item" href="/manage/user/admin"> Admin </a>
                        <a class="dropdown-item" href="/manage/user/admin"> TPS </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/aduan">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <IconNote />
                        </span>
                        <span class="nav-link-title"> Aduan </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { IconHome, IconNote, IconSettings, IconStar } from "@tabler/icons-vue";
</script>
