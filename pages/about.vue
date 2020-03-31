<template>
  <ACVTPage :is-fading="isFading">
    <ACVTJumbotron>
      <ACVTWrapper template-rows="auto 1fr">
        <ACVTHero
          :tag="about.tag"
          :title="about.title"
        />
        <ACVTArea>
          <ACVTButton
            component="a"
            :href="resume"
            rel="noopener noreferrer"
            target="_blank"
            :text="about.button"
          />
          <ACVTBreaker>
            <ACVTLink
              v-for="(socialNetwork, i) in social"
              :key="socialNetwork.name"
              :link="socialNetwork.link"
              :name="socialNetwork.name"
              :style="{ transitionDelay: `${i * linkDelay}ms` }"
            />
          </ACVTBreaker>
          <ACVTScroll />
          <ACVTDocument
            v-if="!$isMobile"
            :text="about.description"
          />
        </ACVTArea>
      </ACVTWrapper>
    </ACVTJumbotron>
    <ACVTContainer is-larger>
      <ACVTWrapper v-if="$isMobile">
        <ACVTDocument :text="about.description" />
      </ACVTWrapper>
      <ACVTWrapper
        v-for="(section, i) in curriculum"
        :key="`section-${i}`"
        is-smaller
        :auto-flow="$isMobile ? 'row' : 'column'"
        :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
      >
        <ACVTTitle
          component="h2"
          :is-revealed="$isMobile || revealed.includes(i)"
          :text="section.title"
        />
        <ACVTSection>
          <ACVTField
            v-for="(field, j) in section.fields"
            :key="`field-${i}-${j}`"
            :items="field.items"
            :name="field.name"
            :section="field.section"
            :subtitle="field.subtitle"
            :tag="field.tag"
            @reveal="reveal(i)"
          />
        </ACVTSection>
      </ACVTWrapper>
    </ACVTContainer>
    <ACVTCredit />
  </ACVTPage>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTArea from '~/modules/Area.vue'
import ACVTCredit from '~/modules/Credit.vue'
import ACVTDocument from '~/modules/Document.vue'
import ACVTJumbotron from '~/modules/Jumbotron.vue'
import ACVTTitle from '~/modules/Title.vue'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTContainer from '~/components/Container.vue'
import ACVTField from '~/components/Field.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTLink from '~/components/Link.vue'
import ACVTPage from '~/components/Page.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTScroll from '~/components/Scroll.vue'
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
    ACVTLink,
    ACVTPage,
    ACVTSection,
    ACVTScroll,
    ACVTTitle,
    ACVTWrapper,
  },
  data() {
    return {
      pageDelay: 1500,
      linkDelay: 125,
      isFading: false,
      revealed: [],
    }
  },
  computed: {
    ...mapGetters('page', ['curriculum', 'resume', 'social']),
    ...mapGetters('text', ['about']),
    ...mapGetters('site', ['isInactive']),
  },
  beforeMount() {
    this.toggleLight(true)
  },
  mounted() {
    setTimeout(() => {
      this.toggleActivity()
    }, 500)
  },
  beforeRouteLeave(_, __, next) {
    this.pageChange()
    this.toggleActivity()

    setTimeout(() => {
      this.isFading = true
      this.pageChange(next)
    }, this.pageDelay)
  },
  methods: {
    ...mapActions('site', ['pageChange', 'toggleActivity', 'toggleLight']),
    reveal(index) {
      this.revealed.push(index)
    },
  },
  head() {
    return {
      title: this.about.meta.title,
      meta: [
        {
          name: 'description',
          content: this.about.meta.description,
        },
      ],
    }
  },
}
</script>
