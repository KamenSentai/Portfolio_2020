<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isChanging]: isChanging,
        [$style.isExpandable]: isExpandable,
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
import { mapGetters } from 'vuex'

export default {
  name: 'Hero',
  props: {
    isChanging: {
      type: Boolean,
      default: false,
    },
    isExpandable: {
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
  computed: mapGetters('site', ['isInactive', 'isLighten']),
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(xs);
  justify-items: flex-start;

  &.isChanging,
  &.isInactive {

    .tag,
    .title {

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  &.isLighten {

    .tag,
    .title {

      &::after {
        background-color: color(light);
      }
    }

    .title {
      color: color(dark);
    }
  }

  &.isExpandable .title {

    @include bp(md) {
      min-height: 2em;
    }
  }
}

.tag,
.title {
  position: relative;

  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform $smooth;
    content: "";
    @include overlay;
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
    font-size: size(md);
  }
}
</style>
