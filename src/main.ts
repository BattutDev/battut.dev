
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faPalette, faTerminal, faUserGraduate, faEnvelope, faBars, faXmark, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


// @ts-ignore
library.add(faHouse, faPalette, faTerminal, faUserGraduate, faEnvelope, faBars, faXmark, faArrowUp);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')


