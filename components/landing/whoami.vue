<template>
  <div
    class="flex flex-col text-white font-sourcecode w-11/12 md:w-[400px] bg-white rounded-lg p-3 bg-opacity-20"
  >
    <div class="flex gap-2.5 mb-3">
      <div class="w-3 h-3 rounded-full bg-white bg-opacity-40"></div>
      <div class="w-3 h-3 rounded-full bg-white bg-opacity-40"></div>
      <div class="w-3 h-3 rounded-full bg-white bg-opacity-40"></div>
    </div>
    <p>{{ shell }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const shell = ref('battut.dev:~ root# whoami');
const description = ref(
	'je suis antoine battut, développeur web principalement axé sur php et javascript (client/serveur)'
);
</script>
