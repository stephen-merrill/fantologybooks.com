module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/theme.scss";`
      }
    }
  }
};
