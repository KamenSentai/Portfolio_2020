<template>
  <ACVTReveal
    :class="[
      $style.container,
      {
        [$style.isLarger]: isLarger,
      }
    ]"
    @reveal="$emit('reveal')"
  >
    <template v-slot:default="revealEvent">
      <div
        :class="[
          $style.head,
          {
            [$style.isInactive]: isInactive || !revealEvent.isRevealed,
          }
        ]"
      >
        <ACVTVanish
          :class="$style.subtitle"
          component="h3"
          :is-revealed="revealEvent.isRevealed"
          v-bind="$attrs"
          v-on="$listeners"
        >
          {{ subtitle }}
        </ACVTVanish>
        <ACVTVanish
          v-if="tag"
          :class="$style.tag"
          component="span"
          :is-revealed="revealEvent.isRevealed"
          v-bind="$attrs"
          v-on="$listeners"
        >
          {{ tag }}
        </ACVTVanish>
      </div>
      <div :class="$style.body">
        <ACVTVanish
          v-if="text.length"
          :component="ACVTDocument"
          :is-revealed="revealEvent.isRevealed"
          :text="text"
        />
        <ACVTVanish
          v-if="name"
          :class="$isMobile ? 'font-md' : 'font-lg'"
          component="h4"
          :is-revealed="revealEvent.isRevealed"
          v-bind="$attrs"
          v-on="$listeners"
        >
          {{ name }}
        </ACVTVanish>
        <div
          v-if="section.subject && section.items"
          :class="$style.wrapper"
        >
          <ACVTVanish
            class="font-sm"
            component="h5"
            :is-revealed="revealEvent.isRevealed"
            :order="1"
            v-bind="$attrs"
            v-on="$listeners"
          >
            {{ section.subject }}
          </ACVTVanish>
          <ul :class="$style.list">
            <ACVTVanish
              v-for="(item, i) in section.items"
              :key="`item-${i}`"
              :class="$style.tag"
              component="li"
              :is-revealed="revealEvent.isRevealed"
              :order="1 + i"
              v-bind="$attrs"
              v-on="$listeners"
            >
              {{ item }}
            </ACVTVanish>
          </ul>
        </div>
        <template v-if="items.length">
          <ACVTVanish
            v-for="(item, i) in items"
            :key="`item-${i}`"
            class="font-xs"
            :is-revealed="revealEvent.isRevealed"
            :order="i"
            v-bind="$attrs"
            v-on="$listeners"
          >
            {{ item }}
          </ACVTVanish>
        </template>
        <template v-if="group.length">
          <ACVTVanish
            v-for="([prev, next], i) in group"
            :key="`element-${i}`"
            :component="ACVTBreaker"
            :is-revealed="revealEvent.isRevealed"
            :order="i"
            template-columns="1fr 1fr"
          >
            <p class="font-xs">
              {{ prev }}
            </p>
            <p class="font-xs">
              {{ next }}
            </p>
          </ACVTVanish>
        </template>
      </div>
    </template>
  </ACVTReveal>
</template>

<script>
import { mapGetters } from 'vuex'
import ACVTBreaker from '~/components/Breaker.vue'
import ACVTDocument from '~/components/Document.vue'
import ACVTReveal from '~/components/Reveal.vue'
import ACVTVanish from '~/components/Vanish.vue'

export default {
  name: 'Field',
  components: {
    ACVTReveal,
    ACVTVanish,
  },
  props: {
    group: {
      type: Array,
      default: () => [],
    },
    isLarger: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: '',
    },
    section: {
      type: Object,
      default: () => ({}),
    },
    subtitle: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: '',
    },
    text: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      ACVTBreaker,
      ACVTDocument,
    }
  },
  computed: mapGetters('site', ['isInactive']),
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sm);

  &.isLarger {
    grid-column: 1 / -1;
  }
}

.head {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  align-items: flex-end;

  &::after {
    grid-row: 2;
    grid-column: 1 / 3;
    height: .2rem;
    background-color: color(primary);
    transform-origin: left;
    transition: transform $smooth-slower;
    content: "";
  }

  &.isInactive::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}

.subtitle {
  color: color(primary);
  font-weight: 300;
  font-size: size(sm);
  text-transform: uppercase;

  @include bp(lg) {
    font-size: size(xs);
  }
}

.tag {
  font-weight: 300;
  font-size: size(xs);
  text-align: right;
}

.body {
  display: grid;
  grid-gap: space(sm);
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  align-items: baseline;
}

.list {
  display: grid;
  grid-gap: space(xs);
  justify-items: flex-end;
  list-style: none;
}
</style>
