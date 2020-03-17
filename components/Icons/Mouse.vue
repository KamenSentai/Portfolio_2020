<template>
  <svg viewBox="0 0 20 40">
    <rect
      width="19"
      height="39"
      stroke="currentColor"
      x=".5"
      y=".5"
      rx="9.5"
    />
    <rect
      :class="$style.wheel"
      width="2"
      height="10"
      fill="currentColor"
      x="9"
      y="5"
      rx="1"
    />
  </svg>
</template>

<script>
export default {
  name: 'Mouse',
}
</script>

<style lang="scss" module>
@keyframes mouse-wheel {

  0% {
    transform: translateY(0);
  }

  37.5% {
    transform: translateY(12.5%);
  }

  75% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
}

.wheel {
  animation: mouse-wheel 3.75s $easing infinite;
}
</style>
