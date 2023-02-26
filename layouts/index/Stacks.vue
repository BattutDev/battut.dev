<template>
<div class="flex  justify-center items-center flex-col gap-10 px-5 md:px-32">
    <h2 class="text-2xl md:text-3xl font-semibold">Technologies</h2>
    <div class="flex justify-center flex-wrap gap-5 w-full max-w-screen-lg h-auto ">
        <StackComponent v-for="(img, index) in imgs" :key="index" :name="img.name" :url="img.url" :group="img.group"/>
    </div>
</div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import StackComponent, {Props as StackComponentProps} from '~/components/index/StackComponent.vue';




const imgs = ref<Array<StackComponentProps>>([
	{
		name: 'Javascript',
		url: 'https://skillicons.dev/icons?i=js',
		group: 'lang'
	}, {
		name: 'TypeScript',
		url: 'https://skillicons.dev/icons?i=ts',
		group: 'lang'
	}, {
		name: 'Java',
		url: 'https://skillicons.dev/icons?i=java',
		group: 'lang'
	}, {
		name: 'HTML5',
		url: 'https://skillicons.dev/icons?i=html',
		group: 'lang'
	}, {
		name: 'CSS3',
		url: 'https://skillicons.dev/icons?i=css',
		group: 'lang'
	}, {
		name: 'C++',
		url: 'https://skillicons.dev/icons?i=cpp',
		group: 'lang'
	}, {
		name: 'PHP',
		url: 'https://skillicons.dev/icons?i=php',
		group: 'lang'
	},  {
		name: 'Python',
		url: 'https://skillicons.dev/icons?i=py',
		group: 'lang'
	},  {
		name: 'Bash',
		url: 'https://skillicons.dev/icons?i=bash',
		group: 'lang'
	},  {
		name: 'Bots Discord',
		url: 'https://skillicons.dev/icons?i=bots',
		group: 'service'
	},  {
		name: 'Docker',
		url: 'https://skillicons.dev/icons?i=docker',
		group: 'tool'
	},  {
		name: 'Git',
		url: 'https://skillicons.dev/icons?i=git',
		group: 'tool'
	},  {
		name: 'Github',
		url: 'https://skillicons.dev/icons?i=github',
		group: 'service'
	},  {
		name: 'Gitlab',
		url: 'https://skillicons.dev/icons?i=gitlab',
		group: 'service'
	},  {
		name: 'Mysql',
		url: 'https://skillicons.dev/icons?i=mysql',
		group: 'db'
	},  {
		name: 'Postgres',
		url: 'https://skillicons.dev/icons?i=postgres',
		group: 'db'
	},  {
		name: 'Redis',
		url: 'https://skillicons.dev/icons?i=redis',
		group: 'db'
	},  {
		name: 'NodeJs',
		url: 'https://skillicons.dev/icons?i=nodejs',
		group: 'frameworks'
	},  {
		name: 'NestJs',
		url: 'https://skillicons.dev/icons?i=nestjs',
		group: 'frameworks'
	},  {
		name: 'Vuejs',
		url: 'https://skillicons.dev/icons?i=vuejs',
		group: 'frameworks'
	},  {
		name: 'NuxtJs',
		url: 'https://skillicons.dev/icons?i=nuxtjs',
		group: 'frameworks'
	},  {
		name: 'ViteJs',
		url: 'https://skillicons.dev/icons?i=vite',
		group: 'frameworks'
	}
]);

</script>

