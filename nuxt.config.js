export default {
    buildModules: ["@nuxtjs/google-fonts"],
    css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
    googleFonts: {
        families: {
            'Atkinson+Hyperlegible': {
                wght: [400, 700]
            },
        },
        display: "swap",
    },
};
