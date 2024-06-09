<template>
    <RouterView v-slot="{ Component }">
        <component :is="Component" ref="dynamicComponentRef"></component>
    </RouterView>
</template>
