const routes = [
  {
    path: '',
    redirect: {
      name: 'home',
    },
  },
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue'),
  },
  {
    name: 'project',
    path: '/:slug',
    props: true,
    component: () => import(/* webpackChunkName: "project" */ '@/pages/Project.vue'),
  },
]

export default routes
