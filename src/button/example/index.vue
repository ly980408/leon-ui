<template>
  <app-type>基本使用</app-type>
  <basic-use/>

  <app-type>修改颜色</app-type>
  <disabled-state/>
</template>

<script>
import Button from '../Button'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import BasicUse from './BasicUse'
import DisabledState from './DisabledState'

export default {
  components: {
    [Button.name]: Button,
    AppType,
    BasicUse,
    DisabledState
  },
}
</script>
