<template>
  <div>
    <div
      class="relative gap-2 rounded-xl group w-full h-full"
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

export type SkillGroupType = 'lang' | 'frameworks' | 'db' | 'tool' | 'service'
export type Props = {
  name: string;
  url: string;
  group: SkillGroupType;
};

defineProps<Props>();
</script>
