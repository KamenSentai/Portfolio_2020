<template>
  <div
    ref="container"
    :class="$style.container"
    :style="{ paddingTop: padding, paddingBottom: padding }"
  >
    <img
      :class="$style.image"
      :src="src"
      :style="transform"
      @load="load"
    >
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      frameRatio: 0.75,
      imageRatio: 1,
      scrollY: 0,
      windowHeight: 0,
    }
  },
  computed: {
    padding() {
      return `${(100 / (this.imageRatio * 2)) * this.ratio}%`
    },
    ratio() {
      return this.$isMobile ? 1 : this.frameRatio
    },
    transform() {
      if (!this.$isMobile) {
        const {
          frameRatio,
          scrollY,
          windowHeight,
        } = this
        const {
          clientHeight,
          offsetTop,
        } = this.$refs.container || { clientHeight: 0, offsetTop: 0 }
        const from = offsetTop - windowHeight
        const to = offsetTop + clientHeight
        const delta = ((scrollY - from) / (to - from) - 0.5) * (1 - frameRatio) * 100

        return {
          transform: `translateY(${delta}%)`,
        }
      }

      return {}
    },
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    window.addEventListener('scroll', this.scroll)
    this.resize()
    this.scroll()
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    load(event) {
      const { srcElement: { naturalWidth, naturalHeight } } = event
      this.imageRatio = naturalWidth / naturalHeight
    },
    resize() {
      this.windowHeight = window.innerHeight
    },
    scroll() {
      this.scrollY = window.scrollY
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  overflow: hidden;
  font-size: 0;
  background-color: color(primary);
  @include centralizer;
}

.image {
  position: absolute;
  width: 100%;
  transform-origin: center;
  will-change: transform;
}
</style>
