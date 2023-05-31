<template>
  <div class="flex justify-center items-center rounded-xl">
    <div
      class="relative gap-2 rounded-xl flex justify-center items-center flex-row group w-full h-full"
    >
      <img :src="url" :alt="name" draggable="false" />

      <h5
        class="hidden text-white absolute group-hover:block -top-10 bg-black bg-opacity-30 px-3 py-1 rounded-lg"
      >
        {{ name }}
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Props = {
  name: string;
  url: string;
  group: 'lang' | 'frameworks' | 'db' | 'tool' | 'service';
};

defineProps<Props>();
</script>
