export default {
  isCompleted(state) {
    return state.isCompleted
  },
  isLoaded(state) {
    return state.progression === 1
  },
  progression(state) {
    return Math.floor(state.progression * 100)
  },
}
