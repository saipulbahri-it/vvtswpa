<template>
    <Suspense>
        <template #default>
            <div v-for="(item, index) in a" :key="index">{{ item }}</div>
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from "axios";
import { Hierarchy, PrestineLokasi } from "./interfaces.ts";

const a = ref<string>('null');

onMounted(async () => {
    const url = "/tps.json";

    const { data } = await axios.get<Hierarchy>(url);
    const w = new PrestineLokasi(data);

    a.value = w.H.id2name[11];
});
</script>
