<template>
  <div :class="$style.container">
    <nuxt />
    <ACVTHeader />
    <ACVTLoading v-if="!isCompleted" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTHeader from '~/components/Header.vue'
import ACVTLoading from '~/components/Loading.vue'

export default {
  name: 'Default',
  components: {
    ACVTHeader,
    ACVTLoading,
  },
  computed: mapGetters('loading', ['isCompleted']),
  metaInfo: {
    titleTemplate: 'Alain Cao Van Truong | %s',
  },
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
