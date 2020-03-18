export default {
  loadIndex({ commit }, index) {
    commit('loadIndex', index)
  },
  pageChange({ commit }) {
    commit('pageChange')
  },
  updateIndex({ commit }, { duration, index, callback }) {
    commit('loadIndex', index)

    setTimeout(() => {
      commit('updateIndex', index)
      callback()
    }, duration)
  },
}
