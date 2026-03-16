import landing_page from '../pages/landing_page.js'
import about from '../pages/about.js'
import contact from '../pages/contact.js'
import adopt from '../pages/adopt.js'
import donate from '../pages/donate.js'
import volunteer from '../pages/volunteer.js'
import Admin_dashboard from '../pages/Admin_dashboard.js'
import doctor_dashboard from '../pages/doctor_dashboard.js'
import user_dashboard from '../pages/user_dashboard.js'
import login from '../pages/login.js'
import register from '../pages/register.js'

import user_registration from '../pages/user_registration.js'
import doctor_registration from '../pages/doctor_registration.js'

const routes = [

      {path : '/',component:landing_page},
      {path : '/about',component:about},
      {path : '/contact',component:contact},
      {path : '/adopt',component:adopt},
      {path : '/donate',component:donate},
      {path : '/volunteer',component:volunteer},
      {path : '/Admin_dashboard',component:Admin_dashboard},
      {path : '/doctor_dashboard',component:doctor_dashboard},
      {path : '/user_dashboard',component:user_dashboard},
      {path : '/login',component:login},
      {path : '/register',component:register},
      {path : '/user_registration', component: user_registration},
      {path : '/doctor_registration', component: doctor_registration}

]
const router = new VueRouter({
    routes
})

export default router;