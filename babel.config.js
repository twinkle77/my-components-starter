const config = require('./build/config.js')

module.exports = {
  presets: ['@vue/app'],
  env: {
    // npm scripts使用的环境
    utils: {
      presets: [['@babel/preset-env', { modules: 'umd' }]],
      // 别名替换
      plugins: [
        [
          'module-resolver',
          {
            root: [config.scopeName],
            alias: {
              '@': `${config.scopeName}/lib`
            }
          }
        ]
      ]
    }
  }
}
