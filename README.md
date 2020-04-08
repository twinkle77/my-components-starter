# 快速上手

## 安装

```sh
# 使用npm安装
npm install @test/jdm-element

# 使用yarn安装
yarn add @test/jdm-element
```

## 完整引入

不推荐完整引入，包可能过大。

```javascript
import jdmElement from '@test/jdm-element'
import '@test/jdm-element/lib/jdm-element.css'

Vue.use(jdmElement)
```

使用时请加上`jdm-`前缀

```vue
<jdm-copy content="content" />
```

## 按需引入

通用方式：

```javascript
import Copy from '@test/jdm-element/lib/copy/copy.umd.js'
import '@test/jdm-element/lib/copy/copy.css'

Vue.use(Copy)
```

推荐方式：

借助[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，只引入需要的组件，以达到减少项目体积的目的。

首先，安装 babel-plugin-import：

```sh
npm i babel-plugin-import --save-dev
```

然后修改`babel.config.js`文件

```javascript
"plugins": [
  [
    'babel-plugin-import',
    {
      libraryName: '@test/jdm-element',
      customName(name) {
        name = name.toLowerCase()
        return `@test/jdm-element/lib/${name}/${name}.umd.min.js`
      },
      style(compPath) {
        return `${compPath.slice(0, compPath.lastIndexOf('.umd.min.js'))}.css`
      }
    }
  ]
]
```

接下来，到`main.js`引入所需组件：

```javascript
import { copy } from '@test/jdm-element'
Vue.use(copy)
```

## 国际化

适用于完整引入：

```javascript
// 引入英语语言包
import enLanguage from '@test/jdm-element/lib/locale/lang/en'

// getLocale为你自己实现的用于获取当前使用的语言的函数
Vue.use(jdmElement, {
  locale: getLocale() === 'en' ? enLanguage : null
})
```

适用于按需引入：

```javascript
import enLang from '@test/jdm-element/lib/locale/lang/en'
import locale from '@test/jdm-element/lib/locale'
locale.use(enLang)
```
