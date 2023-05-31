<template>
  <div
    class="flex justify-center items-center text-base md:text-lg lg:text-xl font-sourcecode"
  >
    <span class="text-white"> &lt; </span>
    <span class="text-[#E06C75]"> h2 </span>
    <span class="text-white"> &gt; </span>
    <span id="presentation-text" class="text-white font-semibold">{{
      names[0]
    }}</span>
    <div id="presentation-pipe" class="pl-0 ml-0 h-5 w-0.5 bg-[#61AFEF]"></div>
    <span class="text-white"> &lt;/ </span>
    <span class="text-[#E06C75]"> h2 </span>
    <span class="text-white"> &gt; </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

type Props = {
  names: Array<string>;
};

const props = defineProps<Props>();

onMounted(() => {
	const strs = props.names;
	const txt = document.querySelector('#presentation-text');
	const pipe = document.querySelector('#presentation-pipe');
	let barState = false;
	let isEditing = false;
	let actualWordIndex = 0;
	let nextWordIndex = 1;
	let actualWord = strs[0];
	let isDeleting = true;

	if (txt && pipe) {
		// The pipe animation
		setInterval(() => {
			if (!isEditing) {
				if (!barState) {
					pipe?.classList.remove('bg-transparent');
					pipe?.classList.add('bg-[#61AFEF]');
					barState = true;
				} else if (barState) {
					pipe?.classList.add('bg-transparent');
					pipe?.classList.remove('bg-[#61AFEF]');
					barState = false;
				}
			}
		}, 75e1);

		// Start editing
		setInterval(() => {
			isEditing = true;
			pipe?.classList.remove('bg-transparent');
			pipe?.classList.add('bg-[#61AFEF]');
		}, 1e4);

		// Delete string
		setInterval(() => {
			if (isEditing) {
				if (!isDeleting) {
					const t = strs[actualWordIndex].substring(0, actualWord.length + 1);
					if (
						!actualWord.length ||
            actualWord.length !== strs[actualWordIndex].length
					) {
						txt.innerHTML = actualWord = t;
					} else {
						isEditing = false;
						isDeleting = true;
					}
				}
			}
		}, 1e2);

		// Write string
		setInterval(() => {
			if (isEditing) {
				if (isDeleting) {
					if (actualWord.length) {
						txt.innerHTML = actualWord = actualWord.substring(
							0,
							actualWord.length - 1
						);
					} else {
						isDeleting = false;
						actualWordIndex = nextWordIndex;
						nextWordIndex =
              actualWordIndex === strs.length - 1 ? 0 : actualWordIndex + 1;
					}
				}
			}
		}, 5e1);
	}
});
</script>
