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
        <div
          v-if="extra.name && extra.element && extra.items"
          :class="$style.extra"
        >
          <ACVTVanish
            :class="$style.name"
            component="h4"
            :is-revealed="revealEvent.isRevealed"
            :order="1"
            v-bind="$attrs"
            v-on="$listeners"
          >
            {{ extra.name }}
          </ACVTVanish>
          <div :class="$style.content">
            <ACVTVanish
              class="font-sm"
              component="h5"
              :is-revealed="revealEvent.isRevealed"
              :order="2"
              v-bind="$attrs"
              v-on="$listeners"
            >
              {{ extra.element }}
            </ACVTVanish>
            <ul :class="$style.box">
              <ACVTVanish
                v-for="(item, i) in extra.items"
                :key="`item-${i}`"
                :class="$style.item"
                component="li"
                :is-revealed="revealEvent.isRevealed"
                :order="2 + i"
                v-bind="$attrs"
                v-on="$listeners"
              >
                {{ item }}
              </ACVTVanish>
            </ul>
          </div>
        </div>
        <template v-if="list.length">
          <ACVTVanish
            v-for="(element, i) in list"
            :key="`element-${i}`"
            class="font-xs"
            :is-revealed="revealEvent.isRevealed"
            :order="i"
            v-bind="$attrs"
            v-on="$listeners"
          >
            {{ element }}
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
    extra: {
      type: Object,
      default: () => ({}),
    },
    group: {
      type: Array,
      default: () => [],
    },
    isLarger: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default: () => [],
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

  @include bp(xs) {
    font-size: size(regular);
  }
}

.body {
  display: grid;
  grid-gap: space(sm);
}

.extra {
  display: grid;
  grid-gap: space(sm);
}

.name {
  font-size: size(lg);

  @include bp(lg) {
    font-size: size(md);
  }
}

.content {
  display: grid;
  grid-auto-flow: column;
  grid-gap: space(sm);
  align-items: baseline;
}

.box {
  display: grid;
  grid-gap: space(xs);
  justify-items: flex-end;
  list-style: none;
}

.item {
  font-weight: 300;
  text-align: right;
}
</style>
