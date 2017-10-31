import Library from '@/components/Library'
import Hello from '@/components/Hello'

export default {
  routes: [
    {
      path: '/library',
      component: Library
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/',
      redirect: '/library'
    }
  ]
}
