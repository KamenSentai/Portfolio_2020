<template>
  <div
    :class="$style.container"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
import { props, style } from '~/assets/scripts/grid'

export default {
  name: 'Wrapper',
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
  grid-gap: space(md);
  grid-column: 3 / -3;
  align-content: flex-start;

  @include bp(lg) {
    grid-column: 2 / -2;
  }

  @include bp(md) {
    grid-column: 1 / -1;
  }
}
</style>
