# Spin - 加载状态组件

```jsx
/**
 * title: loading
 * desc: 选择框的基本使用方法
 */


import React from 'react';
import { Spin } from '@kzui/core';

export default () => (
  <Spin 
    size='normal'
    tip='spin'
    spinning={true}
  />
);
```

## 属性

属性名 | 类型 | 描述 | 是否必须 | 默认值 | 字典 |
------- | ------- | ------- | ------- | ------- | ------- |
size | enum | 尺寸 | 否 | 'normal' | small: 小，normal: 中，large: 大
tip | string | 提示文本 | 否 | '' | 
spinning | bool | 是否为加载状态 | 否 | true | 
