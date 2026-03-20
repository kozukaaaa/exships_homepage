const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  assetsDir: "assets",
  outputDir: "docs",
  transpileDependencies: true,

  devServer: {
    host: "0.0.0.0",
    port: 8082,
    allowedHosts: "all",
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
