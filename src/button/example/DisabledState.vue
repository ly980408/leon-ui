<template>
  <l-button disabled>基本使用</l-button>
  <l-button type="primary" disabled>主要按钮</l-button>
  <l-button type="dashed" disabled>虚线按钮</l-button>
  <l-button type="text" disabled>文字按钮</l-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'DisabledState',
  components: {
    [Button.name]: Button
  }
}
</script>
