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
    {{ text }}
  </component>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Title',
  props: {
    component: {
      type: [Object, String],
      default: 'h1',
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
    isRevealed: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: mapGetters('site', ['isInactive']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  margin-top: -1.6rem;
  color: color(primary);
  font-weight: 300;
  font-size: size(xl);
  text-transform: uppercase;

  @include bp(lg) {
    margin-top: -1.2rem;
    font-size: size(lg);
  }

  @include bp(sm) {
    margin-top: 0;
    font-size: size(md);
  }

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
