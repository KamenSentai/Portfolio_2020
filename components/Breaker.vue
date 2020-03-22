<template>
  <ACVTGrid
    :class="[
      $style.container,
      {
        [$style.isLarger]: isLarger
      }
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </ACVTGrid>
</template>

<script>
import ACVTGrid from '~/components/Grid.vue'

export default {
  name: 'Breaker',
  components: {
    ACVTGrid,
  },
  props: {
    isLarger: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-auto-flow: column;
  grid-gap: space(sm);
  align-content: center;
  justify-content: flex-start;

  &.isLarger {
    grid-gap: space(md);
  }
}
</style>
