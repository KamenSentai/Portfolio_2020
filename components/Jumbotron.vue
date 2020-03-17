<template>
  <ACVTContainer :class="$style.container">
    <slot />
  </ACVTContainer>
</template>

<script>
import ACVTContainer from '~/components/Container.vue'

export default {
  name: 'Jumbotron',
  components: {
    ACVTContainer,
  },
}
</script>

<style lang="scss" module>
.container {
  height: 100vh;
  padding-top: calc(#{space(md)} + #{space(lg)} + 1em);
}
</style>
