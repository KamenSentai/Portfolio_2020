export default {
  complete(state) {
    state.isCompleted = true
  },
  update(state, value) {
    state.progression = value
  },
}
