<template>
    <div class="collapse navbar-collapse" id="navbar-menu">
        <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul class="navbar-nav">
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }" :to="'/'">
                    <li class="nav-item" v-bind="$attrs" :class="{ 'active': isActive }">
                        <a v-bind="$attrs" @click="navigate" :href="href" class="nav-link"
                            :class="isActive ? activeClass : inactiveClass">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <IconHome />
                            </span>
                            <span class="nav-link-title"> Dashboard </span>
                        </a>
                    </li>
                </router-link>
                <router-link v-bind="$props" custom v-slot="{ isActive, href, navigate }" to="/v/11">
                    <li class="nav-item" :class="{ 'active': isActive }">
                        <a v-bind="$attrs" @click="navigate" :href="href" class="nav-link"
                            :class="isActive ? activeClass : inactiveClass">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <IconStar />
                            </span>
                            <span class="nav-link-title"> Votes </span>
                            <span class="badge badge-sm bg-red-lt">2</span>
                        </a>
                    </li>
                </router-link>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#navbar-third" data-bs-toggle="dropdown"
                        data-bs-auto-close="true" role="button" aria-expanded="false">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <IconSettings />
                        </span>
                        <span class="nav-link-title"> Users </span>
                    </a>
                    <div class="dropdown-menu">
                        <router-link to="/manage/users/saksi" custom v-slot="{ href, navigate }">
                            <a @click="navigate" :href="href" class="dropdown-item"> Saksi </a>
                        </router-link>
                        <router-link to="/manage/users/admin" custom v-slot="{ href, navigate }">
                            <a @click="navigate" :href="href" class="dropdown-item"> Admin </a>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item" :class="{ 'active': isActive('/aduan') }">
                    <router-link to="/aduan" custom v-slot="{ href, navigate }">
                        <a @click="navigate" :href="href" class="nav-link">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <IconNote />
                            </span>
                            <span class="nav-link-title"> Aduan </span>
                        </a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { IconHome, IconNote, IconSettings, IconStar } from "@tabler/icons-vue";
// import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

defineOptions({
    inheritAttrs: false,
})

defineProps<{ inactiveClass?: string; activeClass?: string }>();

const route = useRoute();

const isActive = (path: string) => {
    return route.path === path;
};

// const isExternalLink = computed(() => {
//     return typeof props.to === 'string' && props.to.startsWith('http')
// })
</script>
