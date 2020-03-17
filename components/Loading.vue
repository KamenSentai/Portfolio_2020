<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isMounted,
      }
    ]"
    :style="{ transitionDuration: `${duration}ms` }"
  >
    <div :class="$style.wrapper">
      <div
        :class="$style.fillbar"
        :style="{ transform: `scaleX(${progression / 100})` }"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import resources from '~/assets/scripts/resources'

export default {
  name: 'Loading',
  data() {
    return {
      delay: 500,
      duration: 1000,
      isMounted: false,
    }
  },
  computed: mapGetters('loading', ['isLoaded', 'progression']),
  watch: {
    isLoaded(value) {
      if (value) {
        setTimeout(() => {
          this.isMounted = false

          setTimeout(() => {
            this.complete()
          }, this.duration)
        }, this.delay)
      }
    },
  },
  mounted() {
    this.isMounted = true

    setTimeout(() => {
      this.load(Object.values(resources))
    }, this.duration)
  },
  methods: mapActions('loading', ['complete', 'load']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  transition-timing-function: $easing;
  transition-property: transform;
  @include centralizer;

  &.isInactive {
    transform: scaleX(0);
  }
}

.wrapper {
  position: absolute;
  right: 0;
  left: 0;
  height: .2rem;
  background-color: color(light, .25);
}

.fillbar {
  background-color: color(primary);
  transform: scaleX(0);
  @include overlay;
}
</style>
