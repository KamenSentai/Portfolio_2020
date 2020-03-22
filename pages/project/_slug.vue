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
          subtitle="Description"
          :text="currentProject.description"
        />
      </ACVTWrapper>
      <ACVTWrapper>
        <ACVTSection
          :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
          align-items="flex-start"
        >
          <ACVTField
            subtitle="Date"
            :text="currentProject.date"
          />
          <ACVTField
            subtitle="Tools"
            :text="currentProject.tools"
          />
          <ACVTField
            is-larger
            :group="currentProject.team.map((entity) => Object.values(entity))"
            subtitle="Team"
          />
        </ACVTSection>
      </ACVTWrapper>
      <ACVTWrapper
        component="footer"
        justify-content="flex-end"
      >
        <ACVTButton
          :text="project.next"
          :to="{ name: 'project-slug', params: { slug: currentProject.next } }"
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
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'Project',
  components: {
    ACVTBreaker,
    ACVTButton,
    ACVTContainer,
    ACVTField,
    ACVTHero,
    ACVTJumbotron,
    ACVTPage,
    ACVTScroll,
    ACVTSection,
    ACVTWrapper,
  },
  data() {
    return {
      isFading: false,
      isRequiring: true,
      pageDelay: 1500,
    }
  },
  computed: {
    ...mapGetters('page', ['currentProject']),
    ...mapGetters('site', ['fromRoute']),
    ...mapGetters('text', ['index', 'project']),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const requestedProject = vm.$store
        .getters['page/projects']
        .find((project) => project.slug === to.params.slug)

      if (requestedProject) {
        vm.$store.commit('site/updateIndex', requestedProject.index, { root: true })
        next()
      } else {
        next({ name: 'index' })
      }
    })
  },
  beforeMount() {
    this.toggleLight(false)
    this.isRequiring = this.fromRoute !== 'index'
  },
  mounted() {
    setTimeout(() => {
      if (this.fromRoute !== 'index') {
        this.toggleActivity()
      } else {
        this.isRequiring = true
      }
    }, 500)
  },
  beforeRouteLeave(to, _, next) {
    if (to.name === 'about') {
      this.pageChange()
      this.toggleActivity()

      setTimeout(() => {
        this.isFading = true
        this.pageChange(next)
      }, this.pageDelay)
    } else if (to.name === 'index') {
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
    ...mapActions('site', ['pageChange', 'toggleActivity', 'toggleLight']),
  },
}
</script>

<style lang="scss" module>
</style>
