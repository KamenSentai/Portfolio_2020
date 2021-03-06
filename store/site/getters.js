export default {
  currentIndex(state) {
    return state.currentIndex
  },
  fromRoute(state) {
    return state.fromRoute
  },
  isInactive(state, _, __, rootGetters) {
    return state.isInactive || !rootGetters['loading/isCompleted']
  },
  isLighten(state) {
    return state.isLighten
  },
  isPageChanging(state) {
    return state.isPageChanging
  },
  temporaryIndex(state) {
    return state.temporaryIndex
  },
  toRoute(state) {
    return state.toRoute
  },
}
