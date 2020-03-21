export default {
  loadIndex(state, index) {
    state.temporaryIndex = index
  },
  pageChange(state) {
    state.isPageChanging = !state.isPageChanging
  },
  toggleActivity(state, value) {
    state.isInactive = value === null ? !state.isInactive : value
  },
  toggleLight(state, value) {
    state.isLighten = value === null ? !state.isLighten : value
  },
  updateIndex(state, index) {
    state.currentIndex = index
  },
}
