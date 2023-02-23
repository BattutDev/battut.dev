<template>
    <h1
      class="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white font-ligurino"
    >
        {{name}}
    </h1>
</template>

<script setup lang="ts">

type Props = {
    name: string
}

defineProps<Props>();

</script>