export default {
  currentIndex(state) {
    return state.currentIndex
  },
  currentProject(state, _, __, rootGetters) {
    const currentIndex = rootGetters['site/currentIndex']
    const totalProjects = rootGetters['site/totalProjects']
    const digitsLength = totalProjects.toString().length + 1
    const length = digitsLength - (currentIndex + 1).toString().length

    return {
      ...state.projects[state.currentIndex],
      formattedIndex: '0'.repeat(length) + (currentIndex + 1),
    }
  },
  projects(state) {
    return state.projects
  },
  temporaryIndex(state) {
    return state.temporaryIndex
  },
  totalProjects(state) {
    return state.projects.length
  },
}
