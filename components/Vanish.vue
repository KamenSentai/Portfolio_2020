<template>
  <component
    :is="component"
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive || !isRevealed,
        [$style.isLighten]: isLighten,
      }
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Vanish',
  props: {
    component: {
      type: [Object, String],
      default: 'div',
    },
    isRevealed: {
      type: Boolean,
      default: true,
    },
  },
  computed: mapGetters('site', ['isInactive', 'isLighten']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;

  &::before,
  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transition: transform $smooth time(short);
    content: "";
    @include overlay;
  }

  &::before {
    transform-origin: left;
    opacity: 0;
  }

  &::after {
    transform-origin: right;
    opacity: 1;
  }

  &.isInactive {

    &::before {
      transform: scaleX(1);
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
      opacity: 0;
    }
  }

  &.isLighten {

    &::before,
    &::after {
      background-color: color(light);
    }
  }
}
</style>
