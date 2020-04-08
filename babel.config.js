const config = require('./build/config.js')

module.exports = {
  env: {
    production: {
      presets: ['@vue/app']
    },
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
        ],
        ['@babel/plugin-transform-runtime']
      ]
    }
  }
}
