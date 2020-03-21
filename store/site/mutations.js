export default {
  loadIndex(state, index) {
    state.temporaryIndex = index
  },
  pageChange(state) {
    state.isPageChanging = !state.isPageChanging
  },
  toggleActivity(state) {
    state.isInactive = !state.isInactive
  },
  updateIndex(state, index) {
    state.currentIndex = index
  },
}
