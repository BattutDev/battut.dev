<template>
  <div class="h-screen w-screen justify-center items-center flex flex-wrap gap-10">
      <div v-for="(project, index) in projects" :key="index" class="w-4/5 sm:w-1/2 md:w-1/3 xl:w-1/4 h-2/3 md:h-1/2 rounded-xl overflow-hidden bg-gradient-to-t from-purple-500 to-bunker-500 p-1">
          <div class="bg-bunker-500 w-full h-full flex flex-col gap-5 overflow-hidden rounded-xl">
              <div class="h-1/4 w-auto flex justify-center items-center">
                  <img class="rounded-t-lg h-full w-auto object-contain" :src="project.banner" alt="Bannière du projet">
              </div>
              <div class="px-5 w-full flex flex-col gap-3">
                  <a :href="project.link">
                      <h3 class=" text-xl text-white hover:text-purple-500 font-poppins">{{project.name}}</h3>
                  </a>
                  <div class="w-full h-1">
                      <div class="bg-white w-full h-1/4"></div>
                  </div>

                  <div class="w-full p-1 rounded">
                      {{project.description}}
                  </div>

                  <div class="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.25V14"></path><path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"></path></svg>
                      <h6>{{project.startingDate}} - {{project.endingDate}}</h6>
                  </div>
                  <div class="w-full flex flex-row gap-3 overflow-x-scroll">
                      <img v-for="(name, index) in project.stacks" :key="index" class="h-10 w-10 text-white" :src="`https://skillicons.dev/icons?i=${name}&theme=dark`"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {Props as CardComponentProps} from '~/components/index/projects/CardComponent.vue';


const projects: Array<CardComponentProps> = [
	{
		name: 'Disc-Solutions',
		banner: 'https://www.disc-solutions.fr/img/logo/banner.png',
		description: 'Responsable Technique et Trésorier de l\'association',
		startingDate: 'Nov 1, 2020',
		endingDate: 'Maintenant',
		stacks: ['ts', 'postgres', 'java', 'git', 'nodejs'],
		link: 'https://www.disc-solutions.fr'
	}, {
		name: 'Sarl-Battut',
		banner: '/sarl_logo.png',
		description: 'Création de la présence en ligne de l\'entreprise avec un site web',
		startingDate: 'mai 30, 2022',
		endingDate: 'juil 05, 2022',
		stacks: ['ts', 'git', 'nuxtjs', 'vue', 'tailwind', 'nodejs'],
		link: 'https://sarl.battut.dev'
	}, {
		name: 'GMAGRO',
		banner: 'https://sio.jbdelasalle.com/~abattut/gmagrowww/images/gmagro.png',
		description: 'Réalisation en groupe d\'une plateforme factice de gestion de maintenance de machines industrielles, Réalisation de 3 applications: Bureau, Web, Mobile (Android)',
		startingDate: 'sep 30, 2022',
		endingDate: 'mar 10, 2023',
		stacks: ['php', 'java', 'mysql', 'androidstudio'],
		link: 'https://sio.jbdelasalle.com/~abattut/gmagrowww/'
	}
];

</script>

