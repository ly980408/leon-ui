<template>
  <l-button>默认按钮</l-button>
  <l-button size="small">小型按钮</l-button>
  <l-button size="mini">迷你按钮</l-button>
  <l-button size="large">大型按钮</l-button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'ButtonSize',
  components: {
    [Button.name]: Button
  }
}
</script>
