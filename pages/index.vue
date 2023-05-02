<template>
  <div class="w-screen h-auto bg-bunker-500 flex flex-col gap-32 lg:gap-0 text-white overflow-x-hidden">

      <Landing/>

      <Stacks/>

      <Projects/>
      <div class="w-screen h-screen flex justify-center items-center">
        <img class="w-2/3" src="~/assets/synth.png" alt="tableau de synthèse">

      </div>
  </div>
</template>

<script setup lang="ts">

import Landing from '~/layouts/index/Landing.vue';
import Stacks from '~/layouts/index/Stacks.vue';
import Projects from '~/layouts/index/Projects.vue';

</script>

