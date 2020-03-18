export default {
  loadIndex(state, index) {
    state.temporaryIndex = index
  },
  pageChange(state) {
    state.isPageChanging = !state.isPageChanging
  },
  updateIndex(state, index) {
    state.currentIndex = index
  },
}
