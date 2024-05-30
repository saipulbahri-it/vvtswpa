<template>
    <div class="page-wrapper">
        <slot name="page-header">
            <BPageHeader :title="title" :pretitle="pretitle" class="align-items-center" v-if="showHeader">
                <template #title-action>
                    <slot name="header-action"></slot>
                </template>
            </BPageHeader>
        </slot>
        <BPageBody>
            <slot />
        </BPageBody>
    </div>
</template>

<script lang="ts" setup>
import BPageHeader from './BPageHeader.vue';
import BPageBody from './BPageBody.vue';

import { withDefaults, computed, defineProps, onMounted } from 'vue';

const props = withDefaults(defineProps<{
    title?: string | undefined,
    pretitle?: string | undefined,
    noHeader?: boolean,
}>(), {
    pretitle: undefined
})

console.log(props.title)

const showHeader = computed(() => {
    if (props.noHeader) return false
    if (props.title == undefined) return false;
    return true;
});


onMounted(() => {
});
</script>
