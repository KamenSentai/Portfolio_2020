<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive || !isRequired,
        [$style.isUnclickable]: isUnclickable,
      }
    ]"
  >
    <div :class="$style.wrapper">
      <div
        :class="$style.fillbar"
        :style="{ transform: `scaleY(${!(isInactive || !isRequired) ? rate : 0})` }"
      />
      <div
        v-for="i in totalProjects"
        :key="`dot-${i}`"
        :class="[
          $style.dot,
          {
            [$style.isCurrent]: isCurrent(i),
            [$style.isReached]: isReached(i),
          }
        ]"
        :style="{ top: `${(i - 1) / (totalProjects - 1) * 100}%` }"
        @click="!isUnclickable && !isCurrent(i) && $emit('click', i - 1)"
      >
        <span :class="$style.number">{{ formattedNumber(i) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  props: {
    isRequired: {
      type: Boolean,
      default: true,
    },
    isUnclickable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('page', ['totalProjects']),
    ...mapGetters('site', ['isInactive', 'temporaryIndex']),
    digitsLength() {
      return this.totalProjects.toString().length + 1
    },
    isCurrent() {
      return (index) => !this.isInactive && this.temporaryIndex === index - 1
    },
    isReached() {
      return (index) => !this.isInactive && this.temporaryIndex >= index - 1
    },
    formattedNumber() {
      return (index) => '0'.repeat(this.digitsLength - index.toString().length) + index
    },
    rate() {
      return this.temporaryIndex / (this.totalProjects - 1)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  user-select: none;
  @include centralizer;

  &.isInactive {

    .wrapper::before {
      transform: scaleY(0);
      transition-delay: time(longer);
    }

    .dot {
      opacity: 0;
      transition-delay: time(normal);
    }
  }

  &.isUnclickable .dot {
    cursor: default;
  }
}

.wrapper {
  position: relative;
  width: .2rem;
  height: 100%;
  @include centralizer;

  &::before {
    background-color: color(light, .25);
    transform-origin: top;
    transition: transform $smooth-slower time(normal);
    content: "";
    @include overlay;
  }
}

.fillbar {
  background-color: color(light);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform $smooth;
  @include overlay;
}

.dot {
  position: absolute;
  width: size(xs);
  height: size(xs);
  background-color: color(dark);
  border-radius: 100%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: opacity $smooth-slower time(longer);
  @include centralizer;

  &::before,
  &::after {
    position: absolute;
    border-radius: inherit;
    content: "";
  }

  &::before {
    top: 12.5%;
    right: 12.5%;
    bottom: 12.5%;
    left: 12.5%;
    border: .1rem solid color(light);
    transform: scale(0);
    opacity: 0;
    transition: transform $smooth, opacity $smooth;
  }

  &::after {
    top: 37.5%;
    right: 37.5%;
    bottom: 37.5%;
    left: 37.5%;
    background-color: color(light);
    opacity: .25;
    transition: opacity $smooth;
  }

  &:hover,
  &.isCurrent {

    &::before {
      transform: scale(1);
      opacity: 1;
    }

    .number {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &:hover,
  &.isReached {

    &::after {
      opacity: 1;
    }
  }
}

.number {
  position: absolute;
  right: calc(100% + .25em);
  font-size: size(regular);
  transform: translateX(50%);
  opacity: 0;
  transition: transform $smooth, opacity $smooth;
}
</style>
