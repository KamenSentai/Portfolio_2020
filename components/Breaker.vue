<template>
  <div
    :class="[
      $style.container,
      {
        [$style.inline]: inline,
      }
    ]"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
const SHORTCUTS = [
  { id: 'grid', attr: 'grid' },
  { id: 'autoRows', attr: 'gridAutoRows' },
  { id: 'autoColumns', attr: 'gridAutoColumns' },
  { id: 'autoFlow', attr: 'gridAutoFlow' },
  { id: 'gap', attr: 'gridGap' },
  { id: 'rowGap', attr: 'gridRowGap' },
  { id: 'columnGap', attr: 'gridColumnGap' },
  { id: 'template', attr: 'gridTemplate' },
  { id: 'templateAreas', attr: 'gridTemplateAreas' },
  { id: 'templateRows', attr: 'gridTemplateRows' },
  { id: 'templateColumns', attr: 'gridTemplateColumns' },
  { id: 'placeContent', attr: 'placeContent' },
  { id: 'placeItems', attr: 'placeItems' },
  { id: 'alignContent', attr: 'alignContent' },
  { id: 'alignItems', attr: 'alignItems' },
  { id: 'justifyContent', attr: 'justifyContent' },
  { id: 'justifyItems', attr: 'justifyItems' },
]

const style = (props) => SHORTCUTS.reduce((accu, { id, attr }) => {
  if (props[id]) accu[attr] = props[id]
  return accu
}, props.style || {})

const props = {
  inline: Boolean,
}

SHORTCUTS.map((shortcut) => shortcut.id).forEach((id) => {
  props[id] = String
})

export default {
  name: 'Breaker',
  props,
  computed: {
    style() {
      return style(this.$props)
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(md) space(sm);
}

.inline {
  display: inline-grid;
}
</style>
