import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/navbar'
import HeaderLogo from '@/components/Header'
import Banner from '@/components/banner'
import Prolist from '@/components/prolist'
import Footernav from '@/components/Footernav'

/*页面*/
import tianmao from '@/components/tianmao'
import jd from '@/components/jd'
import yamaxun from '@/components/yamaxun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        header: HeaderLogo,
        banner: Banner,
        prolist: Prolist,
        footernav:Footernav
      }
    },
    {
      path: '/tianmao',
      name: 'tianmao',
      components: {
        default: tianmao,
      }
    },
    {
      path: '/jd',
      name: 'jd',
      components: {
        default: jd,
      }
    },
    {
      path: '/yamaxun',
      name: 'yamaxun',
      components: {
        default: yamaxun,
      }
    }
  ]
})
