<template>

  <div class="flex flex-col items-center gap-10 py-24 w-full">
    <h2 class="text-2xl text-white font-semibold">Travaux réalisés</h2>
    <div class="flex flex-col items-center w-5/6 md:w-2/3 gap-14">
      <ProjectsWork v-for="(work, index) in works" :key="index" :title="work.title" :description="work.description" :links="work.links" :image="work.image"/>
    </div>
  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import { Props as WorkProps } from './work.vue';

const works = ref<Array<WorkProps>>([
	{
		title: 'ChilledBot - Page de status',
		description: 'Création de la page web de status des instances de la webradio intégrée à Discord "ChilledBot" comptabilisant plus de 50 000 communautés.',
		links: [
			{
				name: 'Site',
				url: 'https://status.chilledbot.xyz'
			}
		],
		image: {
			src: '/img/chilledbot_banner2.png',
			alt: 'Logo bannière ChilledBot colorée'
		}
	},
	{
		title: 'sarl-battut.fr - Site vitrine',
		description: 'Création du site de l\'entreprise, et référencement (SEO).',
		links: [
			{
				name: 'Site',
				url: 'https://sarl.battut.dev'
			}
		],
		image: {
			src: '/img/battut_large.png',
			alt: 'Logo de l\'entreprise Battut'
		}
	},
]);

</script>