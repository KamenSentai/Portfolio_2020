<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(md);
  grid-column: 3 / -3;
  grid-template-rows: auto 1fr;
  align-content: flex-start;

  @include bp(lg) {
    grid-column: 2 / -2;
  }

  @include bp(md) {
    grid-column: 1 / -1;
  }
}
</style>
