export default {
  loadIndex({ commit }, index) {
    commit('loadIndex', index)
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
  updateIndex({ commit, state: { duration } }, { index, stropAnimating, stropChanging }) {
    commit('loadIndex', index)

    setTimeout(() => {
      commit('updateIndex', index)
      stropChanging()
      setTimeout(stropAnimating, duration)
    }, duration)
  },
}
