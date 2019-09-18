// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  // configureWebpack: {
  //   // 修改webpack打包入口
  //   entry: {
  //     app: './examples/main.js'
  //   }
  // },
  // chainWebpack: config => {
  //   config.resolve.alias.set('@', resolve('examples'))
  // },
  css: {
    extract: true
  }
}
