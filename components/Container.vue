<template>
  <ACVTGrid
    :class="[
      $style.container,
      {
        [$style.isLarger]: isLarger
      }
    ]"
    justify-content="center"
  >
    <slot />
  </ACVTGrid>
</template>

<script>
import ACVTGrid from '~/components/Grid.vue'

export default {
  name: 'Container',
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
  grid-gap: space(sm);
  grid-template-columns: repeat(12, 80px);

  @include bp(lg) {
    grid-template-columns: repeat(8, 80px);
  }

  @include bp(md) {
    grid-template-columns: repeat(6, 80px);
  }

  @include bp(sm) {
    grid-template-columns: repeat(4, 80px);
  }

  @include bp(xs) {
    grid-template-columns: repeat(4, 60px);
  }

  &.isLarger {
    grid-row-gap: space(xl);
    padding: space(xl) 0;
  }
}
</style>
