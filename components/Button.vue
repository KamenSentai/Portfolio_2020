<template>
  <component
    :is="component"
    :class="[
      $style.container,
      {
        [$style.isInactive]: isUnavailable,
        [$style.isLighten]: isLighten,
        [$style.isLoading]: !isUnavailable && isLoading,
      }
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div :class="$style.circle" />
    <div :class="$style.wrapper">
      <span :class="$style.text">{{ text }}</span>
      <div :class="$style.dots">
        <div
          v-for="i in 3"
          :key="`dot-${i}`"
          :class="$style.dot"
        />
      </div>
    </div>
  </component>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Button',
  props: {
    component: {
      type: [Object, String],
      default: 'nuxt-link',
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('site', ['isInactive', 'isLighten']),
    isUnavailable() {
      return this.isInactive || !this.isRequired
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
    transition: transform $smooth;
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
      transform-origin: left;
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
    .wrapper::before,
    .dots {
      background-color: color(light);
    }

    .text::after {
      border-left-color: color(dark);
    }
  }

  &.isLoading {
    cursor: default;
    pointer-events: none;

    .circle::before {
      transform: scale(.875);
    }

    .wrapper {
      justify-content: flex-start;
    }

    .dots {
      width: 100%;
    }

    .dot {
      transform: translateX(0);
    }
  }
}

.circle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: transform $smooth;
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

.wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .125em 0;

  &::before {
    z-index: -1;
    background-color: color(dark);
    content: "";
    @include overlay;
  }
}

.text {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(xs);
  align-items: center;

  &::after {
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-left-color: color(light);
    transition: transform $smooth;
    content: "";
  }
}

.dots {
  position: absolute;
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(xs);
  align-items: center;
  justify-content: center;
  width: 0;
  height: 100%;
  overflow: hidden;
  background-color: color(dark);
  transition: width $smooth;
}

.dot {
  width: size(regular) * .375;
  height: size(regular) * .375;
  background-color: color(light);
  border-radius: 100%;
  transform: translateX(-500%);
  transition: transform $smooth;
}
</style>
