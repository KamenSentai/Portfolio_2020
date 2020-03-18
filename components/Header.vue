<template>
  <ACVTContainer :class="$style.container">
    <header
      :class="[
        $style.header,
        {
          [$style.isInactive]: !isMounted,
          [$style.isLighten]: $isAbout,
          [$style.isUnavailable]: isPageChanging,
        }
      ]"
    >
      <component
        :is="link.isCurrentRoute ? link.tag : 'nuxt-link'"
        v-for="(link, index) in links"
        :key="`link-${index}`"
        :class="$style.link"
        :title="!link.isCurrentRoute && link.title"
        :to="!link.isCurrentRoute && { name: link.name }"
      >
        {{ link.title }}
      </component>
    </header>
  </ACVTContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTContainer from '~/components/Container.vue'

export default {
  name: 'Header',
  components: {
    ACVTContainer,
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    ...mapGetters('site', ['header', 'isPageChanging']),
    isCurrentRoute() {
      return (name) => name === this.$route.name
    },
    links() {
      return this.header
        .map((link) => {
          const isCurrentRoute = this.isCurrentRoute(link.name)
          return { ...link, isCurrentRoute, tag: link.isMain ? 'h1' : 'span' }
        })
        .filter((link) => link.isMain || !link.isCurrentRoute)
    },
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, 500)
  },
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: space(md);
  right: 0;
  left: 0;
  z-index: 1;
}

.header {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  grid-column: 1 / -1;
  justify-content: space-between;
  transition: color $smooth;

  &::after {
    background-color: color(dark);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform $smooth-slower time(longest);
    content: "";
    pointer-events: none;
    @include overlay;
  }

  &.isInactive {
    pointer-events: none;

    &::after {
      transform: scaleY(1);
    }
  }

  &.isLighten {
    color: color(dark);

    &::after {
      background-color: color(light);
    }
  }

  &.isUnavailable {
    pointer-events: none;
  }
}

.link {
  position: relative;
  @include centralizer;

  &::before {
    position: absolute;
    right: - space(xs);
    left: - space(xs);
    z-index: -1;
    padding: calc(50% + #{space(xs)}) 0;
    border: .2rem solid color(primary);
    border-radius: 100%;
    transform: scale(.5);
    opacity: 0;
    transition: transform $smooth, opacity $smooth;
    content: "";
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
