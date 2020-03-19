<template>
  <div
    :class="[
      $style.container,
      {
        [$style.inline]: inline,
      }
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import { props, style } from '~/assets/scripts/grid'

export default {
  name: 'Breaker',
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
  grid-auto-flow: column;
  grid-gap: space(md) space(sm);
}

.inline {
  display: inline-grid;
}
</style>
