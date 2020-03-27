<template>
  <ACVTVanish
    :class="$style.container"
    :component="component"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ text }}
  </ACVTVanish>
</template>

<script>
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Title',
  components: {
    ACVTVanish,
  },
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
  margin-top: -1.6rem;
  color: color(primary);
  font-weight: weight(300);
  font-size: size(xl);
  text-transform: uppercase;

  @include bp(lg) {
    margin-top: -1.2rem;
    font-size: size(lg);
  }

  @include bp(sm) {
    margin-top: 0;
    font-size: size(md);
  }
}
</style>
