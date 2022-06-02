// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
// });

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "prependData" in sass-loader v8
      sass: {
        additionalData: '@import "~@/assets/sass/main.sass"',
      },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        additionalData: '@import "~@/assets/sass/main.sass";',
      },
    },
  },
};
