module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:9000",
      },
    },
  },
  lintOnSave: false,
  outputDir: "./dist/client",
};
