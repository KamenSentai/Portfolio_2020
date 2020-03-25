<template>
  <ACVTPage
    :component="ACVTJumbotron"
    :is-fading="isFading"
    is-limited
  >
    <ACVTSidebar
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
          component="h2"
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
import ACVTSidebar from '~/components/Sidebar.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'Index',
  components: {
    ACVTButton,
    ACVTHero,
    ACVTIndicator,
    ACVTSidebar,
    ACVTPage,
    ACVTWrapper,
  },
  data() {
    return {
      ACVTJumbotron,
      isAnimating: false,
      isChanging: false,
      isFading: false,
      isRequiring: true,
      pageDelay: 2000,
      touchPosition: 0,
    }
  },
  computed: {
    ...mapGetters('page', ['projects', 'totalProjects']),
    ...mapGetters('site', ['currentIndex', 'isInactive']),
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
    this.isRequiring = this.isInactive
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden'

    setTimeout(() => {
      if (this.isInactive) {
        this.toggleActivity()
      } else {
        this.isRequiring = true
      }
      window.addEventListener('touchstart', this.touchstart)
      window.addEventListener('touchmove', this.touchmove)
      window.addEventListener('wheel', this.wheel)
    }, 500)
  },
  destroyed() {
    document.documentElement.style.overflow = 'auto'
    window.removeEventListener('touchstart', this.touchstart)
    window.removeEventListener('touchmove', this.touchmove)
    window.removeEventListener('wheel', this.wheel)
  },
  beforeRouteLeave(to, _, next) {
    this.isAnimating = true

    if (to.name === 'about') {
      this.pageChange()
      this.toggleActivity()

      setTimeout(() => {
        this.isFading = true
        this.pageChange(next)
      }, this.pageDelay)
    } else if (to.name === 'project-slug') {
      this.pageChange()
      this.isRequiring = false

      setTimeout(() => {
        this.pageChange()
        next()
      }, this.pageDelay)
    } else {
      next()
    }
  },
  methods: {
    ...mapActions('site', ['navigateIndex', 'pageChange', 'toggleActivity', 'toggleLight']),
    touchmove({ touches: [{ clientY: y }] }) {
      const movementY = y - this.touchPosition
      this.touchPosition = y
      this.wheel({ deltaY: -movementY })
    },
    touchstart({ touches: [{ clientY: y }] }) {
      this.touchPosition = y
    },
    updateProject(index) {
      if (index >= 0 && index < this.totalProjects) {
        this.isAnimating = true
        this.isChanging = true
        this.navigateIndex(index)
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
  head() {
    return {
      title: this.index.meta.title,
      meta: [
        {
          name: 'description',
          content: this.index.meta.description,
        },
      ],
    }
  },
}
</script>
