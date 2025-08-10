// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'MaxiDev Solutions - Développement Web & DevSecOps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'MaxiDev Solutions - Expert en développement web, automatisation n8n, agents IA, DevSecOps et solutions pour startups.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots'
  ],

  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [600, 700]
    },
    display: 'swap'
  },

  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Poppins', 'sans-serif']
          }
        }
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
      ]
    }
  },

  robots: {
    rules: {
      UserAgent: '*',
      Disallow: ''
    }
  },

  plugins: ['~/plugins/spline-viewer.client.ts'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag === 'spline-viewer';
      }
    }
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-04-16'
})