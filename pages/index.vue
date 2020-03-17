<template>
  <ACVTJumbotron :class="$style.container">
    <ACVTNavbar v-if="!$isMobile" />
    <div :class="$style.wrapper">
      <div :class="$style.hero">
        <span :class="$style.tag">Project 01</span>
        <h2 :class="$style.title">
          Assoïe Louvart's portfolio
        </h2>
        <span :class="$style.text">2020</span>
      </div>
      <nav :class="$style.nav">
        <ACVTButton
          :to="{ name: 'about' }"
          text="Discover"
        />
      </nav>
    </div>
    <div :class="$style.scroll">
      <ACVTIcon
        name="Mouse"
        width="20px"
      />
    </div>
  </ACVTJumbotron>
</template>

<script>
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
}
</script>

<style lang="scss" module>
.container {
  grid-template-rows: 1fr auto;
  padding-bottom: space(md);
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

.text {
  font-size: size(xs);

  @include bp(sm) {
    font-size: size(regular);
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
</style>
