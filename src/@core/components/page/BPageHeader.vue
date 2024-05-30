<template>
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <slot name="title">
                    <div class="col" v-if="titleComputed || pretitleComputed">
                        <!-- Page pre-title -->
                        <div v-if="pretitleComputed" class="page-pretitle">
                            {{ pretitleComputed }}
                        </div>
                        <h2 v-if="title" class="page-title">
                            {{ titleComputed || $route.name }}
                        </h2>
                    </div>
                </slot>
                <!-- Page title actions -->
                <div v-if="!$slots.titleAction" class="col-12 col-md-auto ms-auto d-print-none mt-3 mt-md-0">
                    <slot name="title-action"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = withDefaults(defineProps<{ title?: string | undefined, pretitle?: string | null }>(), {
    title: undefined,
    pretitle: null,
});

const titleComputed = computed(() => props?.title as string | undefined);
const pretitleComputed = computed(() => props.pretitle as string | undefined);

</script>
