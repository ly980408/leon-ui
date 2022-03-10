<template>
  <l-button danger>基本使用</l-button>
  <l-button type="primary" danger>主要按钮</l-button>
  <l-button type="text" danger>文字按钮</l-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'DangerState',
  components: {
    [Button.name]: Button
  }
}
</script>
