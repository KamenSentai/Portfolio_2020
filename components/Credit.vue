<template>
  <ACVTContainer
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
      }
    ]"
  >
    {{ credit.text }}
  </ACVTContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTContainer from '~/components/Container.vue'

export default {
  name: 'Credit',
  components: {
    ACVTContainer,
  },
  props: {
    isInactive: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapGetters('text', ['credit']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  height: 100px;
  overflow: hidden;
  color: color(light);
  background-color: color(primary);
  @include centralizer;

  &::before,
  &::after {
    background-color: color(light);
    transform: scaleY(0);
    transition: transform $smooth;
    content: "";
    @include overlay;
  }

  &::before {
    transform-origin: top;
    opacity: 0;
  }

  &::after {
    transform-origin: bottom;
    opacity: 1;
  }

  &::selection {
    color: color(primary);
    background-color: color(light);
  }

  &.isInactive {

    &::before,
    &::after {
      transform: scaleY(1);
    }

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0;
    }
  }
}
</style>
