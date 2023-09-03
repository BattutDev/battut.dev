<template>

  <div class="w-auto flex flex-col lg:flex-row gap-5 items-center rounded-lg bg-white bg-opacity-70 p-4 font-sans text-sm">
    <div v-if="image" class="rounded">
      <img :src="image.src" class="rounded max-w-sm max-h-40 lg:max-w-xs xl:max-w-sm p-4" :alt="image.alt">
    </div>
    <div class="bg-gray-500 rounded-lg h-0.5 lg:h-4/5 w-4/5 lg:w-0.5"></div>
    <div class="flex flex-col w-4/5 gap-5">
      <div class="flex flex-col w-full gap-3">
        <h3 class="font-semibold text-lg">{{title}}</h3>
        <p class="max-w-sm">{{description}}</p>
      </div>
      <div class="flex w-full gap-2">
        <h4 class="underline decoration-1">Lien(s):</h4>
        <a v-for="(link, index) in links" :key="index" class="text-gray-900" :href="link.url">{{link.name}}</a>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

type LinkType = {
  name: string,
  url: string,
}

type ImageType = {
  src: string,
  alt: string,
}

export type Props = {
  title: string,
  description: string,
  links: Array<LinkType>,
  image: ImageType | false
}

defineProps<Props>();
</script>