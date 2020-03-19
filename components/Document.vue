<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
        [$style.isLighten]: isLighten,
      }
    ]"
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
  </div>
</template>

<script>
export default {
  name: 'Document',
  props: {
    isInactive: {
      type: Boolean,
      default: false,
    },
    isLighten: {
      type: Boolean,
      default: false,
    },
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
  position: relative;
  display: grid;
  grid-gap: space(sm);
  align-content: flex-start;
  font-weight: 300;
  line-height: 1.25;

  &::before,
  &::after {
    background-color: color(dark);
    transform: scaleX(0);
    transition: transform $smooth time(short);
    content: "";
    @include overlay;
  }

  &::before {
    transform-origin: left;
    opacity: 0;
  }

  &::after {
    transform-origin: right;
    opacity: 1;
  }

  &.isInactive {

    &::before {
      transform: scaleX(1);
      opacity: 1;
    }

    &::after {
      transform: scaleX(1);
      opacity: 0;
    }
  }

  &.isLighten {

    &::before,
    &::after {
      background-color: color(light);
    }
  }
}

.link {
  color: color(primary);
  font-weight: normal;
}
</style>
