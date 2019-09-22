const fs = require('fs')
const path = require('path')

const excludes = []

const targetDir = path.resolve(__dirname, '../packages')

module.exports = function() {
  const dirs = fs.readdirSync(targetDir)
  return dirs.filter(dirName => {
    return excludes.indexOf(dirName) === -1
  })
}
