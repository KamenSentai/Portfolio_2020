<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
        [$style.isLighten]: isLighten,
      }
    ]"
  >
    <!-- Raw text -->
    <span :class="$style.text">Scroll</span>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  props: {
    isInactive: {
      type: Boolean,
      required: true,
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
  display: grid;
  grid-gap: space(sm);
  align-content: flex-end;
  align-items: flex-end;
  justify-content: center;
  justify-items: center;
  width: 80px;

  @include bp(sm) {
    width: 100%;
  }

  &::after {
    width: .2rem;
    height: size(exeption);
    background-color: color(light);
    transform-origin: bottom;
    transition: transform $smooth-slower time(normal);
    content: "";

    @include bp(sm) {
      height: size(lg);
    }
  }

  &.isInactive {

    &::after {
      transform: scale(0);
      transition-delay: 0s;
    }

    .text {
      transform: translateY(25%);
      opacity: 0;
      transition-delay: time(normal);
    }
  }

  &.isLighten {

    &::after {
      background-color: color(dark);
    }

    .text {
      color: color(dark);
    }
  }
}

.text {
  color: color(light);
  transition: transform $smooth time(longer), opacity $smooth time(longer);
}
</style>
