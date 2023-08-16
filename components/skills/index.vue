<template>
  <div class="flex flex-col items-center gap-10 py-24 w-full">
      <h2 class="text-2xl text-white font-semibold">Compétences techniques</h2>
      <div class="flex flex-row gap-5">
        <button v-for="(item, index) in buttons" :key="index" class="px-2 py-1 hover:bg-white hover:bg-opacity-25 rounded-lg ease-in-out duration-200" @click="changeType(item.type)">
          {{ item.name }}
        </button>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-5 w-full md:w-2/3 px-5 md:px-20">
        <SkillsStack
          v-for="(img, index) in imgs"
          :key="index"
          :name="img.name"
          :url="img.url"
          :group="img.group"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { Props as StackProps, SkillGroupType } from '~/components/skills/stack.vue';

const buttons = ref<Array<{type: SkillGroupType, name: string}>>([
	{type: null, name: 'Tous'},
	{type: 'lang', name: 'Langage'},
	{type: 'db', name: 'Database'},
	{type: 'frameworks', name: 'Framework'},
	{type: 'tool', name: 'Outil'},
	{type: 'service', name: 'Service'},
]);

const links : Array<StackProps> = [
	{
		name: 'Javascript',
		url: 'https://skillicons.dev/icons?i=js&theme=light',
		group: 'lang',
	},
	{
		name: 'TypeScript',
		url: 'https://skillicons.dev/icons?i=ts&theme=light',
		group: 'lang',
	},
	{
		name: 'Java',
		url: 'https://skillicons.dev/icons?i=java&theme=light',
		group: 'lang',
	},
	{
		name: 'HTML5',
		url: 'https://skillicons.dev/icons?i=html&theme=light',
		group: 'lang',
	},
	{
		name: 'CSS3',
		url: 'https://skillicons.dev/icons?i=css&theme=light',
		group: 'lang',
	},
	{
		name: 'C++',
		url: 'https://skillicons.dev/icons?i=cpp&theme=light',
		group: 'lang',
	},
	{
		name: 'PHP',
		url: 'https://skillicons.dev/icons?i=php&theme=light',
		group: 'lang',
	},
	{
		name: 'Python',
		url: 'https://skillicons.dev/icons?i=py&theme=light',
		group: 'lang',
	},
	{
		name: 'Bash',
		url: 'https://skillicons.dev/icons?i=bash&theme=light',
		group: 'lang',
	},
	{
		name: 'Docker',
		url: 'https://skillicons.dev/icons?i=docker&theme=light',
		group: 'tool',
	},
	{
		name: 'Git',
		url: 'https://skillicons.dev/icons?i=git&theme=light',
		group: 'tool',
	},
	{
		name: 'Bots Discord',
		url: 'https://skillicons.dev/icons?i=bots&theme=light',
		group: 'service',
	},
	{
		name: 'Github',
		url: 'https://skillicons.dev/icons?i=github&theme=light',
		group: 'service',
	},
	{
		name: 'Gitlab',
		url: 'https://skillicons.dev/icons?i=gitlab&theme=light',
		group: 'service',
	},
	{
		name: 'CloudFlare',
		url: 'https://skillicons.dev/icons?i=cloudflare&theme=light',
		group: 'service',
	},
	{
		name: 'Mysql',
		url: 'https://skillicons.dev/icons?i=mysql&theme=light',
		group: 'db',
	},
	{
		name: 'Postgres',
		url: 'https://skillicons.dev/icons?i=postgres&theme=light',
		group: 'db',
	},
	{
		name: 'Redis',
		url: 'https://skillicons.dev/icons?i=redis&theme=light',
		group: 'db',
	},
	{
		name: 'Mongodb',
		url: 'https://skillicons.dev/icons?i=mongodb&theme=light',
		group: 'db',
	},
	{
		name: 'NodeJs',
		url: 'https://skillicons.dev/icons?i=nodejs&theme=light',
		group: 'frameworks',
	},

	{
		name: 'Symfony',
		url: 'https://skillicons.dev/icons?i=symfony&theme=light',
		group: 'frameworks',
	},
	{
		name: 'Tailwindcss',
		url: 'https://skillicons.dev/icons?i=tailwind&theme=light',
		group: 'frameworks',
	},
	{
		name: 'NestJs',
		url: 'https://skillicons.dev/icons?i=nestjs&theme=light',
		group: 'frameworks',
	},
	{
		name: 'Vuejs',
		url: 'https://skillicons.dev/icons?i=vuejs&theme=light',
		group: 'frameworks',
	},
	{
		name: 'NuxtJs',
		url: 'https://skillicons.dev/icons?i=nuxtjs&theme=light',
		group: 'frameworks',
	},
	{
		name: 'ViteJs',
		url: 'https://skillicons.dev/icons?i=vite&theme=light',
		group: 'frameworks',
	},
];

const imgs = ref<Array<StackProps>>(links);

const changeType = (type: SkillGroupType) => {
	imgs.value = links.filter((im) => (type == null) ? true : im.group === type);
};



</script>
