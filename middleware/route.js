export default ({ store, route }) => {
  store.commit('site/updateRoute', route.name, { root: true })
}
