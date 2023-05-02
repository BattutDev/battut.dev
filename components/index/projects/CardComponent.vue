<template>
  <div class="h-full w-full flex items-center flex-col">
      <img class="w-1/2" :src="banner" alt="dfg">
      {{name}}
      {{description}}
  </div>

</template>

<script setup lang="ts">



export type IconType = 'ts' | 'java' | 'postgres' | 'php' | 'mysql' | 'git'

export type Props = {
    name: string,
    banner: string;
    description: string,
    startingDate: string;
    endingDate: string;
    stacks: Array<IconType>,
    link: string
}

defineProps<Props>();


</script>
