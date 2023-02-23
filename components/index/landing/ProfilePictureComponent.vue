<template>
    <div
            class="mt-10 relative h-64 w-64 animate-float flex items-center justify-center"
    >
        <div class="w-4/6 h-4/6 blur-xl" style='filter: blur(24px)'>
            <div
                    class="w-full h-1/2 bg-gradient-to-r from-purple-500 to-white rounded-t-full"
            ></div>
            <div
                    class="w-full h-1/2 bg-gradient-to-r from-white to-purple-500 rounded-b-full"
            ></div>
        </div>
        <img
                class="absolute w-full"
                draggable="false"
                :src="src"
                alt="Photo de profil"
        />
    </div>
</template>

<script setup lang="ts">
type Props = {
    src: string
}

defineProps<Props>();

</script>

<style scoped>

</style>