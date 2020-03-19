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
  name: 'Area',
  components: {
    ACVTGrid,
  },
}
</script>

<style lang="scss" module>
.container {
  grid-gap: space(md) space(sm);
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: flex-start;
  justify-items: flex-start;

  @include bp(sm) {
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }
}
</style>
