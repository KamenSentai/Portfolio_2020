<template>
  <ACVTPage
    :component="ACVTJumbotron"
    :is-fading="isFading"
    is-limited
  >
    <ACVTNavbar
      v-if="!$isTablet"
      :is-unclickable="isAnimating"
      @click="updateProject($event)"
    />
    <ACVTWrapper
      template-rows="auto 1fr"
      justify-items="flex-start"
    >
      <ACVTHero
        :is-changing="isChanging"
        is-expandable
        :tag="`${index.tag} ${currentProject.formattedIndex}`"
        :title="currentProject.name"
      />
      <ACVTButton
        :is-unclickable="isAnimating"
        :to="{ name: 'about' }"
        :text="index.button"
      />
    </ACVTWrapper>
    <ACVTIndicator
      @up="wheel({ deltaY: -1 })"
      @down="wheel({ deltaY: 1 })"
    />
  </ACVTPage>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTButton from '~/components/Button.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTIndicator from '~/components/Indicator.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTNavbar from '~/components/Navbar.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'Index',
  components: {
    ACVTButton,
    ACVTHero,
    ACVTIndicator,
    ACVTNavbar,
    ACVTPage,
    ACVTWrapper,
  },
  data() {
    return {
      ACVTJumbotron,
      aboutDelay: 1750,
      isAnimating: false,
      isChanging: false,
      isFading: false,
      touchPosition: 0,
    }
  },
  computed: {
    ...mapGetters('page', ['currentProject', 'totalProjects']),
    ...mapGetters('site', ['currentIndex', 'isInactive']),
    ...mapGetters('text', ['index']),
  },
  mounted() {
    setTimeout(() => {
      this.toggleActivity()
      window.addEventListener('touchstart', this.touchstart)
      window.addEventListener('touchmove', this.touchmove)
      window.addEventListener('wheel', this.wheel)
    }, 500)
  },
  destroyed() {
    window.removeEventListener('touchstart', this.touchstart)
    window.removeEventListener('touchmove', this.touchmove)
    window.removeEventListener('wheel', this.wheel)
  },
  beforeRouteLeave(to, _, next) {
    if (to.name === 'about') {
      this.pageChange()
      this.toggleActivity()

      setTimeout(() => {
        this.isFading = true
        this.pageChange(next)
      }, this.aboutDelay)
    } else {
      next()
    }
  },
  methods: {
    ...mapActions('site', ['loadIndex', 'pageChange', 'toggleActivity', 'updateIndex']),
    touchmove({ touches }) {
      const [{ clientY: y }] = touches
      const movementY = y - this.touchPosition
      this.touchPosition = y
      this.wheel({ deltaY: -movementY })
    },
    touchstart({ touches }) {
      const [{ clientY: y }] = touches
      this.touchPosition = y
    },
    updateProject(index) {
      if (index >= 0 && index < this.totalProjects) {
        this.isAnimating = true
        this.isChanging = true

        this.updateIndex({
          index,
          stropAnimating: () => {
            this.isAnimating = false
          },
          stropChanging: () => {
            this.isChanging = false
          },
        })
      }
    },
    wheel({ deltaY }) {
      if (!this.isAnimating && !this.isInactive) {
        if (deltaY > 0) {
          this.updateProject(this.currentIndex + 1)
        } else if (deltaY < 0) {
          this.updateProject(this.currentIndex - 1)
        }
      }
    },
  },
}
</script>

<style lang="scss" module>
</style>
