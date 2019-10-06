/**
 * 库打包，两步走:
 * 1. 以src/index.js为入口打包
 * 2. 以packages/[component]/index.js为入口为组件单独打包，需要遍历，目标是支持动态导入
 */
const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')

const components = require('./getComponents')()

const rootPath = path.resolve(__dirname, '../')

const tasks = components.map(name => {
  return {
    name, // 打包后的库名称
    entry: `${rootPath}/packages/${name}/index.js`, // 打包入口
    dest: `${rootPath}/lib/${name}` // 指定输出目录
  }
})

tasks.unshift({
  name: require('./config.js').name,
  entry: `${rootPath}/src/main.js`,
  dest: `${rootPath}/lib`
})

tasks.forEach((task, index) => {
  const { name, dest, entry } = task
  console.log(chalk.yellow(`${name}组件打包中，已完成${index + 1}/${tasks.length}个文件...`))
  shell.exec(
    `${rootPath}/node_modules/.bin/vue-cli-service build --target lib --name ${name} --dest ${dest} ${entry}`
  )
})

console.log(chalk.green(`打包完成！！！`))
