<template>
  <l-button>默认按钮</l-button>
  <l-button type="primary">主要按钮</l-button>
  <l-button type="text">文字按钮</l-button>
  <l-button round>圆角按钮</l-button>
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
