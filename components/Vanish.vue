<template>
  <component
    :is="component"
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isActive && !isLoading,
        [$style.isLighten]: isLighten || $isAbout,
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
    isLoading: {
      type: Boolean,
      default: false,
    },
    isRevealed: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      delay: 75,
      isActive: false,
    }
  },
  computed: {
    ...mapGetters('site', ['isInactive', 'isLighten']),
    isHidden() {
      return this.isInactive || !this.isRevealed
    },
  },
  watch: {
    isHidden: {
      handler(value) {
        setTimeout(() => {
          this.isActive = !value
        }, this.delay * this.order)
      },
      immediate: true,
    },
  },
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
    @include overlay((position: absolute, value: -1px));
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
