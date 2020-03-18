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
    <p
      v-for="(paragraph, i) in text"
      :key="`paragraph-${i}`"
      :class="$style.paragraph"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    isInactive: {
      type: Boolean,
      default: false,
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sx);
  align-content: flex-start;
  color: color(light);
  font-weight: 300;
  line-height: 1.125;
  letter-spacing: .03125em;

  &:not(.isInactive) {

    .paragraph {

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

  &.isInactive {

    .paragraph {

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
    color: color(dark);

    .paragraph {

      &::before,
      &::after {
        background-color: color(light);
      }
    }
  }
}

.paragraph {
  position: relative;

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
  }
}

</style>
