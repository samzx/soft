
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sam Xie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:title', content: 'Sam Xie'},
      { property: 'og:description', content: 'Indie Software dev'},
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://www.samxie.net/'},
      { property: 'og:image', content: 'https://res.cloudinary.com/xielabs/image/upload/v1588150730/spheres.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://res.cloudinary.com/xielabs/image/upload/c_scale,w_180/v1541587735/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
