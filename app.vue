<template>
    <div class="w-screen h-auto bg-bunker-500 text-white">
      <div id="landing-page" class="w-full h-screen flex justify-center items-center flex-col">
        <h1
            class="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white font-ligurino"
        >
          Antoine Battut
        </h1>
        <div
            class="mt-10 flex justify-center items-center text-base md:text-lg lg:text-xl font-sourcecode"
        >
          <span class="text-white"> &lt; </span>
          <span class="text-[#E06C75]"> h2 </span>
          <span class="text-white"> &gt; </span>
          <span id="presentation-text" class="text-white font-semibold"
          >Développeur Web</span
          >
          <div
              id="presentation-pipe"
              class="pl-0 ml-0 h-5 w-0.5 bg-[#61AFEF]"
          ></div>
          <span class="text-white"> &lt;/ </span>
          <span class="text-[#E06C75]"> h2 </span>
          <span class="text-white"> &gt; </span>
        </div>

        <p
            class="mt-5 text-sm md:text-base lg:text-lg text-center w-screen sm:w-1/3 font-fredoka"
        >
          Étudiant et Développeur amateur de solutions Web et Logicieles
        </p>

        <div class="my-10 flex justify-center items-center">
          <a href="https://github.com/battutdev" draggable="false">
            <svg
                class="duration-300 ease-in p-3 hover:bg-bunker-900 hover:text-purple-500 rounded-2xl h-12 mr-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/antoine-battut" draggable="false">
            <svg
                class="duration-300 ease-in p-3 hover:bg-bunker-900 hover:text-purple-500 rounded-2xl h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:antoine@battut.dev" draggable="false">
            <svg
                class="duration-300 ease-in p-3 hover:bg-bunker-900 hover:text-purple-500 rounded-2xl h-12 ml-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>

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
          <!--<img class="absolute w-full" draggable="false" src="/gradient.svg" alt="Gradient svg" />-->
          <img
              class="absolute w-full"
              draggable="false"
              src="/icon.png"
              alt="Profile pictures"
          />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';


onMounted(() => {
	const strs = ['Développeur Web', 'UX/UI Designer', 'Développeur Logiciel'];
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
					pipe?.classList.remove('bg-bunker-500');
					pipe?.classList.add('bg-[#61AFEF]');
					barState = true;
				} else if (barState) {
					pipe?.classList.add('bg-bunker-500');
					pipe?.classList.remove('bg-[#61AFEF]');
					barState = false;
				}
			}
		}, 75e1);

		// Start editing
		setInterval(() => {
			isEditing = true;
			pipe?.classList.remove('bg-bunker-500');
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

