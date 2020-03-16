<template>
  <ACVTContainer :class="$style.container">
    <header :class="$style.header">
      <component
        :is="link.isCurrentRoute ? 'span' : 'nuxt-link'"
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
  computed: {
    isCurrentRoute() {
      return (name) => name === this.$route.name
    },
    links() {
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
        .map((link) => ({ ...link, isCurrentRoute: this.isCurrentRoute(link.name) }))
        .filter((link) => link.isMain || !link.isCurrentRoute)
    },
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
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  grid-column: 1 / -1;
  justify-content: space-between;
}
</style>
