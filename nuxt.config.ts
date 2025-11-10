// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
				css: ["~/assets/css/main.css"],
				app: {
								head: {
									title: 'Foydali linklar – my.agmi.uz',
									htmlAttrs: {
										lang: 'uz',
									},
									meta: [
										{ name: 'robots', content: 'index, follow' },
										{charset: 'utf-8'},
										{name: 'viewport', content: 'width=device-width, initial-scale=1'},
										{
											name: 'description',
											content:
													'Talabalar uchun foydali linklar – my.agmi.uz sayti orqali ta’lim jarayonida kerakli havolalar, xizmatlar va platformalar bir joyda.',
										},
										{name: 'theme-color', content: '#f5f6ff'},

										// Open Graph
										{property: 'og:title', content: 'Foydali linklar – my.agmi.uz'},
										{
											property: 'og:description',
											content:
													'Talabalar uchun eng qulay platforma – barcha foydali linklar va xizmatlar bir sahifada.',
										},
										{property: 'og:type', content: 'website'},
										{property: 'og:url', content: 'https://my.agmi.uz'},
										{property: 'og:image', content: '/og-image.jpg'}, // создай этот файл в /public

										// Twitter Card
										{name: 'twitter:card', content: 'summary_large_image'},
										{name: 'twitter:title', content: 'Foydali linklar – my.agmi.uz'},
										{
											name: 'twitter:description',
											content:
													'Talabalar uchun eng qulay platforma – barcha foydali linklar va xizmatlar bir sahifada.',
										},
										{name: 'twitter:image', content: '/og-image.jpg'},
									],
									link: [
										{rel: 'canonical', href: 'https://adti-links.vercel.app/'},
										{rel: 'icon', type: 'image/png', href: '/favicon.png'},
										{rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
										{rel: "preconnect", href: "https://fonts.googleapis.com"},
										{rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
										{
											rel: "stylesheet",
											href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
										},
									],
								},
				},
})