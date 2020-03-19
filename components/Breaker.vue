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
  name: 'Breaker',
  components: {
    ACVTGrid,
  },
}
</script>

<style lang="scss" module>
.container {
  grid-auto-flow: column;
  grid-gap: space(sm);
  align-content: center;
  justify-content: flex-start;
}
</style>
