// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  experimental: {
    typedPages: true,
    viewTransition: true,
  },

  app: {
    head: {
      charset: "utf-8",
      title: "JCS Bookings",
      viewport: "width=device-width, initial-scale=1",
      noscript: [{ innerHTML: "JCS Bookings requires javascript to function" }],
    },
  },

  nitro: {
    preset: "static",
  },

  vue: {
    defineModel: true,
  },

  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Referrer-Policy": "no-referrer",
      },
    },
    esbuild: {
      drop:
        process.env.NODE_ENV === "development"
          ? undefined
          : ["console", "debugger"],
      legalComments: "none",
      format: "esm",
    },
  },

  css: ["~/assets/css/main.css"],

  typescript: {
    shim: false,

    tsConfig: {
      include: ["./types/**/*"],
    },
  },

  modules: [
    "nuxt-typed-router",

    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "dayjs-nuxt",
  ],

  googleFonts: {
    preconnect: true,
    download: false,
    families: {
      Roboto: true,
    },
  },
});
