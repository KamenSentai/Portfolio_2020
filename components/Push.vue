<template>
  <a
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
      }
    ]"
    :href="link"
    :title="name"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ transitionDelay: `${index * delay}ms` }"
  >
    <ACVTIcon
      :class="$style.icon"
      :name="name"
      color="primary"
      width="40px"
    />
    <span :class="$style.title">{{ name }}</span>
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTIcon from '~/components/Icon.vue'

export default {
  name: 'Push',
  components: {
    ACVTIcon,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      delay: 125,
    }
  },
  computed: mapGetters('site', ['isInactive']),
}
</script>

<style lang="scss" module>
.container {
  position: relative;
  font-size: 0;
  transition: transform $smooth;
  @include centralizer;

  &::before {
    position: absolute;
    top: - space(xs) / 2;
    right: - space(xs) / 2;
    bottom: - space(xs) / 2;
    left: - space(xs) / 2;
    border: .2rem solid color(primary);
    border-radius: 100%;
    transform: scale(.75);
    opacity: 0;
    transition: transform $smooth time(shorter), opacity $smooth;
    content: "";
  }

  &:hover {

    &::before {
      transform: scale(1);
      opacity: 1;
      transition: transform $smooth, opacity $smooth;
    }

    .title {
      transform: translateY(0);
      opacity: 1;
      transition-duration: time(normal);
    }
  }

  &.isInactive {
    transform: scale(0);
  }
}

.title {
  position: absolute;
  top: calc(100% + #{space(xs)});
  color: color(primary);
  font-size: size(regular);
  text-transform: uppercase;
  transform: translateY(-12.5%);
  opacity: 0;
  transition: transform $smooth, opacity $smooth;
  pointer-events: none;
}
</style>
