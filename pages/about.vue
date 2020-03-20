<template>
  <ACVTPage
    :is-fading="isFading"
    is-lighten
  >
    <ACVTJumbotron>
      <ACVTWrapper template-rows="auto 1fr">
        <ACVTHero
          :is-inactive="!isMounted"
          is-lighten
          :tag="about.tag"
          :title="about.title"
        />
        <ACVTArea>
          <ACVTButton
            :is-active="isMounted"
            is-lighten
            :to="{ name: 'about' }"
            :text="about.button"
          />
          <ACVTBreaker>
            <ACVTPush
              v-for="(socialNetwork, i) in about.social"
              :key="socialNetwork.name"
              :index="i"
              :is-inactive="!isMounted"
              :link="socialNetwork.link"
              :name="socialNetwork.name"
            />
          </ACVTBreaker>
          <ACVTScroll
            :is-inactive="!isMounted"
            is-lighten
          />
          <ACVTDocument
            v-if="!$isMobile"
            :is-inactive="!isMounted"
            is-lighten
            :text="about.description"
          />
        </ACVTArea>
      </ACVTWrapper>
    </ACVTJumbotron>
    <ACVTContainer :class="$style.container">
      <ACVTWrapper v-if="$isMobile">
        <ACVTDocument
          :is-inactive="!isMounted"
          is-lighten
          :text="about.description"
        />
      </ACVTWrapper>
      <ACVTReveal
        v-for="(section, i) in about.main"
        :key="`section-${i}`"
        :component="ACVTWrapper"
        is-window
        :auto-flow="$isMobile ? 'row' : 'column'"
        :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
      >
        <template v-slot:default="reveal">
          <ACVTTitle
            component="h2"
            :is-inactive="!isMounted || !reveal.isRevealed"
            is-lighten
            :text="section.title"
          />
          <ACVTSection>
            <ACVTField
              v-for="(field, j) in section.fields"
              :key="`field-${i}-${j}`"
              :extra="field.extra"
              :is-inactive="!isMounted || !reveal.isRevealed"
              :list="field.list"
              :subtitle="field.subtitle"
              :tag="field.tag"
            />
          </ACVTSection>
        </template>
      </ACVTReveal>
    </ACVTContainer>
    <ACVTCredit
      :is-inactive="!isMounted"
      is-lighten
    />
  </ACVTPage>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTArea from '~/components/Area.vue'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTContainer from '~/components/Container.vue'
import ACVTCredit from '~/components/Credit.vue'
import ACVTDocument from '~/components/Document.vue'
import ACVTField from '~/components/Field.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTPush from '~/components/Push.vue'
import ACVTReveal from '~/components/Reveal.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTTitle from '~/components/Title.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'About',
  components: {
    ACVTArea,
    ACVTBreaker,
    ACVTButton,
    ACVTContainer,
    ACVTCredit,
    ACVTDocument,
    ACVTField,
    ACVTHero,
    ACVTJumbotron,
    ACVTPage,
    ACVTPush,
    ACVTReveal,
    ACVTSection,
    ACVTScroll,
    ACVTTitle,
    ACVTWrapper,
  },
  data() {
    return {
      ACVTWrapper,
      pageDelay: 1500,
      isFading: false,
      isMounted: false,
    }
  },
  computed: mapGetters('page', ['about']),
  beforeRouteLeave(to, _, next) {
    this.pageChange()
    this.isMounted = false

    setTimeout(() => {
      this.isFading = true
      this.pageChange(next)
    }, this.pageDelay)
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, 500)
  },
  methods: mapActions('site', ['pageChange']),
}
</script>

<style lang="scss" module>
.container {
  grid-row-gap: space(xl);
  padding: space(xl) 0;
}
</style>
