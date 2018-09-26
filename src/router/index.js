import Vue from 'vue'
import Router from 'vue-router'
import copyApp from '@/components/common/copyApp'
import video from '@/components/common/video'
import videoRotate from '@/components/common/videoRotate'
import videoRelative from '@/components/common/videoRelative'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/common/copyApp',
      name: 'copyApp',
      component: copyApp
    },
    {
      path: '/common/video',
      name: 'video',
      component: video
    },
    {
      path: '/common/videoRotate',
      name: 'videoRotate',
      component: videoRotate
    },
    {
      path: '/common/videoRelative',
      name: 'videoRelative',
      component: videoRelative
    },
  ]
})
