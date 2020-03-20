<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isInactive]: isInactive,
      }
    ]"
  >
    <div :class="$style.head">
      <h3 :class="$style.subtitle">
        {{ subtitle }}
      </h3>
      <span
        v-if="tag"
        :class="$style.tag"
      >
        {{ tag }}
      </span>
    </div>
    <div :class="$style.body">
      <div
        v-if="extra.name && extra.element && extra.items"
        :class="$style.extra"
      >
        <h4 :class="$style.name">
          {{ extra.name }}
        </h4>
        <div :class="$style.content">
          <h5 :class="$style.element">
            {{ extra.element }}
          </h5>
          <ul :class="$style.box">
            <li
              v-for="(item, i) in extra.items"
              :key="`item-${i}`"
              :class="$style.item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <template v-if="list">
        <div
          v-for="(element, i) in list"
          :key="`element-${i}`"
          :class="$style.element"
        >
          {{ element }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    extra: {
      type: Object,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [],
    },
    isInactive: {
      type: Boolean,
      default: false,
    },
    subtitle: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: grid;
  grid-gap: space(sm);

  &.isInactive {

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
    content: "";
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

.element {
  font-size: size(sm);
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

.element {
  font-size: size(sm);
}
</style>
