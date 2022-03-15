<template>
  <div>
    <l-button>默认按钮</l-button>
    <l-button size="small">小型按钮</l-button>
    <l-button size="mini">迷你按钮</l-button>
    <l-button size="large">大型按钮</l-button>
  </div>
  <div style="margin-top: 8px">
    <l-button round>默认按钮</l-button>
    <l-button size="small" round>小型按钮</l-button>
    <l-button size="mini" round>迷你按钮</l-button>
    <l-button size="large" round>大型按钮</l-button>
  </div>
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
