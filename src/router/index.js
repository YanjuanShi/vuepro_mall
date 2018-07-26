import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/navbar'
import HeaderLogo from '@/components/header'
import Banner from '@/components/banner'
import Prolist from '@/components/prolist'
import Footernav from '@/components/footernav'

/*页面*/
import tianmao from '@/components/tianmao'
import jd from '@/components/jd'
import yamaxun from '@/components/yamaxun'
import prodec from '@/components/prodec'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      components: {
        default: Navbar,
        header: HeaderLogo,
        banner: Banner,
        prolist: Prolist,
        prolistb: Prolist,
        prolistc: Prolist,
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
    },
    {
      path: '/prodec',
      name: 'prodec',
      components: {
        default: prodec,
      }
    }
  ]
})
