
# Copy 复制

<show
  title="用法">
  <jdm-copy content="要复制的内容1"/>
</show>

```vue
<jdm-copy content="要复制的内容1"/>
```

<hr/>

<show
  description="自定义文案">
  <jdm-copy
    success-text="自定义的复制成功文案！"
    content="要复制的内容2"/>
</show>

```vue
<jdm-copy
  success-text="自定义的复制成功文案！"
  content="要复制的内容2"/>
```

<hr/>

<show
  description="有时候，后端可能返回结果中可能没有这个字段或者字段值为null，那么此时复制按钮不能显示的，所以提供降级显示的内容。">
  <jdm-copy :content="null"/>
</show>


```vue
<jdm-copy
  :content="undefined"/>
```

<hr/>

#### Attributes

| 参数        | 说明          | 类型  | 可选值  | 默认值  |
| ------------- |:-------------:| -----:|-----:|-----:|
| content      | 要复制的内容 | String / Number |  | |
| fallback      | 当要复制的内容为null或者undefined时，降级显示的内容 |  String / Number | | -- |
| successText | 复制成功的文案      |  String / Number | | |


#### Events

| 事件名称        | 说明          | 回调参数  |
| ------------- |:-------------:| -----:|
| success      | 复制成功 |  |
| error      | 复制失败    |    |
