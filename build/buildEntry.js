// 生成主入口文件
const fs = require('fs')
const path = require('path')

const version = process.env.VERSION || require('../package.json').version
const components = require('./getComponents')()
const tip = 'This file is auto gererated by build/buildEntry.js'
const entryTemplate = require('./template.js')

const content = entryTemplate({
  version,
  components,
  tip
})

fs.writeFileSync(path.join(__dirname, '../src/index.js'), content)
