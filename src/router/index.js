import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Page2 from '@/components/pages/Page2'
import Students from '@/components/pages/Students'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    }
  ]
})
