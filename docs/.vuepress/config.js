const zhNav = require('./nav/zh.js')
const { alias } = require('../../build/config')
const components = require('../../build/getComponents')()
const uppercamelcase = require('uppercamelcase')

// 组件目录生成
const componentsList = components.map(name => {
  return [name, uppercamelcase(name)]
})
console.log(componentsList)

module.exports = {
  chainWebpack: config => {
    // 别名配置，需要跟 vue.config.js 统一
    Object.keys(alias).forEach(key => {
      config.resolve.alias.set(key, alias[key])
    })
  },

  title: 'fe',
  description: '前端开发文档',
  // head: [
  //   ['link', { rel: 'icon', href: `` }],
  //   ['link', { rel: 'stylesheet', type: 'text/css', href: `` }]
  // ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  },
  themeConfig: { //主题配置
    // 添加导航栏
    nav: zhNav,
    // 为以下路由添加侧边栏
    sidebar: {
      '/components/': [
        {
          title: '业务组件库',
          collapsable: false,
          children: [
            ['', '介绍'],
            ['quickstart', '快速开始'],
            {
              title: 'components',
              collapsable: false,
              children: componentsList
            }
          ]
        }
      ],
      '/doc/': [
        {
          title: '文档汇总',
          collapsable: false,
          children: [
            ['', '主要内容'],
            ['login', '登录鉴权'],
            ['comps', '公共组件'],
            ['other', '其他']
          ]
        }
      ],
      '/best/': [
        {
          title: '最佳实践',
          collapsable: false,
          children: [
            ['', '初步了解'],
            ['best-practice', '最佳实践']
          ]
        }
      ]
    }
  }
}
