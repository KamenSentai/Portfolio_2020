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
  toggleLight({ commit, state: { isLighten } }, value = null) {
    if ((value === null && !isLighten) || value) {
      document.body.classList.add('bg-light')
      document.body.classList.add('text-dark')
    } else {
      document.body.classList.remove('bg-light')
      document.body.classList.remove('text-dark')
    }

    commit('toggleLight', value)
  },
  updateIndex({ commit }, index) {
    commit('updateIndex', index)
  },
}
