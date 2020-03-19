<template>
  <div>
    <ACVTJumbotron :is-lighten="isLighten">
      <template v-if="isLighten">
        <ACVTWrapper template-rows="auto 1fr">
          <ACVTHero
            :is-inactive="!isMounted"
            is-lighten
            :tag="about.tag"
            :title="about.title"
          />
          <ACVTBreaker
            auto-flow="row"
            :template-rows="!$isMobile ? 'auto 1fr' : 'auto auto 1fr'"
            :template-columns="!$isMobile ? '1fr 1fr': '1fr'"
            justify-items="flex-start"
          >
            <ACVTButton
              :is-active="isMounted"
              is-lighten
              :to="{ name: 'about' }"
              :text="about.button"
            />
            <ACVTBreaker
              align-content="center"
              justify-content="flex-start"
            >
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
              :is-lighten="isLighten"
              :text="about.description"
            />
          </ACVTBreaker>
        </ACVTWrapper>
      </template>
    </ACVTJumbotron>
    <ACVTContainer :class="$style.container">
      <ACVTWrapper v-if="$isMobile">
        <ACVTDocument
          :is-inactive="!isMounted"
          :is-lighten="isLighten"
          :text="about.description"
        />
      </ACVTWrapper>
      <ACVTWrapper
        v-for="(section, i) in about.main"
        :key="`section-${i}`"
        :auto-flow="$isMobile ? 'row' : 'column'"
        :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
      >
        <ACVTTitle
          component="h2"
          :text="section.title"
        />
        <div>
          ok
        </div>
      </ACVTWrapper>
    </ACVTContainer>
    <ACVTCredit :is-inactive="!isMounted" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTContainer from '~/components/Container.vue'
import ACVTCredit from '~/components/Credit.vue'
import ACVTDocument from '~/components/Document.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTPush from '~/components/Push.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTTitle from '~/components/Title.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'About',
  components: {
    ACVTBreaker,
    ACVTButton,
    ACVTContainer,
    ACVTCredit,
    ACVTDocument,
    ACVTHero,
    ACVTJumbotron,
    ACVTPush,
    ACVTScroll,
    ACVTTitle,
    ACVTWrapper,
  },
  data() {
    return {
      pageDelay: 1500,
      isLighten: true,
      isMounted: false,
    }
  },
  computed: mapGetters('site', ['about']),
  beforeRouteLeave(to, _, next) {
    this.pageChange()
    this.isMounted = false

    setTimeout(() => {
      this.isLighten = false

      setTimeout(() => {
        this.pageChange()
        next()
      }, this.$fadeDuration)
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
  color: color(dark);
  background-color: color(light);
}
</style>
