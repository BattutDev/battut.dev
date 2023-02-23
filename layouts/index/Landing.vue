<template>
    <div id="landing-page" class="w-full h-screen flex justify-center items-center flex-col">

        <TitleComponent :name="strings.name" />

        <TextEditComponent :names="strings.strEdition" />

        <DescriptionComponent :description="strings.description" />

        <div class="my-10 flex justify-center items-center gap-5">

            <SocialsSVGComponent :socials="strings.socials.links" :icons="strings.socials.icons" />

        </div>

        <ProfilePictureComponent :src="strings.profilePictureSrc"/>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import TitleComponent from '~/components/index/landing/TitleComponent.vue';
import TextEditComponent from '~/components/index/landing/TextEditComponent.vue';
import DescriptionComponent from '~/components/index/landing/DescriptionComponent.vue';
import SocialsSVGComponent, {Socials, SocialType} from '~/components/index/landing/SocialsSVGComponent.vue';
import ProfilePictureComponent from '~/components/index/landing/ProfilePictureComponent.vue';

type Social = {
    icons: Array<SocialType>,
    links: Socials
}

type Strings = {
    name: string,
    description: string,
    strEdition: Array<string>,
    socials: Social,
    profilePictureSrc: string
}

const strings = ref<Strings>({
	name: 'Antoine Battut',
	description: 'Étudiant et Développeur junior d\'applications Web et Logicieles',
	strEdition: ['Développeur Web', 'UX/UI Designer', 'Développeur Logiciel'],
	socials: {
		icons: ['mail', 'github', 'linkedin'],
		links: {
			mail: 'mailto:antoine@battut.dev',
			github: 'https://github.com/battutdev',
			linkedin: 'https://www.linkedin.com/in/antoine-battut'
		}
	},
	profilePictureSrc: '/icon.png'

});

</script>

