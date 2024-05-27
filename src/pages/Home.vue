<template>
    <div v-for="(framework, index) in frameworks" :key="index">
        {{ framework }}
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { interval } from "rxjs";
import { map, filter, takeWhile } from "rxjs/operators";

const frameworks = ref<string[]>([]);
const time = 1000;

const source = [
    { name: "VueJS", language: "js" },
    { name: "ReactJS", language: "js" },
    { name: "Laravel", language: "PHP" },
    { name: "Svelte", language: "js" },
    { name: "AngularJS", language: "js" },
    { name: "Spring", language: "java" },
    { name: "Lit", language: "js" },
    { name: "CodeIgniter", language: "PHP" },
    { name: "RiotJS", language: "js" },
];

onMounted(() => {
    const jsFrameworks = interval(time).pipe(
        takeWhile(i => i < source.length),  // Stop the interval when the source array is fully iterated
        filter(i => source[i].language === "js"),
        map(i => source[i].name)
    );

    const subscription = jsFrameworks.subscribe({
        next: (value) => {
            frameworks.value.push(value);
        },
        complete: () => {
            console.log('Completed emitting frameworks');
        }
    });

    onUnmounted(() => {
        subscription.unsubscribe();
    });
});
</script>
