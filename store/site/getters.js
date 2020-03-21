export default {
  currentIndex(state) {
    return state.currentIndex
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
  projects(state) {
    return state.projects
  },
  temporaryIndex(state) {
    return state.temporaryIndex
  },
}
