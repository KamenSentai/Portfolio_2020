<template>
  <component
    :is="component"
    :class="$style.container"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    component: {
      type: [Object, String],
      default: 'h1',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  color: color(primary);
  font-weight: 300;
  font-size: size(xl);
  text-transform: uppercase;

  @include bp(lg) {
    font-size: size(lg);
  }

  @include bp(sm) {
    font-size: size(md);
  }
}
</style>
