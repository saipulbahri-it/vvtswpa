<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import HeaderLayout from './components/layout/HeaderLayout.vue';
import NavMenu from './components/layout/NavMenu.vue';
import PageBody from './components/layout/PageBody.vue';
import PageHeader from './components/layout/PageHeader.vue';

// Get the current route
const route = useRoute();

// Compute the page title and pretitle from route metadata
const titlePage = computed(() => route.meta.title as string | undefined);
const pretitlePage = computed(() => route.meta.pretitle as string | undefined);
</script>

<template>
  <HeaderLayout>
    <template #nabar-menu>
      <NavMenu />
    </template>
  </HeaderLayout>
  <div class="page-wrapper">
    <PageHeader :title="titlePage" :pretitle="pretitlePage"></PageHeader>
    <PageBody>
      <div class="container-xl">
        <router-view v-slot="{ Component }">
          <suspense timeout="0">
            <template #default>
              <component :is="Component"></component>
            </template>
            <template #fallback>
              <div>Loading...................</div>
            </template>
          </suspense>
        </router-view>
      </div>
    </PageBody>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
