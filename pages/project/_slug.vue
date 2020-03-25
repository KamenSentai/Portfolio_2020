<template>
  <ACVTPage :is-fading="isFading">
    <ACVTJumbotron>
      <ACVTWrapper template-rows="auto auto 1fr">
        <ACVTHero
          :tag="`${index.tag} ${currentProject.formattedIndex}`"
          :title="currentProject.name"
        />
        <ACVTBreaker is-larger>
          <ACVTButton
            v-if="!!currentProject.code"
            component="a"
            :href="currentProject.code"
            :is-required="isRequiring"
            rel="noopener noreferrer"
            target="_blank"
            :text="project.code"
          />
          <ACVTButton
            v-if="!!currentProject.demo"
            component="a"
            :href="currentProject.demo"
            :is-required="isRequiring"
            rel="noopener noreferrer"
            target="_blank"
            :text="project.demo"
          />
        </ACVTBreaker>
        <ACVTScroll :is-required="isRequiring" />
      </ACVTWrapper>
    </ACVTJumbotron>
    <ACVTContainer is-larger>
      <ACVTWrapper>
        <ACVTField
          :subtitle="project.context"
          :text="currentProject.context"
        />
      </ACVTWrapper>
    </ACVTContainer>
    <ACVTParallax :src="currentProject.parallax" />
    <ACVTContainer is-larger>
      <ACVTWrapper>
        <ACVTSection
          :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
          align-items="flex-start"
        >
          <ACVTField
            :subtitle="project.date"
            :text="[currentProject.date]"
          />
          <ACVTField
            :subtitle="project.tools"
            :text="currentProject.tools"
          />
          <ACVTField
            is-larger
            :group="currentProject.team.map((entity) => Object.values(entity))"
            :subtitle="project.team"
          />
        </ACVTSection>
      </ACVTWrapper>
      <ACVTWrapper>
        <ACVTGallery :gallery="currentProject.gallery" />
      </ACVTWrapper>
      <ACVTWrapper
        component="footer"
        justify-content="flex-end"
      >
        <ACVTButton
          :text="project.next"
          :title="nextProject.name"
          :to="{ name: 'project-slug', params: { slug: nextProject.slug } }"
        />
      </ACVTWrapper>
    </ACVTContainer>
  </ACVTPage>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTContainer from '~/components/Container.vue'
import ACVTField from '~/components/Field.vue'
import ACVTGallery from '~/components/Gallery.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTParallax from '~/components/Parallax.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTWrapper from '~/components/Wrapper.vue'
import { easings, scrollTo } from '~/assets/scripts/scroll'

export default {
  name: 'Project',
  components: {
    ACVTBreaker,
    ACVTButton,
    ACVTContainer,
    ACVTField,
    ACVTGallery,
    ACVTHero,
    ACVTJumbotron,
    ACVTPage,
    ACVTParallax,
    ACVTScroll,
    ACVTSection,
    ACVTWrapper,
  },
  data() {
    return {
      isFound: true,
      isFading: false,
      isRequiring: true,
      pageDelay: 1500,
    }
  },
  computed: {
    ...mapGetters('page', ['currentProject', 'projects', 'totalProjects']),
    ...mapGetters('site', ['isInactive']),
    ...mapGetters('text', ['index', 'project']),
    nextProject() {
      return this.currentProject.next
    },
  },
  beforeRouteEnter(to, _, next) {
    next((vm) => {
      const requestedProject = vm.projects.find((project) => project.slug === to.params.slug)

      if (requestedProject) {
        vm.$store.commit('site/updateIndex', requestedProject.index, { root: true })
        next()
      } else {
        vm.isFound = false
        next({ name: 'index' })
      }
    })
  },
  beforeMount() {
    this.toggleLight(false)
    this.isRequiring = this.isInactive
  },
  mounted() {
    setTimeout(() => {
      if (this.isInactive && this.isFound) {
        this.toggleActivity()
      } else {
        this.isRequiring = true
      }
    }, 500)
  },
  beforeRouteLeave(to, _, next) {
    if (to.name === 'index') {
      this.pageChange()
      this.isRequiring = false

      if (window.scrollY < window.innerHeight / 2) {
        scrollTo(0, 1000, easings.easeInOutQuad)
      } else {
        this.toggleActivity()
      }

      setTimeout(() => {
        this.pageChange()
        next()
      }, this.pageDelay)
    } else if (to.name === 'about') {
      this.pageChange()
      this.toggleActivity()

      setTimeout(() => {
        this.isFading = true
        this.pageChange(next)
      }, this.pageDelay)
    } else {
      next()
    }
  },
  beforeRouteUpdate(to, _, next) {
    const { index } = this.projects.find((project) => project.slug === to.params.slug)
    this.pageChange()
    this.toggleActivity()

    setTimeout(() => {
      this.loadIndex(index)
      this.updateIndex(index)
      this.pageChange()
      next()
    }, this.pageDelay)
  },
  methods: mapActions('site', [
    'loadIndex',
    'pageChange',
    'toggleActivity',
    'toggleLight',
    'updateIndex',
  ]),
  head() {
    return {
      title: this.currentProject.name,
      meta: [
        {
          name: 'description',
          content: this.currentProject.description,
        },
      ],
    }
  },
}
</script>
