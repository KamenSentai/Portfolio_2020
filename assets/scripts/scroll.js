export const easings = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (--t) * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - (--t) * t * t * t,
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t),
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + (--t) * t * t * t * t,
  easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t),
}

export const scrollTo = (to, duration, easing, callback) => {
  const start = Date.now()
  const element = ![null, undefined].includes(document.documentElement.scrollTop)
    ? document.documentElement
    : document.body
  const from = element.scrollTop

  if (from === to) {
    if (callback) callback()
    return
  }

  const scroll = () => {
    const currentTime = Date.now()
    const time = Math.min(1, ((currentTime - start) / duration))
    const easedTime = easing(time)

    element.scrollTop = (easedTime * (to - from)) + from

    if (time < 1) requestAnimationFrame(scroll)
    else if (callback) callback()
  }

  requestAnimationFrame(scroll)
}
