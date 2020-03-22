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
    <span :class="$style.text">{{ scroll.text }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Scroll',
  computed: {
    ...mapGetters('site', ['isInactive', 'isLighten']),
    ...mapGetters('text', ['scroll']),
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
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

  &::before {
    position: absolute;
    bottom: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid color(light);
    border-right: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    transition: transform $smooth time(short);
    content: "";
  }

  &::after {
    width: .2rem;
    height: size(xl);
    background-color: color(light);
    transform-origin: bottom;
    transition: transform $smooth-slower time(normal);
    content: "";

    @include bp(sm) {
      height: size(md);
    }
  }

  &.isInactive {

    &:before {
      transform: scaleX(0);
    }

    &::after {
      transform: scaleY(0);
      transition-delay: 0s;
    }

    .text {
      transform: translateY(25%);
      opacity: 0;
      transition-delay: time(normal);
    }
  }

  &.isLighten {

    &::before {
      border-top-color: color(dark);
    }

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
  font-size: size(regular);
  text-transform: uppercase;
  transition: transform $smooth time(longer), opacity $smooth time(longer);
}
</style>
