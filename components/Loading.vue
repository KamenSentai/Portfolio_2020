<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isMounted,
        [$style.isLighten]: $isAbout,
      }
    ]"
  >
    <div
      :class="$style.wrapper"
      :style="{ transitionDuration: `${duration}ms` }"
    >
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
    setTimeout(() => {
      this.isMounted = true

      setTimeout(() => {
        this.load(Object.values(resources))
      }, this.duration)
    }, 500)
  },
  methods: mapActions('loading', ['complete', 'load']),
}
</script>

<style lang="scss" module>
.container {
  z-index: 1;
  background-color: color(dark);
  @include centralizer;
  @include overlay((position: fixed, value: 0));

  &.isInactive .wrapper {
    transform: scaleX(0);
  }

  &.isLighten {
    background-color: color(light);

    .wrapper {
      background-color: color(dark, .25);
    }
  }
}

.wrapper {
  position: absolute;
  right: 0;
  left: 0;
  height: .2rem;
  background-color: color(light, .25);
  transition-timing-function: $easing;
  transition-property: transform;
}

.fillbar {
  background-color: color(primary);
  transform: scaleX(0);
  @include overlay;
}
</style>
