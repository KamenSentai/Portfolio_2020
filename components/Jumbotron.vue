<template>
  <ACVTContainer
    :class="[
      $style.container,
      {
        [$style.isLimited]: isLimited,
      }
    ]"
  >
    <slot />
  </ACVTContainer>
</template>

<script>
import ACVTContainer from '~/components/Container.vue'

export default {
  name: 'Jumbotron',
  components: {
    ACVTContainer,
  },
  props: {
    isLimited: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  min-height: 100vh;
  padding-top: calc(#{space(md)} + #{space(lg)} + 1em);

  &.isLimited {
    grid-template-rows: 1fr auto;
    padding-bottom: space(md);
  }
}
</style>
