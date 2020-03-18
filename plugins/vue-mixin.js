import Vue from 'vue'

Vue.mixin({
  computed: {
    $fadeDuration() {
      return 750
    },
    $isHome() {
      return this.$route.name === 'home'
    },
    $isAbout() {
      return this.$route.name === 'about'
    },
    $isProject() {
      return this.$route.name === 'project'
    },
    $isMobile() {
      return this.$mq === 'xs'
    },
    $isTablet() {
      return ['xs', 'sm'].includes(this.$mq)
    },
  },
})
