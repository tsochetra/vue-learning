import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Watch from 'src/components/Dashboard/Views/Watch.vue'

const routes = [
   {
      path: '/',
      redirect: '/complex/lesson/0'
   },
   {
      path: '/:lesson',
      component: DashboardLayout,
      redirect: '/:lesson/lesson/0',
      children: [
         {
            path: ':type/:id',
            name: 'exercise',
            component: Watch
         }
      ]
   },
   { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
