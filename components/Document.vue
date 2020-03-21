<template>
  <ACVTVanish
    :class="$style.container"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <p
      v-for="(paragraph, i) in text"
      :key="`paragraph-${i}`"
    >
      <template v-for="(part, j) of extracted(paragraph)">
        <template v-if="typeof part === 'string'">
          {{ part }}
        </template>
        <a
          v-else
          :key="`link-${i}-${j}`"
          :class="$style.link"
          :href="part.link"
          rel="noopener noreferrer"
          target="_blank"
          :title="part.word"
        >
          {{ part.word }}
        </a>
      </template>
    </p>
  </ACVTVanish>
</template>

<script>
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Document',
  components: {
    ACVTVanish,
  },
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
  computed: {
    extracted() {
      return (paragraph) => {
        let mdContents = paragraph
        const regexMdLinks = /(\[])|\[(.*?)\]\(.*?\)/gm
        const matches = paragraph.match(regexMdLinks)
        const story = []

        if (matches) {
          const singleMatch = /\[([^[]+)\]\((.*)\)/

          matches.forEach((match, index) => {
            const [format, word, link] = singleMatch.exec(match)
            const [prev, next] = mdContents.split(format)
            story.push(prev)
            story.push({ word, link })

            if (index < matches.length - 1) {
              mdContents = next
            } else {
              story.push(next)
            }
          })
        } else {
          story.push(paragraph)
        }

        return story
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sm);
  align-content: flex-start;
  font-weight: 300;
  line-height: 1.25;
}

.link {
  color: color(primary);
  font-weight: normal;
}
</style>
