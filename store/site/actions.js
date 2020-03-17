export default {
  loadIndex({ commit }, index) {
    commit('loadIndex', index)
  },
  updateIndex({ commit }, { duration, index, callback }) {
    commit('loadIndex', index)

    setTimeout(() => {
      commit('updateIndex', index)
      callback()
    }, duration)
  },
}
