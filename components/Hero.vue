<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isChanging]: isChanging,
        [$style.isInactive]: isInactive,
        [$style.isLighten]: isLighten,
      }
    ]"
  >
    <span :class="$style.tag">{{ tag }}</span>
    <h2 :class="$style.title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    isChanging: {
      type: Boolean,
      default: false,
    },
    isInactive: {
      type: Boolean,
      default: false,
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(xs);
  justify-items: flex-start;

  &:not(isInactive):not(.isChanging) {

    .tag,
    .title {

      &::before {
        transform: scaleX(0);
        opacity: 0;
      }

      &::after {
        transform: scaleX(0);
        opacity: 1;
      }
    }
  }

  &.isChanging:not(.isInactive) {

    .tag,
    .title {

      &::before {
        transform: scaleX(1);
        opacity: 1;
      }

      &::after {
        transform: scaleX(1);
        opacity: 0;
      }
    }
  }

  &.isInactive:not(.isChanging) {

    .tag,
    .title {

      &::before {
        transform: scaleX(1);
        opacity: 1;
      }

      &::after {
        transform: scaleX(1);
        opacity: 0;
      }
    }
  }

  &.isLighten {

    .tag,
    .title {

      &::before,
      &::after {
        background-color: color(light);
      }
    }

    .title {
      color: color(dark);
    }
  }
}

.tag,
.title {
  position: relative;

  &::before,
  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transition: transform $smooth;
    content: "";
    @include overlay;
  }

  &::before {
    transform-origin: left;
    opacity: 0;
  }

  &::after {
    transform-origin: right;
  }
}

.tag {
  color: color(primary);
  font-weight: 300;
  font-size: size(md);
  text-transform: uppercase;

  @include bp(md) {
    font-size: size(sm);
  }

  @include bp(sm) {
    font-size: size(xs);
  }

  &::before,
  &::after {
    transition-delay: time(shorter);
  }
}

.title {
  font-size: size(xl);

  @include bp(lg) {
    font-size: size(lg);
  }

  @include bp(md) {
    min-height: 2em;
    font-size: size(md);
  }
}
</style>
