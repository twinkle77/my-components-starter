const CONFIG = require('./build/config')

module.exports = {
  lintOnSave: true,
  css: {
    extract: true
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    externals: CONFIG.externals
  },
  chainWebpack: config => {
    Object.keys(CONFIG.alias).forEach(key => {
      config.resolve.alias.set(key, CONFIG.alias[key])
    })
  }
}
