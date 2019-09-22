module.exports = {
  lintOnSave: true,
  css: {
    extract: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
