<template>
  <ACVTContainer
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
        [$style.isLighten]: isLighten,
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
    isLighten: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('site', ['isInactive']),
    ...mapGetters('text', ['credit']),
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  height: 100px;
  overflow: hidden;
  color: color(dark);
  background-color: color(primary);
  @include centralizer;

  &::before,
  &::after {
    background-color: color(dark);
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
    background-color: color(dark);
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

  &.isLighten {
    color: color(light);

    &::before,
    &::after {
      background-color: color(light);
    }

    &::selection {
      background-color: color(light);
    }
  }
}
</style>
