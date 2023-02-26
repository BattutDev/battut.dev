<template>
    <div class="flex justify-center items-center p-0.5 bg-gradient-to-b from-purple-500 to-bunker-500 rounded-xl">
        <div class="relative p-3 gap-2  rounded-xl border-solid flex justify-center items-center flex-row group w-full h-full bg-bunker-500">
            <img  :src="url" :alt="name" draggable="false">

            <h5 class="hidden absolute group-hover:block -top-5 bg-bunker-500 px-3 py-1 rounded-lg">{{name}}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">




export type Props = {
    name: string,
    url: string,
    group: 'lang' | 'frameworks' | 'db' | 'tool' | 'service',

}

defineProps<Props>();








</script>

