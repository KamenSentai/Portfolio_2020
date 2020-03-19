<template>
  <ACVTGrid
    :class="$style.container"
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
}
</script>

<style lang="scss" module>
.container {
  grid-gap: space(lg);
}
</style>
