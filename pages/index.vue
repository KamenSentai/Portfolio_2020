<template>
  <ACVTJumbotron
    :class="[
      $style.container,
      {
        [$style.isChanging]: isChanging,
        [$style.isInactive]: !isMounted,
      }
    ]"
  >
    <ACVTNavbar
      v-if="!$isMobile"
      :is-active="isMounted"
      :is-clickable="!isAnimating"
      @click="updateProject($event)"
    />
    <div :class="$style.wrapper">
      <div :class="$style.hero">
        <!-- Raw text -->
        <span :class="$style.tag">Project {{ currentProject.formattedIndex }}</span>
        <h2 :class="$style.title">
          {{ currentProject.name }}
        </h2>
      </div>
      <nav :class="$style.nav">
        <!-- Raw text -->
        <ACVTButton
          :is-active="isMounted"
          :is-clickable="!isAnimating"
          :to="{ name: 'about' }"
          text="Discover"
        />
      </nav>
    </div>
    <div :class="$style.scroll">
      <ACVTIcon
        :class="$style.icon"
        name="Mouse"
        width="20px"
      />
    </div>
  </ACVTJumbotron>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ACVTButton from '~/components/Button.vue'
import ACVTIcon from '~/components/Icon.vue'
import ACVTJumbotron from '~/components/Jumbotron.vue'
import ACVTNavbar from '~/components/Navbar.vue'

export default {
  name: 'Index',
  components: {
    ACVTButton,
    ACVTIcon,
    ACVTJumbotron,
    ACVTNavbar,
  },
  data() {
    return {
      duration: 750,
      isAnimating: false,
      isChanging: false,
      isMounted: false,
      touchPosition: 0,
    }
  },
  computed: mapGetters('site', ['currentIndex', 'currentProject', 'totalProjects']),
  mounted() {
    setTimeout(() => {
      this.isMounted = true
      window.addEventListener('touchstart', this.touchstart)
      window.addEventListener('touchmove', this.touchmove)
      window.addEventListener('wheel', this.wheel)
    }, 500)
  },
  destroyed() {
    window.removeEventListener('touchstart', this.touchstart)
    window.removeEventListener('touchmove', this.touchmove)
    window.removeEventListener('wheel', this.wheel)
  },
  methods: {
    ...mapActions('site', ['loadIndex', 'updateIndex']),
    updateProject(index) {
      if (index >= 0 && index < this.totalProjects) {
        const { duration } = this
        this.isAnimating = true
        this.isChanging = true

        this.updateIndex({
          duration,
          index,
          callback: () => {
            this.isChanging = false

            setTimeout(() => {
              this.isAnimating = false
            }, this.duration)
          },
        })
      }
    },
    touchmove({ touches }) {
      const [{ clientY: y }] = touches
      const movementY = y - this.touchPosition
      this.touchPosition = y
      this.wheel({ deltaY: -movementY })
    },
    touchstart({ touches }) {
      const [{ clientY: y }] = touches
      this.touchPosition = y
    },
    wheel({ deltaY }) {
      if (!this.isAnimating) {
        if (deltaY > 0) {
          this.updateProject(this.currentIndex + 1)
        } else if (deltaY < 0) {
          this.updateProject(this.currentIndex - 1)
        }
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-template-rows: 1fr auto;
  padding-bottom: space(md);

  &:not(isInactive):not(.isChanging) {

    .tag,
    .title {

      &::before {
        transform: scaleX(0);
        opacity: 0;
      }

      &::after {
        transform: scaleX(0);
        opacity: 1;
      }
    }
  }

  &.isChanging:not(.isInactive) {

    .tag,
    .title {

      &::before {
        transform: scaleX(1);
        opacity: 1;
      }

      &::after {
        transform: scaleX(1);
        opacity: 0;
      }
    }
  }

  &.isInactive:not(.isChanging) {

    .tag,
    .title {

      &::before {
        transform: scaleX(1);
        opacity: 1;
      }

      &::after {
        transform: scaleX(1);
        opacity: 0;
      }
    }
  }

  &.isInactive .icon {
    transform: scale(0);
    transition-delay: 0s;
  }
}

.wrapper {
  display: grid;
  grid-gap: space(lg);
  grid-column: 3 / -3;
  align-content: flex-start;

  @include bp(lg) {
    grid-column: 2 / -2;
  }

  @include bp(sm) {
    grid-column: 1 / -1;
  }
}

.hero {
  display: grid;
  grid-gap: space(xs);
  justify-items: flex-start;
}

.tag,
.title {
  position: relative;

  &::before,
  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transition: transform $smooth;
    content: "";
    @include overlay;
  }

  &::before {
    transform-origin: left;
    opacity: 0;
  }

  &::after {
    transform-origin: right;
  }
}

.tag {
  color: color(primary);
  font-weight: 300;
  font-size: size(md);
  text-transform: uppercase;

  @include bp(md) {
    font-size: size(sm);
  }

  @include bp(sm) {
    font-size: size(xs);
  }

  &::before,
  &::after {
    transition-delay: time(shorter);
  }
}

.title {
  font-size: size(xl);

  @include bp(lg) {
    font-size: size(lg);
  }

  @include bp(md) {
    min-height: 2em;
    font-size: size(md);
  }
}

.nav {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(md);
  justify-content: flex-start;
}

.scroll {
  grid-column: 1 / -1;
  @include centralizer;
}

.icon {
  transition: transform $smooth time(longest);
}
</style>
