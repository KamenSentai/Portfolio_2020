export default {
  loadIndex(state, index) {
    state.temporaryIndex = index
  },
  updateIndex(state, index) {
    state.currentIndex = index
  },
}
