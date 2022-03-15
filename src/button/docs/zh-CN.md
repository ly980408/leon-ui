# 按钮


### 基本使用
```vue
import BasicUse from '../example/BasicUse'
```

```html
<div>
  <l-button>默认按钮</l-button>
  <l-button type="primary">主要按钮</l-button>
  <l-button type="dashed">虚线按钮</l-button>
  <l-button type="text">文字按钮</l-button>
</div>
<div style="margin-top: 8px">
  <l-button round>圆角按钮</l-button>
  <l-button type="primary" round>主要按钮</l-button>
  <l-button type="dashed" round>虚线按钮</l-button>
</div>
```

### 禁用状态
```vue
import DisabledState from '../example/DisabledState'
```

```html
<l-button disabled>基本使用</l-button>
<l-button type="primary" disabled>主要按钮</l-button>
<l-button type="dashed" disabled>虚线按钮</l-button>
<l-button type="text" disabled>文字按钮</l-button>
```

### 危险状态
<!-- 常用于删除等操作，起到警示效果的按钮 -->

```vue
import DangerState from '../example/DangerState'
```

```html
<l-button danger>基本使用</l-button>
<l-button type="primary" danger>主要按钮</l-button>
<l-button type="dashed" danger>虚线按钮</l-button>
<l-button type="text" danger>文字按钮</l-button>
```

### 不同尺寸

```vue
import ButtonSize from '../example/ButtonSize'
```

```html
<l-button>默认按钮</l-button>
<l-button size="small">小型按钮</l-button>
<l-button size="mini">迷你按钮</l-button>
<l-button size="large">大型按钮</l-button>
```

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 
| --- | --- | --- | --- | --- | 
| `type` | 类型 | _string_ | `default` / `primary` / `text` | `default` |
| `size` | 尺寸 | _string_ | `normal` / `small` / `mini` / `large` | `normal` |
| `round` | 是否圆角按钮 | _boolean_ | - | `false` |
| `danger` | 是否危险状态 | _boolean_ | - | `false` |
| `disabled` | 是否禁用状态 | _boolean_ | - | `false` |
| `loading` | 是否加载状态 | _boolean_ | - | `false` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |