<template>
  <component
    :is="component"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot :isRevealed="$isMobile || isRevealed" />
  </component>
</template>

<script>
export default {
  name: 'Reveal',
  props: {
    component: {
      type: [Object, String],
      default: 'div',
    },
    isWindow: {
      type: Boolean,
      default: false,
    },
    threshold: {
      type: Number,
      default: 0.25,
    },
  },
  data() {
    return {
      isRevealed: false,
    }
  },
  watch: {
    $route() {
      if (!this.$isMobile) {
        this.$nextTick(() => {
          this.observe()
        })
      }
    },
  },
  mounted() {
    if (!this.$isMobile) {
      this.$nextTick(() => {
        this.observe()
      })
    }
  },
  methods: {
    observe() {
      Object.assign(this.$data, this.$options.data())

      const { $el, isWindow } = this
      const threshold = isWindow
        ? (window.innerHeight * this.threshold) / $el.clientHeight
        : this.threshold

      new IntersectionObserver((entries, self) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > self.thresholds[0]) {
            this.isRevealed = true
            this.$emit('reveal')
            self.unobserve(entry.target)
          }
        })
      }, {
        root: null,
        rootMargin: '0px',
        threshold,
      }).observe($el)
    },
  },
}
</script>
