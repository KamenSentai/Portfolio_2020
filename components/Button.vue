<template>
  <nuxt-link
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isActive,
        [$style.isLighten]: isLighten,
        [$style.isUnlickable]: !isClickable,
      }
    ]"
    v-bind="$attrs"
  >
    <div :class="$style.circle" />
    <span :class="$style.text">{{ text }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isActive: {
      type: Boolean,
      default: true,
    },
    isClickable: {
      type: Boolean,
      default: true,
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  height: 10rem;
  padding-right: space(sm);
  font-size: size(sm);
  text-transform: uppercase;
  @include centralizer;

  @include bp(md) {
    height: 8rem;
    font-size: size(xs);

    .circle::before {
      width: 8rem;
    }
  }

  &::after {
    z-index: 1;
    background-color: color(dark);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform $smooth-slower;
    content: "";
    @include overlay;
  }

  &:hover {

    .circle::before {
      transform: scale(.875);
    }

    .text::after {
      transform: translateX(50%);
    }
  }

  &.isInactive {
    pointer-events: none;

    &::after,
    .circle::after {
      transform: scaleX(1);
    }

    &::after {
      transition-delay: time(normal);
    }

    .circle::after {
      transition-delay: 0s;
    }
  }

  &.isLighten {
    color: color(dark);

    &::after,
    .circle::after,
    .text::before {
      background-color: color(light);
    }

    .text::after {
      border-left-color: color(dark);
    }
  }

  &.isUnlickable {
    pointer-events: none;
  }
}

.circle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: transform $smooth-slower;
    content: "";
  }

  &::before {
    width: 10rem;
    border: .2rem solid color(primary);
    border-radius: 100%;
    content: "";
  }

  &::after {
    left: 0;
    background-color: color(dark);
    transform: scaleX(0);
    transform-origin: right;
    transition-delay: time(normal);
  }
}

.text {
  position: relative;
  z-index: 1;
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(xs);
  align-items: center;
  padding: .125em 0;

  &::before,
  &::after {
    z-index: -1;
    content: "";
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: color(dark);
  }

  &::after {
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid color(light);
    transition: transform $smooth-slower;
  }
}
</style>
