<template>
  <button
    class="l-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :class="[
      type ? 'l-button--' + type : 'l-button--default',
      size ? 'l-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-danger': danger,
        'is-round': round
      }
    ]"
  >
    <span class="l-button__content"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

function typeValidator(type: string): boolean {
  return ['default', 'primary', 'text'].includes(type)
}
function sizeValidator(size: string): boolean {
  return ['mini', 'small', 'normal', 'large'].includes(size)
}

export default defineComponent({
  name: 'LButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'text'>,
      default: 'default',
      validator: typeValidator
    },
    size: {
      type: String as PropType<'mini' | 'small' | 'normal' | 'large'>,
      default: 'normal',
      validator: sizeValidator
    },
    onClick: {
      type: Function as PropType<(e: Event) => void>
    },
    disabled: Boolean,
    loading: Boolean,
    danger: Boolean,
    round: Boolean
  },
  setup(props) {
    const handleClick = (e: Event) => props.onClick?.(e)

    return {
      handleClick
    }
  }
})
</script>

<style lang="less">
@import "./button";
</style>
