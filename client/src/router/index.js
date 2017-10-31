import Library from '@/components/Library'
import Explore from '@/components/Explore'
import Transform from '@/components/Transform'
import Admin from '@/components/Admin'
import Profile from '@/components/Profile'

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
      path: '/transform',
      component: Transform
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/profile',
      component: Profile
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
