// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: ['swiper']
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {

			title: 'Antoine Battut | Développement Web et Logiciel',
			htmlAttrs: {
				lang: 'fr'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Développeur Français, spécialisé dans la conception et réalisation d\'applications Web et bureautiques' },
				{ name: 'robots', content: 'noindex, nofollow'},
				{ property: 'og:title', content: 'Antoine Battut | Développement Web et Logiciel'},
				{ property: 'og:description', content: 'Développeur Français, spécialisé dans la conception et réalisation d\'applications Web et bureautiques'},
				{ property: 'og:url', content: 'https://battut.dev'},
				{ property: 'og:type', content: 'website'},
				{ property: 'og:image', content: 'https://battut.dev/icon.png'},
				{ name: 'author', content: 'Antoine Battut'},
				{ name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{ name: 'twitter:title', content: 'Antoine Battut | Développement Web et Logiciel'},
				{ name: 'twitter:url', content: 'https://battut.dev'},
				{ name: 'twitter:description', content: 'Développeur Français, spécialisé dans la conception et réalisation d\'applications Web et bureautiques'},
				{ name: 'twitter:image', content: 'https://battut.dev/icon.png'},
				{ name: 'format-detection', content: 'telephone=yes' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap' },
				{ rel: 'stylesheet', href: 'https://use.typekit.net/oae4vpt.css' },
				{ rel: 'stylesheet', href: 'https://use.typekit.net/oae4vpt.css' },
				{ rel: 'canonical', href: 'https://www.battut.dev'},
				{ rel: 'alternate', hreflang:'fr-FR', href:'https://battut.dev'}
			],
		}
	}
});