import Vue from 'vue'
import Router from 'vue-router'

import {
  APRender
} from './AP/AP'
import {
  ARRender
} from './AR/AR' //
import {
  BGRender
} from './BG/BG' //
import {
  CBRender
} from './CB/CB' //
// import { CCRender } from './CC/CC'
import {
  CMRender
} from './CM/CM' //
import {
  CORender
} from './CO/CO' //
// import { FARender } from './FA/FA'
// import { FMRender } from './FM/FM'
import {
  GLRender
} from './GL/GL' //
// import { ICRender } from './IC/IC'
// import { MMRender } from './MM/MM'
// import { MURender } from './MU/MU'
import {
  OBRender
} from './OB/OB' //
// import { PMRender } from './PM/PM'
// import { PORender } from './PO/PO'
import {
  SMRender
} from './SM/SM' //
import {
  SSRender
} from './SS/SS' //
import {
  TNRender
} from './TN/TN' //
import {
  WFRender
} from './WF/WF' //
//Report template
import Report from '@/views/Reports/ReportPage2'

import CS_ContactAddress from '@/views/Custom/CS_ContactAddress'

// CONTAINERS
import LayoutFull from '@/containers/LayoutFull/LayoutFull'

// COMPONENTS
import Dashboard from '@/views/Dashboard/Dashboard'
import SignIn from '@/views/Authentication/SignIn/SignIn'
import ReportGenerator from '@/views/Reports/ReportGenerator'
import PageNotFound from '@/views/PageNotFound/PageNotFound'
import Map from '@/views/Sample/Map'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      redirect: '/',
      name: 'LayoutFull',
      component: LayoutFull,
      children: [{
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            requiresAuth: true,
            breadcrumbs: [{
              name: 'Dashboard'
            }]
          }
        },
        {
          path: '/TemplatePages/ReportPage',
          name: 'Report',
          component: Report,
          meta: {
            requiresAuth: true,
            breadcrumbs: [{
              name: 'Report'
            }]
          }
        },
        APRender,
        ARRender,
        BGRender,
        CBRender,
        // CCRender,
        CMRender,
        CORender,
        // FARender,
        // FMRender,
        GLRender,
        // ICRender,
        // MMRender,
        // MURender,
        OBRender,
        // PMRender,
        // PORender,
        SMRender,
        SSRender,
        TNRender,
        WFRender,
        {
          path: '/Custom/CS_ContactAddress',
          name: 'CS_ContactAddress',
          component: CS_ContactAddress,
          meta: {
            requiresAuth: true
          }
        }
        // {
        //   path: '/AR_InvoiceDeposit',
        //   name: 'AR_InvoiceDeposit',
        //   component: AR_InvoiceDeposit_MasterVuex,
        //   meta: { 
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Invoice Deposit', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/CM_CurrencyMaster',
        //   name: 'CM_CurrencyMaster',
        //   component: CM_CurrencyMaster_MasterVuex,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Currency Master Vuex', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/CM_CountryCityMaster',
        //   name: 'CM_CountryCityMaster',
        //   component: CM_CountryCity_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Country/City Master', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/CM_ProvinceMaster',
        //   name: 'CM_ProvinceMaster',
        //   component: CM_Province_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Province', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/CM_PortfolioMaster',
        //   name: 'CM_PortfolioMaster',
        //   component: CM_Portfolio_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Porfolio', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/SS_Group',
        //   name: 'SS_Group',
        //   component: SS_Group_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Group Entry', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/CM_CountryCityMasterVuex',
        //   name: 'CM_CountryCityMasterVuex',
        //   component: CM_CountryCity_MasterVuex,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Country/City Master', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/SS_PageMaster',
        //   name: 'SS_PageMaster',
        //   component: SS_Page_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Page Master Entry', link: ''}
        //     ]
        //   }
        // },
        // {
        //   path: '/SS_ModuleAccess',
        //   name: 'SS_ModuleAccess',
        //   component: SS_ModuleAccess_Master,
        //   meta: {
        //     requiresAuth: true,
        //     breadcrumbs: [
        //       {name: 'Dashboard', link: '/'},
        //       {name: 'Module Access Entry', link: ''}
        //     ]
        //   }
        // }
      ]
    },
    {
      path: '/Map',
      component: Map,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
      meta: {
        requiresNoAuth: true
      }
    },
    {
      path: '/ReportGenerator',
      name: 'ReportGenerator',
      component: ReportGenerator,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})