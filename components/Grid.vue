<template>
  <component
    :is="component"
    :class="[
      $style.container,
      {
        [$style.inline]: inline,
      }
    ]"
    :style="style"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import { props, style } from '~/assets/scripts/grid'

export default {
  name: 'Grid',
  props,
  computed: {
    style() {
      return style(this.$props)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
}

.inline {
  display: inline-grid;
}
</style>
