<template>
  <div :class="$style.container">
    <p
      v-for="(paragraph, i) in text"
      :key="`paragraph-${i}`"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sx);
  align-content: flex-start;
  font-weight: 300;
  line-height: 1.25;
}
</style>
