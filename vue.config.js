module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:8080',
        changOrigin: true,
        pathRewrite: {
          '^/login': ''
        }
      }
    }
  }
}
