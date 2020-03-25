<template>
  <ACVTGrid
    :class="[
      $style.container,
      {
        [$style.isThiner]: isThiner,
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
  name: 'Section',
  components: {
    ACVTGrid,
  },
  props: {
    isThiner: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-gap: space(lg) space(sm);

  &.isThiner {
    grid-gap: space(md) space(sm);
  }
}
</style>
