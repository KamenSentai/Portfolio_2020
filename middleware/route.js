export default ({ store, route }) => {
  const { name, params } = route
  store.commit('site/updateRoute', { name, params }, { root: true })
}
