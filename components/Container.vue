<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sm);
  grid-template-columns: repeat(12, 80px);
  justify-content: center;

  @include bp(lg) {
    grid-template-columns: repeat(8, 80px);
  }

  @include bp(md) {
    grid-template-columns: repeat(6, 80px);
  }

  @include bp(sm) {
    grid-template-columns: repeat(4, 80px);
  }

  @include bp(xs) {
    grid-template-columns: repeat(4, 60px);
  }
}
</style>
