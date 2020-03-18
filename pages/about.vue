<template>
  <div>
    <ACVTJumbotron is-lighten>
      <ACVTWrapper>
        <!-- Raw text -->
        <ACVTHero
          :is-inactive="!isMounted"
          is-lighten
          tag="I am a"
          title="Junior full-stack developer"
        />
      </ACVTWrapper>
    </ACVTJumbotron>
  </div>
</template>

<script>
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'About',
  components: {
    ACVTHero,
    ACVTJumbotron,
    ACVTWrapper,
  },
  data() {
    return {
      isMounted: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, 500)
  },
}
</script>

<style lang="scss" module>
</style>
