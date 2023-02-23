<template>
    <p
            class="mt-5 text-sm md:text-base lg:text-lg text-center w-screen sm:w-1/3 font-fredoka"
    >
        {{ description }}
    </p>
</template>

<script setup lang="ts">

type Props = {
    description: string
}

defineProps<Props>();

</script>