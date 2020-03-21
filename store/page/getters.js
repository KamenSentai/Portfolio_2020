export default {
  about(state) {
    return state.about
  },
  currentProject(_, __, ___, rootGetters) {
    return rootGetters['page/projects'][rootGetters['site/currentIndex']]
  },
  header(state) {
    return state.header
  },
  projects(state, _, __, rootGetters) {
    const totalProjects = rootGetters['page/totalProjects']
    const digitsLength = totalProjects.toString().length + 1

    return state.projects.map((project, index) => {
      const length = digitsLength - (index + 1).toString().length
      return {
        ...project,
        formattedIndex: '0'.repeat(length) + (index + 1),
      }
    })
  },
  totalProjects(state) {
    return state.projects.length
  },
}
