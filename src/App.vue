<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import HeaderLayout from './components/layout/HeaderLayout.vue';
import NavMenu from './components/layout/NavMenu.vue';

// Get the current route
const route = useRoute();

// Compute the page title and pretitle from route metadata
const titlePage = computed(() => route.meta.title as string | undefined);
const pretitlePage = computed(() => route.meta.pretitle as string | undefined);

const dynamicComponentRef = ref();

const setTheme = (el: HTMLElement, value: string): void => el.setAttribute('data-bs-theme', value);

setTheme(document.body, window.localStorage.getItem('mode') || 'light');

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
  // setTheme(document.body, window.localStorage.getItem('mode') || 'light');
} else {
  // Theme set to light.
}
</script>

<template>
  <HeaderLayout class="d-none d-md-block">
    <template #nabar-menu>
      <NavMenu />
    </template>
  </HeaderLayout>
  <RouterView v-slot="{ Component }">
    <component :is="Component" ref="dynamicComponentRef" :title="titlePage" :pretitle="pretitlePage">
      <template #customSlot>
        <!-- Custom slot content for the dynamic component -->
        <p>Custom content inside the dynamic component</p>
      </template>
    </component>
  </RouterView>
</template>
