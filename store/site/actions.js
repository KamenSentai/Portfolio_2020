export default {
  loadIndex({ commit }, index) {
    commit('loadIndex', index)
  },
  navigateIndex({ commit, state: { duration } }, index) {
    commit('loadIndex', index)

    setTimeout(() => {
      commit('updateIndex', index)
    }, duration)
  },
  pageChange({ commit, state: { duration } }, callback) {
    if (callback) {
      setTimeout(() => {
        commit('pageChange')
        callback()
      }, duration)
    } else {
      commit('pageChange')
    }
  },
  toggleActivity({ commit }, value = null) {
    commit('toggleActivity', value)
  },
  toggleLight({ commit }, value = null) {
    commit('toggleLight', value)
  },
  updateIndex({ commit }, index) {
    commit('updateIndex', index)
  },
}
