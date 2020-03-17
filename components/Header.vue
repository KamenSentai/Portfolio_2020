<template>
  <ACVTContainer :class="$style.container">
    <header
      :class="[
        $style.header,
        {
          [$style.isMounted]: isMounted,
        }
      ]"
    >
      <component
        :is="link.isCurrentRoute ? link.tag : 'nuxt-link'"
        v-for="(link, index) in links"
        :key="`link-${index}`"
        :to="!link.isCurrentRoute && { name: link.name }"
        :title="!link.isCurrentRoute && link.title"
      >
        {{ link.title }}
      </component>
    </header>
  </ACVTContainer>
</template>

<script>
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
    isCurrentRoute() {
      return (name) => name === this.$route.name
    },
    links() {
      // Raw text
      return [
        {
          name: 'index',
          title: 'Alain CAO VAN TRUONG',
          isMain: true,
        },
        {
          name: 'about',
          title: 'About',
        },
        {
          name: 'index',
          title: 'Back to projects',
        },
      ]
        .map((link) => {
          const isCurrentRoute = this.isCurrentRoute(link.name)
          return { ...link, isCurrentRoute, tag: link.isMain ? 'h1' : 'span' }
        })
        .filter((link) => link.isMain || !link.isCurrentRoute)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.isMounted = true
    })
  },
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  top: space(md);
  right: 0;
  left: 0;
}

.header {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  grid-column: 1 / -1;
  justify-content: space-between;

  &::after {
    background-color: color(dark);
    transform: scaleY(1);
    transform-origin: top;
    transition: transform $smooth-slower time(longer);
    content: "";
    pointer-events: none;
    @include overlay;
  }

  &.isMounted::after {
    transform: scaleY(0);
  }
}
</style>
