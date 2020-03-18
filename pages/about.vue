<template>
  <div>
    <ACVTJumbotron :is-lighten="isLighten">
      <template v-if="isLighten">
        <ACVTWrapper>
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
          >
            <ACVTBreaker justify-content="flex-start">
              <ACVTButton
                :is-active="isMounted"
                is-lighten
                :to="{ name: 'about' }"
                :text="about.button"
              />
            </ACVTBreaker>
            <ACVTBreaker
              align-content="center"
              justify-content="flex-start"
            >
              <ACVTPush
                v-for="(socialNetwork, i) in socialNetworks"
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
            <ACVTText
              v-if="!$isMobile"
              :is-inactive="!isMounted"
              :is-lighten="isLighten"
              :text="about.text"
            />
          </ACVTBreaker>
        </ACVTWrapper>
      </template>
    </ACVTJumbotron>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTButton from '~/components/Button.vue'
import ACVTHero from '~/components/Hero.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTPush from '~/components/Push.vue'
import ACVTScroll from '~/components/Scroll.vue'
import ACVTText from '~/components/Text.vue'
import ACVTWrapper from '~/components/Wrapper.vue'

export default {
  name: 'About',
  components: {
    ACVTBreaker,
    ACVTButton,
    ACVTHero,
    ACVTJumbotron,
    ACVTPush,
    ACVTScroll,
    ACVTText,
    ACVTWrapper,
  },
  data() {
    return {
      pageDelay: 1500,
      isLighten: true,
      isMounted: false,
      // Raw text
      socialNetworks: [
        {
          name: 'GitHub',
          link: 'https://github.com/KamenSentai',
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/alain-cao-van-truong/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/AlainCVT',
        },
        {
          name: 'Email',
          link: 'mailto:cvt.alain@gmail.com',
        },
      ],
    }
  },
  computed: mapGetters('text', ['about']),
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
</style>
