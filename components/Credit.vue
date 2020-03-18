<template>
  <ACVTContainer :class="$style.container">
    {{ credit.text }}
  </ACVTContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTContainer from '~/components/Container.vue'

export default {
  name: 'Credit',
  components: {
    ACVTContainer,
  },
  computed: mapGetters('text', ['credit']),
}
</script>

<style lang="scss" module>
.container {
  height: 100px;
  color: color(light);
  background-color: color(primary);
  @include centralizer;
}
</style>
