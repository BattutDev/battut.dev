<template>
  <div class="flex items-center flex-col gap-10 h-screen py-24">
    <LandingTitle />
    <img
      class="rounded-full h-40 w-40"
      src="~/assets/img/profile_picture.png"
      alt="photo de profil"
    />
    <LandingSocials />
    <LandingTextEdit :names="codeEditStrings" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="w-16 h-16 text-white animate-pulse md:mt-10 lg:mt-28"
    >
      <polyline points="7 13 12 18 17 13"></polyline>
      <polyline points="7 6 12 11 17 6"></polyline>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const codeEditStrings = ref<Array<string>>([
	'Développeur Web',
	'UX/UI Designer',
	'Développeur Logiciel',
]);
</script>
