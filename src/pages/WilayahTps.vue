<template>
    <Suspense>
        <template #default>
            <div v-for="(item, index) in lokasi" :key="index">{{ item }}</div>
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import axios from "axios";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hierarchy, PrestineLokasi } from "./interfaces.ts";
import { LRUCache } from 'lru-cache'
// Set up LRU cache
const cache = new LRUCache<string, Hierarchy>({
    max: 100, // Maximum number of items
    // maxAge: 15 * 60 * 1000 // Cache expiration time in milliseconds
});

const lokasi = ref<string[]>([]);

// const fetchData = () => {
//     const url = "/tps.json";
//     return from(axios.get<Hierarchy>(url)).pipe(
//         map(response => new PrestineLokasi(response.data))
//     );
// };

const fetchData = () => {
    const url = "/tps.json";

    // Check if the response is in the cache
    const cachedResponse = cache.get(url);

    // if (cachedResponse) {
    //     // Return cached response as an observable
    //     return from(Promise.resolve(new PrestineLokasi(cachedResponse)));
    // }

    if (cachedResponse) {
        // Return cached response as an observable
        return from(Promise.resolve(cachedResponse)).pipe(
            map(data => new PrestineLokasi(data))
        );
    }

    // Fetch the data if not cached
    return from(fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data: Hierarchy) => {
            // Cache the fetched data
            cache.set(url, data);
            return data;
        })
    ).pipe(
        map(data => new PrestineLokasi(data))
    );
};

onMounted(() => {
    fetchData().subscribe({
        next: (w) => {
            // assumsi array
            const C = w.C;

            // Assuming w.H.id2name is an array here
            const IDToName = w.H.id2name
            // jumlah tps per desa
            // const TPS = w.H.tps

            // total tps
            // const T = w.T;

            // lokasi.value.push(C[11]);
            // lokasi.value = Object.keys(C['11']).map(id => (`${id}-${IDToName[id]}`));
            lokasi.value = C['11'].map(id => (`11${id}-${IDToName['11' + id]}`));
        },
        error: (err) => {
            console.error('Error fetching data', err);
        }
    });
});
</script>
