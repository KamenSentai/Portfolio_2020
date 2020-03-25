<template>
  <ACVTSection :class="$style.container">
    <ACVTReveal
      v-for="(group, i) in gallery"
      :key="`group-${i}`"
      :component="ACVTBreaker"
      :class="[
        $style.group,
        {
          [$style.isRevealed]: $isMobile || revealed.includes(i),
        }
      ]"
      :threshold="0.25"
      :auto-flow="$isMobile ? 'row' : 'column'"
      :template-columns="$isMobile ? '1fr' : '1fr '.repeat(group.length).trim()"
      @reveal="reveal(i)"
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
    </ACVTReveal>
  </ACVTSection>
</template>

<script>
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTReveal from '~/components/Reveal.vue'
import ACVTSection from '~/components/Section.vue'
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Gallery',
  components: {
    ACVTReveal,
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
      ACVTBreaker,
      imageRatio: 1,
      revealed: [],
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
    reveal(index) {
      this.revealed.push(index)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-column: 1 / -1;
}

.group {
  transform: scale(.9375);
  transform-origin: center bottom;
  transition: transform $smooth-slower;

  &.isRevealed {
    transform: scale(1);
  }
}

.image {
  width: 100%;
  height: 100%;
  @include overlay;
}
</style>
