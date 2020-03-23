export default ({ store, route }) => {
  const { name, meta, params } = route
  store.commit('site/updateRoute', { name, meta, params }, { root: true })
}
