import index from '../demo/index'

const routes = {
  mode: 'hash',
  routes: [
    { path: '/', component: index},
    {
      path: '/button',
      component (resolve) {
        require(['@/demo/form/button'], resolve)
      }
    },
    {
      path: '/searchItem',
      component (resolve) {
        require(['@/demo/form/searchItem'], resolve)
      }
    },
    {
      path: '/select',
      component (resolve) {
        require(['@/demo/form/select'], resolve)
      }
    },
    {
      path: '/grid',
      component (resolve) {
        require(['@/demo/grid'], resolve)
      }
    },
    {
      path: '/icon',
      component (resolve) {
        require(['@/demo/others/icon'], resolve)
      }
    },
    {
      path: '/bounce',
      component (resolve) {
        require(['@/demo/others/bounce'], resolve)
      }
    },
    {
      path: '/input',
      component (resolve) {
        require(['@/demo/form/input'], resolve)
      }
    },
    {
      path: '/lunbo',
      component (resolve) {
        require(['@/demo/lunbo'], resolve)
      }
    },
    {
      path: '/banner',
      component (resolve) {
        require(['@/demo/others/banner'], resolve)
      }
    },
    {
      path: '/question',
      component (resolve) {
        require(['@/demo/question'], resolve)
      }
    }
  ]
}

export {routes}
