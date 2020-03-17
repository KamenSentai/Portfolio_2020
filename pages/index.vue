<template>
  <ACVTJumbotron
    :class="[
      $style.container,
      {
        [$style.isInactive]: !isMounted,
      }
    ]"
  >
    <ACVTNavbar
      v-if="!$isMobile"
      :is-active="isMounted"
      @click="updateProject($event)"
    />
    <div :class="$style.wrapper">
      <div :class="$style.hero">
        <span :class="$style.tag">Project {{ currentProject.formattedIndex }}</span>
        <h2 :class="$style.title">
          {{ currentProject.name }}
        </h2>
      </div>
      <nav :class="$style.nav">
        <!-- Raw text -->
        <ACVTButton
          :is-active="isMounted"
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
      isMounted: false,
    }
  },
  computed: mapGetters('site', ['currentProject']),
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, 500)
  },
  methods: {
    ...mapActions('site', ['updateIndex']),
    updateProject(index) {
      this.updateIndex(index)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  grid-template-rows: 1fr auto;
  padding-bottom: space(md);

  &.isInactive {

    .icon {
      transform: scale(0);
      transition-delay: 0s;
    }
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
}

.tag {
  color: color(primary);
  font-weight: 300;
  font-size: size(md);
  text-transform: uppercase;

  @include bp(sm) {
    font-size: size(sm);
  }
}

.title {
  font-size: size(xl);

  @include bp(lg) {
    font-size: size(lg);
  }

  @include bp(sm) {
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
