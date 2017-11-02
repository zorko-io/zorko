import Library from '@/components/Library'
import Explore from '@/components/Explore'
import Model from '@/components/Model'
import Admin from '@/components/Admin'
import Account from '@/components/Account'
import Connection from '@/components/Connection'
import Repositories from '@/components/Repositories'
import Look from '@/components/Look'

export default {
  routes: [
    {
      path: '/library',
      component: Library
    },
    {
      path: '/looks/:id',
      component: Look
    },
    {
      path: '/explore/:id',
      component: Explore
    },
    {
      path: '/model/:id',
      component: Model
    },
    {
      path: '/model/:id/docs/:docId',
      component: Model
    },
    {
      path: '/model/:id/models/:modelId',
      component: Model
    },
    {
      path: '/model/:id/views/:viewId',
      component: Model
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/admin/connections',
      component: Connection
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/account/repositories',
      component: Repositories
    },
    {
      path: '/library',
      component: Library
    },
    {
      path: '/',
      redirect: '/library'
    }
  ]
}
