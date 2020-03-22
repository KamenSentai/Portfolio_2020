<template>
  <ACVTPage
    :component="ACVTJumbotron"
    :is-fading="isFading"
    is-limited
  >
    <ACVTNavbar
      v-if="!$isTablet"
      :is-required="isRequiring"
      :is-unclickable="isAnimating"
      @click="updateProject"
    />
    <ACVTWrapper
      template-rows="auto 1fr"
      justify-items="flex-start"
    >
      <template v-for="(project, i) in projects">
        <ACVTHero
          v-show="isCurrent(i)"
          :key="`hero-${project.slug}`"
          :is-changing="isChanging"
          :is-current="isCurrent(i)"
          is-expandable
          :tag="`${index.tag} ${project.formattedIndex}`"
          :title="project.name"
          @mount="isAnimating = false"
        />
        <ACVTButton
          v-show="isCurrent(i)"
          :key="`button-${project.slug}`"
          :is-required="isRequiring"
          :is-unclickable="isAnimating"
          :to="{ name: 'project-slug', params: { slug: project.slug } }"
          :text="index.button"
          :title="project.name"
        />
      </template>
    </ACVTWrapper>
    <ACVTIndicator
      :is-required="isRequiring"
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
      isRequiring: true,
      projectDelay: 2000,
      touchPosition: 0,
    }
  },
  computed: {
    ...mapGetters('page', ['projects', 'totalProjects']),
    ...mapGetters('site', ['currentIndex', 'fromRoute', 'isInactive']),
    ...mapGetters('text', ['index']),
    isCurrent() {
      return (index) => this.currentIndex === index
    },
  },
  watch: {
    currentIndex() {
      setTimeout(() => {
        this.isChanging = false
      }, 250)
    },
  },
  beforeMount() {
    this.toggleLight(false)
  },
  mounted() {
    setTimeout(() => {
      if (this.fromRoute !== 'project-slug') {
        this.toggleActivity()
      }
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
    } else if (to.name === 'project-slug') {
      this.isRequiring = false

      setTimeout(() => {
        next()
      }, this.projectDelay)
    } else {
      next()
    }
  },
  methods: {
    ...mapActions('site', [
      'loadIndex',
      'pageChange',
      'toggleActivity',
      'toggleLight',
      'updateIndex',
    ]),
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
        this.updateIndex(index)
      }
    },
    wheel({ deltaY }) {
      if (!this.isAnimating && !this.isChanging && !this.isInactive) {
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
