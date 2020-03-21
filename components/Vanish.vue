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

  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform $smooth time(short);
    content: "";
    @include overlay;
  }

  &.isInactive::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.isLighten::after {
    background-color: color(light);
  }
}
</style>
