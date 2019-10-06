# 快速上手

## 安装

```shell
# 使用npm安装
npm install jdm-element

# 使用yarn安装
yarn add jdm-element
```

## 完整引入

不推荐完整引入，包可能过大。

```javascript
import JdmElement from 'jdm-element'
import 'jdm-element/jdm-element.css'
```

## 按需引入

推荐方式，借助[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，只引入需要的组件，以达到减少项目体积的目的。

首先，安装 babel-plugin-import：

```javascript
npm i babel-plugin-import --save-dev
```

然后修改```babel.config.js```文件

```javascript
"plugins": [
  [
    "component",
    {
      "libraryName": "lib"
    }
  ]
]
```

接下来，到```main.js```引入所需组件：

```javascript
import { copy } from 'jdm-element'
Vue.use(copy)
```

使用时请加上```jdm-```前缀
```vue
<jdm-copy content="content"/>
```

## 国际化

待补充...
