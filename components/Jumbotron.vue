<template>
  <ACVTContainer
    :class="[
      $style.container,
      {
        [$style.isLighten]: isLighten,
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
    isLighten: {
      type: Boolean,
      default: false,
    },
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

  &::before {
    z-index: -1;
    background-color: color(light);
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    pointer-events: none;
    @include overlay;
  }

  &.isLighten {
    color: color(dark);

    &::before {
      opacity: 1;
    }
  }

  &.isLimited {
    grid-template-rows: 1fr auto;
    padding-bottom: space(md);
  }
}
</style>
