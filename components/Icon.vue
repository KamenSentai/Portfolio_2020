<template>
  <component
    :is="icon"
    :class="`text-${color}`"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import icons from './Icons'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    icon() {
      return icons[this.name]
    },
  },
}
</script>
