<template>
  <component
    :is="component"
    :class="[
      $style.container,
      {
        [$style.isFading]: isFading,
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
export default {
  name: 'Page',
  props: {
    component: {
      type: [Object, String],
      default: 'div',
    },
    isFading: {
      type: Boolean,
      default: false,
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  color: color(light);
  background-color: color(dark);

  &::after {
    z-index: 100;
    background-color: color(light);
    opacity: 0;
    transition: opacity $smooth;
    content: "";
    pointer-events: none;
    @include overlay;
  }

  &.isFading::after {
    opacity: 1;
  }

  &.isLighten {
    color: color(dark);
    background-color: color(light);

    &::after {
      background-color: color(dark);
    }
  }
}
</style>
