<template>
    <b-page>
        <template #page-header>
            <div class="page-header d-print-none align-items-center">
                <div class="container-xl">
                    <div class="row g-2 align-items-center">
                        <div class="col">
                            <!-- Page pre-title -->
                            <div class="page-pretitle">Rekap Suara</div>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li v-for="(l, i) in parentNames" class="breadcrumb-item" :key="i">
                                        <router-link :to="`/v/${l[0]}`" v-if="l[1]">{{ l[1] }}</router-link>
                                    </li>
                                    <!-- <li class="breadcrumb-item active" aria-current="page">Library</li> -->
                                </ol>
                            </nav>
                        </div>
                        <!-- Page title actions -->
                        <div class="col-12 col-md-auto ms-auto d-print-none mt-3 mt-md-0">
                            <div class="input-icon">
                                <input type="text" value="" class="form-control form-control-rounded"
                                    placeholder="Search…">
                                <span class="input-icon-addon">
                                    <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                        <path d="M21 21l-6 -6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="card">
            <table class="table card-table table-vcenter table-sm- table-borderless table-striped">
                <thead class="sticky-top bg-blue-lt">
                    <tr>
                        <th>
                            <h3 class="mb-0">{{ tLabel }}</h3>
                        </th>
                        <th class="vertical-align-middle text-center vote">
                            <div class="d-flex gap-1 justify-content-center">
                                <!-- <b-avatar image="/vite.svg" size="sm" /> -->
                                <h3 class="mb-0">01</h3>
                            </div>
                        </th>
                        <th class="vertical-align-middle text-center vote">
                            <div class="d-flex gap-1 justify-content-center">
                                <!-- <b-avatar image="/vite.svg" size="sm" /> -->
                                <h3 class="mb-0">02</h3>
                            </div>
                        </th>
                        <th class="vertical-align-middle text-center vote">
                            <div class="d-flex gap-1 justify-content-center">
                                <!-- <b-avatar image="/vite.svg" size="sm" /> -->
                                <h3 class="mb-0">03</h3>
                            </div>
                        </th>
                        <th class="vertical-align-middle text-center">
                            <h3 class="mb-0">Cakupan TPS</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in lokasi" :key="index">
                        <td>
                            <router-link :to="`/v/${item}`" v-if="item.length <= 6">
                                {{ IDToName[item] }}
                            </router-link>
                            <div v-else> {{ IDToName[item] }} </div>
                        </td>
                        <td class="text-center vote">
                            <div class="d-flex gap-2 flex-column">
                                <span class="persen"> 80.75% </span>
                                <span class="number"> {{ item }} </span>
                            </div>
                        </td>
                        <td class="text-center vote">
                            <div class="d-flex gap-2 flex-column">
                                <span class="persen"> 80.75% </span>
                                <span class="number"> {{ item }} </span>
                            </div>
                        </td>
                        <td class="text-center vote">
                            <div class="d-flex gap-2 flex-column">
                                <span class="persen"> 80.75% </span>
                                <span class="number"> {{ item }} </span>
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="d-flex gap-2 flex-column">
                                <span class="persen"> 80.75% </span>
                                <div class="progress text-center d-block"> 516/460/639 </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="tfoot bg-azure-lt sticky-bottom py-2">
                    <tr>
                        <th>TOTAL</th>
                        <th class="text-center vote">
                            <div class="d-flex gap-1 flex-column">
                                <h4 class="persen mb-0"> 80.75% </h4>
                                <span class="number"> 0000 </span>
                            </div>
                        </th>
                        <th class="text-center vote bg-success-lt">
                            <div class="d-flex gap-1 flex-column">
                                <h4 class="persen mb-0"> 80.75% </h4>
                                <span class="number"> 0000 </span>
                            </div>
                        </th>
                        <th class="text-center vote">
                            <div class="d-flex gap-1 flex-column">
                                <h4 class="persen mb-0"> 80.75% </h4>
                                <span class="number"> 0000 </span>
                            </div>
                        </th>
                        <th class="text-center">
                            <div class="d-flex gap-1 flex-column">
                                <span class="persen"> 80.75% </span>
                                <div class="progress text-center d-block"> 516/460/639 </div>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </b-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hierarchy, PrestineLokasi } from "../lib/interfaces";
import { useRoute } from 'vue-router';
// import BAvatar from '../@core/components/avatar/BAvatar.vue';

defineProps<{ title?: string | undefined, pretitle?: string | null }>()

const route = useRoute();
import { LRUCache } from 'lru-cache'
import { computed } from '@vue/reactivity';
// Set up LRU cache
const cache = new LRUCache<string, Hierarchy>({
    max: 100, // Maximum number of items
    // maxAge: 15 * 60 * 1000 // Cache expiration time in milliseconds
});

const parentLokasi = ref<any>(route.params?.kode);

const IDToName = ref<any>({});
const wC = ref<any>({});
const lokasi = ref<string[]>([]);

watch(() => route.params.kode, (newId) => {
    parentLokasi.value = newId
    if (newId.length <= 6)
        lokasi.value = wC.value[parentLokasi.value].map((id: any) => {
            return `${parentLokasi.value}${id}`
        });
})

// const fetchData = () => {
//     const url = "/tps.json";
//     return from(axios.get<Hierarchy>(url)).pipe(
//         map(response => new PrestineLokasi(response.data))
//     );
// };

const fetchData = () => {
    const url = "https://raw.githubusercontent.com/saipulbahri-it/vvtswpa/main/public/tps.json";

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
    console.log(parentLokasi.value)
    fetchData().subscribe({
        next: (w) => {
            // assumsi array
            wC.value = w.C;

            // Assuming w.H.id2name is an array here
            IDToName.value = w.H.id2name
            // jumlah tps per desa
            // const TPS = w.H.tps

            // total tps
            // const T = w.T;

            // lokasi.value.push(C[11]);
            // lokasi.value = Object.keys(C['11']).map(id => (`${id}-${IDToName[id]}`));
            // lokasi.value = C[parentLokasi.value].map(id => (`${parentLokasi.value}${id}-${IDToName['11' + id]}`));
            lokasi.value = wC.value[parentLokasi.value].map((id: any) => {
                return `${parentLokasi.value}${id}`
            });

        },
        error: (err) => {
            console.error('Error fetching data', err);
        }
    });
});

const parentNames = computed(() => {
    const names: string[][] = [];
    var id = parentLokasi.value;
    if (id.length >= 2) names.push([id.substring(0, 2), IDToName.value[id.substring(0, 2)]]);
    if (id.length >= 4) names.push([id.substring(0, 4), IDToName.value[id.substring(0, 4)]]);
    if (id.length >= 6) names.push([id.substring(0, 6), IDToName.value[id.substring(0, 6)]]);
    if (id.length >= 10) names.push([id.substring(0, 10), IDToName.value[id.substring(0, 10)]]);
    return names;
});

const tLabel = computed(() => (parentLokasi.value.length >= 6 ? 'Desa' : parentLokasi.value.length >= 4 ? "Kecamatan" : parentLokasi.value.length >= 2 ? "Kabupaten" : "Provinsi"))
</script>

<style>
th.vote,
td.vote {
    line-height: 0.7;
    font-size: small;
    max-width: 3rem;
}

td .persen {
    font-weight: 700;
}

td .number {
    font-size: smaller;
}

td .progress {
    font-size: smaller;
    height: auto;
}
</style>
