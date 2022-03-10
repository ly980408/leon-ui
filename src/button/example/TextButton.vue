<template>
  <l-button type="text">文字按钮</l-button>
  <l-button type="text" disabled>文字按钮</l-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'TextButton',
  components: {
    [Button.name]: Button
  }
}
</script>