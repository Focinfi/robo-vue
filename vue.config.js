module.exports = {
  devServer: {
    proxy: {
      '^/query': {
        target: 'http://localhost:8080/'
      }
    }
  }
}