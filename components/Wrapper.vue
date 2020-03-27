<template>
  <ACVTGrid
    :class="[
      $style.container,
      {
        [$style.isSmaller]: isSmaller,
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
  name: 'Wrapper',
  components: {
    ACVTGrid,
  },
  props: {
    isSmaller: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-gap: space(md);
  grid-column: 3 / -3;
  align-content: flex-start;

  @include bp(lg) {
    grid-column: 2 / -2;
  }

  @include bp(md) {
    grid-column: 1 / -1;
  }

  &.isSmaller {
    grid-gap: space(sm);
  }
}
</style>
