export default {
  about(state) {
    return state.about
  },
  currentProject(state, _, __, rootGetters) {
    const currentIndex = rootGetters['site/currentIndex']
    const totalProjects = rootGetters['page/totalProjects']
    const digitsLength = totalProjects.toString().length + 1
    const length = digitsLength - (currentIndex + 1).toString().length

    return {
      ...state.projects[currentIndex],
      formattedIndex: '0'.repeat(length) + (currentIndex + 1),
    }
  },
  header(state) {
    return state.header
  },
  projects(state) {
    return state.projects
  },
  totalProjects(state) {
    return state.projects.length
  },
}
