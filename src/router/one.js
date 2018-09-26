import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/one/Hello'
import componentA from '@/components/one/componentA'
import one from '@/components/one/one'
import two from '@/components/one/two'
import fatherTest from '@/components/one/fatherTest'
import fatherProps from '@/components/one/fatherProps'
import childProps from '@/components/one/childProps'
import fatherSlot from '@/components/one/fatherSlot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/one/componentA',
      name: 'componentA',
      component: componentA
    },
    {
      path: '/one/one',
      name: 'one',
      component: one
    },
    {
      path: '/one/two',
      name: 'two',
      component: two
    },
    {
      path: '/one/fatherTest',
      name: 'fatherTest',
      component: fatherTest,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/one/fatherProps',
      name: 'fatherProps',
      component: fatherProps,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/one/childProps',
      name: 'childProps',
      component: childProps,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/one/fatherSlot',
      name: 'fatherSlot',
      component: fatherSlot
    },
  ]
})
