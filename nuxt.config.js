import dotenv from 'dotenv';
import colors from 'vuetify/es5/util/colors';

dotenv.config();

/**
 * @typedef {import('@nuxt/typescript-build').Options} TypescriptOptions
 */
/**
 * @typedef {import('@nuxtjs/vuetify').Options} VuetifyOptions
 */
/**
 * @typedef {import('@nuxt/types').Configuration & {vuetify: VuetifyOptions}} Config
 */
/**
 * @type Config
 */
const config = {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                src: 'https://kit.fontawesome.com/929812db6a.js',
                crossOrigin: 'anonymous',
                'data-auto-replace-svg': 'nest',
            },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['~/assets/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        // '~/plugins/fontAwesome',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        optionsPath: './vuetify.options.ts',
        defaultAssets: {
            icons: false,
        },
        treeShake: true,
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
};

export default config;
