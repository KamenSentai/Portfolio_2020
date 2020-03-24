<template>
  <ACVTSection>
    <ACVTBreaker
      v-for="(group, i) in gallery"
      :key="`group-${i}`"
      :auto-flow="$isMobile ? 'row' : 'column'"
      :template-columns="$isMobile ? '1fr' : '1fr '.repeat(group.length).trim()"
    >
      <ACVTVanish
        v-for="(image, j) in group"
        :key="`image-${i}-${j}`"
        class="font-null"
        :order="j * 2"
        :style="{ paddingTop: padding, paddingBottom: padding }"
      >
        <img
          :class="$style.image"
          :src="image"
          @load="load"
        >
      </ACVTVanish>
    </ACVTBreaker>
  </ACVTSection>
</template>

<script>
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Gallery',
  components: {
    ACVTBreaker,
    ACVTSection,
    ACVTVanish,
  },
  props: {
    gallery: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imageRatio: 1,
    }
  },
  computed: {
    padding() {
      return `${(100 / (this.imageRatio * 2))}%`
    },
  },
  methods: {
    load(event) {
      const { srcElement: { naturalWidth, naturalHeight } } = event
      this.imageRatio = naturalWidth / naturalHeight
    },
  },
}
</script>

<style lang="scss" module>
.image {
  width: 100%;
  height: 100%;
  @include overlay;
}
</style>
