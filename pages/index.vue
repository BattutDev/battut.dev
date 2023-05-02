<template>
  <div class="w-screen h-auto bg-bunker-500 flex flex-col gap-32 lg:gap-0 text-white overflow-x-hidden">

      <Landing/>

      <Stacks/>

      <Projects/>
  </div>
</template>

<script setup lang="ts">

import Landing from '~/layouts/index/Landing.vue';
import Stacks from '~/layouts/index/Stacks.vue';
import Projects from '~/layouts/index/Projects.vue';

</script>

