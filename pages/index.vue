<template>
  <ACVTJumbotron
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isMounted,
        [$style.isLighten]: isLighten,
      }
    ]"
    :is-lighten="isLighten"
  >
    <template v-if="!isLighten">
      <ACVTNavbar
        v-if="!$isMobile"
        :is-active="isMounted"
        :is-clickable="!isAnimating"
        @click="updateProject($event)"
      />
      <ACVTWrapper>
        <!-- Raw text -->
        <ACVTHero
          :is-changing="isChanging"
          :is-inactive="!isMounted"
          :tag="`Project ${currentProject.formattedIndex}`"
          :title="currentProject.name"
        />
        <ACVTBreaker justify-content="flex-start">
          <!-- Raw text -->
          <ACVTButton
            :is-active="isMounted"
            :is-clickable="!isAnimating"
            :to="{ name: 'about' }"
            text="Discover"
          />
        </ACVTBreaker>
      </ACVTWrapper>
      <ACVTScroll
        :is-inactive="!isMounted"
        @up="wheel({ deltaY: -1 })"
        @down="wheel({ deltaY: 1 })"
      />
    </template>
  </ACVTJumbotron>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTNavbar from '~/components/Navbar.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'Index',
  components: {
    ACVTBreaker,
    ACVTButton,
    ACVTHero,
    ACVTJumbotron,
    ACVTNavbar,
    ACVTScroll,
    ACVTWrapper,
  },
  data() {
    return {
      aboutDelay: 2500,
      duration: 750,
      isAnimating: false,
      isChanging: false,
      isLighten: false,
      isMounted: false,
      touchPosition: 0,
    }
  },
  computed: mapGetters('site', ['currentIndex', 'currentProject', 'totalProjects']),
  mounted() {
    setTimeout(() => {
      this.isMounted = true
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
      this.isMounted = false

      setTimeout(() => {
        this.isLighten = true

        setTimeout(() => {
          this.pageChange()
          next()
        }, this.duration)
      }, this.aboutDelay)
    } else {
      next()
    }
  },
  methods: {
    ...mapActions('site', ['loadIndex', 'pageChange', 'updateIndex']),
    updateProject(index) {
      if (index >= 0 && index < this.totalProjects) {
        const { duration } = this
        this.isAnimating = true
        this.isChanging = true

        this.updateIndex({
          duration,
          index,
          callback: () => {
            this.isChanging = false

            setTimeout(() => {
              this.isAnimating = false
            }, this.duration)
          },
        })
      }
    },
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
    wheel({ deltaY }) {
      if (!this.isAnimating) {
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
.container {
  padding-bottom: space(md);
}
</style>
