<template>
  <div :class="$style.container">
    <ACVTLoading v-if="!isCompleted" />
    <nuxt v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTLoading from '~/components/Loading.vue'

export default {
  name: 'Default',
  components: {
    ACVTLoading,
  },
  computed: mapGetters('loading', ['isCompleted']),
}
</script>

<style>
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
}
</style>
