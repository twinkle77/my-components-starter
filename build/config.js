const fs = require('fs')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, `../${dir}`)
}

const packageMeta = require('../package.json')
// 适配有scope的包，比如@cloud/element
const scopeName = packageMeta.name
const splitName = scopeName.split('/')
const name = splitName[splitName.length - 1]

const mixinsFiles = fs.readdirSync(resolve('src/mixins'))
const utilsFiles = fs.readdirSync(resolve('src/utils'))

const externals = {}

externals['@/locale'] = `${scopeName}/lib/locale`
mixinsFiles.forEach(file => {
  file = path.basename(file, '.js')
  externals[`@/mixins/${file}`] = `${scopeName}/lib/mixins/${file}`
})
utilsFiles.forEach(file => {
  file = path.basename(file, '.js')
  externals[`@/utils/${file}`] = `${scopeName}/lib/utils/${file}`
})

module.exports = {
  version: process.env.VERSION || packageMeta.version,
  scopeName,
  name,
  alias: {
    '@': resolve('src')
  },
  externals
}
