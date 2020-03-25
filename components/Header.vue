<template>
  <ACVTContainer
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isCompleted || !isMounted,
        [$style.isLighten]: $isAbout,
        [$style.isUnavailable]: isPageChanging,
      }
    ]"
  >
    <header :class="$style.header">
      <component
        :is="link.isActive ? 'nuxt-link' : link.tag"
        v-for="(link, index) in links"
        :key="`link-${index}`"
        :class="$style.link"
        :title="link.isActive && link.title"
        :to="link.isActive && { name: link.name, params: link.params }"
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
    ...mapGetters('loading', ['isCompleted']),
    ...mapGetters('site', ['fromRoute', 'isPageChanging']),
    ...mapGetters('text', ['header']),
    isActive() {
      return (routes) => !!routes && routes.includes(this.$route.name)
    },
    links() {
      return [
        {
          isMain: true,
          name: 'index',
          title: this.header.main,
          routes: [
            'about',
            'project-slug',
          ],
        },
        {
          name: 'about',
          title: this.header.about,
          routes: [
            'index',
            'project-slug',
          ],
        },
        {
          name: this.returningRoute || 'index',
          params: this.fromRoute.params,
          title: this.header.return,
          routes: [
            'about',
          ],
        },
      ]
        .map((link) => ({
          ...link,
          isActive: this.isActive(link.routes),
          tag: link.isMain ? 'h1' : 'span',
        }))
        .filter((link) => link.isMain || link.isActive)
    },
    returningRoute() {
      return this.fromRoute.name === this.$route.name ? 'index' : this.fromRoute.name
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
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding: space(md) 0;
  background: linear-gradient(to top, gradient(dark, .5));

  &.isInactive {
    pointer-events: none;

    .link::after {
      transform: scaleY(1);
    }
  }

  &.isLighten {
    color: color(dark);
    background: linear-gradient(to top, gradient(light, .5));

    .link::after {
      background-color: color(light);
    }
  }

  &.isUnavailable {
    pointer-events: none;
  }
}

.header {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  grid-column: 1 / -1;
  justify-content: space-between;
  transition: color $smooth;
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

  &::after {
    background-color: color(dark);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform $smooth-slower time(longest);
    content: "";
    pointer-events: none;
    @include overlay((position: absolute, value: -1px));
  }
}
</style>
