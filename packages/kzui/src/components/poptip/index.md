# PopTip - 气泡提示


```jsx
/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { PopTip } from '@kzui/core';

export default () => { 
    return (
        <PopTip tip='this is a poptip'>
            hover me
        </PopTip>
    );
}
```

```jsx
/**
 * title: 气泡可以有十二个方向
 * desc: 通过 `placement` 属性控制，默认为`bottom`
 */
import React from 'react';
import { PopTip } from '@kzui/core';

export default () =>{ 
    return (
        <PopTip tip='this is a poptip' placement='bottom-right'>
            hover me
        </PopTip>
    );
}
```


```jsx
/**
 * title: 浅色主题
 * desc: 通过 `theme` 属性控制，默认为`dark`, 浅色主题可以通过将 `theme` 设置成 `light`。
 */
import React from 'react';
import { PopTip } from '@kzui/core';

export default () =>{ 
    return (
        <PopTip tip='this is a poptip' theme='light'>
            hover me
        </PopTip>
    );
}
```

```jsx
/**
 * title: 点击展示气泡
 * desc: 将 `trigger` 属性设置为 `click`。
 */
import React from 'react';
import { PopTip, Button } from '@kzui/core';

export default () =>{ 
    return (
        <PopTip tip='this is a poptip' theme='light' trigger='click'>
            <Button style={{ marginRight: 0 }}>点击我</Button>
        </PopTip>
    );
}
```
## 属性

属性名 | 类型 | 描述 | 是否必须 | 默认值 | 字典 |  
------- | ------- | ------- | ------- | ------- | ------- |
trigger | `string` | 触发方式 | 否 | '`hover` | `hover`, `click`|
tip | `React.ReactNode` | 提示内容 | 否 | '' | - |
children | `React.ReactNode` | 主体内容 | 是 | null | - |
placement | `left` \| `right` \| `top` \| `bottom` \| `left-bottom` \| `left-top` \| `right-top` \| `right-bottom` \| `bottom-left` \| `bottom-right`\| `top-left` \| `top-right` | 提示摆放位置  | 否 | `bottom` | `left` \| `right` \| `top` \| `bottom` \| `left-bottom` \| `left-top` \| `right-top` \| `right-bottom` \| `bottom-left` \| `bottom-right`\| `top-left` \| `top-right`|
theme | `light` \| `dark` | 主题，分为深色和浅色 | 否 | `dark` | `light` \| `dark` |
tipStyle | React.CSSProperties | 提示部分的 style | 否 | {} | - |
visible | boolean | 使气泡显隐受控 | 否 | - | - |
className | string | 样式类名 | 否 | '' | - |
style | React.CSSProperties | 组件最外层元素 style | {} | - |
tipClassName | 气泡部分样式类名 | '' | - |
destroyOnHide | boolean | 隐藏时销毁 | false | - |

## 事件

属性名 | 类型 | 描述 | 是否必须 | 默认值 | 字典 |  
------- | ------- | ------- | ------- | ------- | ------- |
onVisible | () => void  | 内部控制显隐的显示后的回调 | 否 | null | - |
onVisibleChange | (visible: boolean) => void | 用于手动控制气泡显隐 | 否 | null | - |
onTriggerHover | (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | hover触发元素时回调 | 否 | null | - |
onTriggerClick | (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | 点击触发元素时回调 | 否 | null | - |