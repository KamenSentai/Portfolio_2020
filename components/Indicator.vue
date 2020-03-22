<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive || !isRequired,
      }
    ]"
  >
    <ACVTIcon
      v-if="!$isTablet"
      :class="$style.icon"
      name="Mouse"
      width="20px"
    />
    <template v-else>
      <div :class="$style.navigator">
        <div
          :class="[
            $style.arrow,
            {
              [$style.isUnavailable]: currentIndex === 0,
            }
          ]"
          @click="$emit('up')"
        >
          <ACVTIcon
            name="ArrowUp"
            width="32px"
          />
        </div>
        <div
          :class="[
            $style.arrow,
            {
              [$style.isUnavailable]: currentIndex === totalProjects - 1,
            }
          ]"
          @click="$emit('down')"
        >
          <ACVTIcon
            name="ArrowDown"
            width="32px"
          />
        </div>
      </div>
      <template />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTIcon from '~/components/Icon.vue'

export default {
  name: 'Indicator',
  components: {
    ACVTIcon,
  },
  props: {
    isRequired: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters('page', ['totalProjects']),
    ...mapGetters('site', ['currentIndex', 'isInactive']),
  },
}
</script>

<style lang="scss" module>
.container {
  grid-column: 1 / -1;
  font-size: 0;
  @include centralizer;

  &.isInactive {

    .icon,
    .navigator {
      transform: scale(0);
      transition-delay: 0s;
    }
  }
}

.icon,
.navigator {
  transition: transform $smooth time(longest);
}

.navigator {
  display: grid;
  grid-gap: space(md);
}

.arrow {
  cursor: pointer;
  transition: opacity $smooth;;

  &.isUnavailable {
    opacity: .25;
    pointer-events: none;
  }
}
</style>
