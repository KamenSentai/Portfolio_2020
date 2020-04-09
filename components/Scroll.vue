<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive || !isRequired,
        [$style.isLighten]: isLighten,
      }
    ]"
    @click="scrollTo"
  >
    <span :class="$style.text">{{ scroll.text }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { easings, scrollTo } from '~/assets/scripts/scroll'

export default {
  name: 'Scroll',
  props: {
    isRequired: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters('site', ['isInactive', 'isLighten']),
    ...mapGetters('text', ['scroll']),
  },
  methods: {
    scrollTo() {
      scrollTo(window.innerHeight, 1000, easings.easeInOutQuad)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  display: grid;
  grid-gap: space(sm);
  align-self: flex-end;
  justify-content: center;
  justify-items: center;
  width: 80px;
  cursor: pointer;

  @include bp(sm) {
    width: 100%;
  }

  &::before {
    position: absolute;
    bottom: -8px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: color(light);
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
