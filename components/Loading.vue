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
    <div :class="$style.section">
      <ACVTVanish
        :class="$style.tag"
        :is-loading="isMounted"
      >
        {{ loading.tag }}t
      </ACVTVanish>
      <ACVTVanish :is-loading="isMounted">
        {{ loading.title }}
      </ACVTVanish>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import resources from '~/assets/scripts/resources'
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Loading',
  components: {
    ACVTVanish,
  },
  data() {
    return {
      delay: 1000,
      duration: 1000,
      isMounted: false,
    }
  },
  computed: {
    ...mapGetters('loading', ['isLoaded', 'progression']),
    ...mapGetters('text', ['loading']),
  },
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
  color: color(light);
  background-color: color(dark);
  @include centralizer;
  @include overlay((position: fixed, value: 0));

  &.isInactive .wrapper {
    transform: scaleX(0);
    transform-origin: right;
  }

  &.isLighten {
    color: color(dark);
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
  transform-origin: left;
  transition-timing-function: $easing;
  transition-property: transform;
}

.fillbar {
  background-color: color(primary);
  transform: scaleX(0);
  transform-origin: left;
  @include overlay;
}

.section {
  position: absolute;
  top: 0;
  bottom: 50%;
  display: grid;
  grid-gap: space(xs);
  align-content: flex-end;
  justify-content: center;
  padding: space(md);
}

.tag {
  color: color(primary);
  font-size: size(regular);
  text-transform: uppercase;
}
</style>
