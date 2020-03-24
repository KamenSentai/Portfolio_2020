export default {
  curriculum(state) {
    return state.curriculum
  },
  currentProject(state, _, __, rootGetters) {
    const currentIndex = rootGetters['site/currentIndex']
    const currentProject = rootGetters['page/projects'][currentIndex]
    const totalProjects = rootGetters['page/totalProjects']
    return {
      ...currentProject,
      next: state.projects[(currentIndex + 1) % totalProjects],
    }
  },
  projects(state, _, __, rootGetters) {
    const totalProjects = rootGetters['page/totalProjects']
    const digitsLength = totalProjects.toString().length + 1

    return state.projects.map((project, index) => {
      const length = digitsLength - (index + 1).toString().length
      return {
        ...project,
        index,
        formattedIndex: '0'.repeat(length) + (index + 1),
      }
    })
  },
  resume(state) {
    return state.resume
  },
  social(state) {
    return state.social
  },
  totalProjects(state) {
    return state.projects.length
  },
}
