<template>
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
</template>

<script>
import Button from '../Button'

export default {
  name: 'BasicUse',
  components: {
    [Button.name]: Button
  }
}
</script>
