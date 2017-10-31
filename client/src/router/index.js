import Library from '@/components/Library'
import Explore from '@/components/Explore'
import Model from '@/components/Model'
import Admin from '@/components/Admin'
import Account from '@/components/Account'

export default {
  routes: [
    {
      path: '/library',
      component: Library
    },
    {
      path: '/explore',
      component: Explore
    },
    {
      path: '/model',
      component: Model
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/account',
      component: Account
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
