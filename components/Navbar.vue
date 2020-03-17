<template>
  <div :class="$style.container">
    <div :class="$style.wrapper">
      <div
        :class="$style.fillbar"
        :style="{ transform: `scaleY(${currentIndex / (total - 1)})` }"
      />
      <div
        v-for="i in total"
        :key="i"
        :class="[
          $style.dot,
          {
            [$style.isCurrent]: currentIndex === i - 1,
            [$style.isReached]: currentIndex >= i - 1,
          }
        ]"
        :style="{ top: `${(i - 1) / (total - 1) * 100}%` }"
      >
        <span :class="$style.number">{{ numberFormatted(i) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentIndex: 0,
      total: 6,
    }
  },
  computed: {
    digitsLength() {
      return this.total.toString().length + 1
    },
    numberFormatted() {
      return (index) => '0'.repeat(this.digitsLength - index.toString().length) + index
    },
  },
}
</script>

<style lang="scss" module>
.container {
  @include centralizer;
}

.wrapper {
  position: relative;
  width: .2rem;
  height: 100%;
  background-color: color(light, .25);
  @include centralizer;
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
