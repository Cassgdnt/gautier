import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './../views/HomePage.vue';
import DetailsPage from './../views/DetailsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/details', component: DetailsPage }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

export default new VueRouter({
  routes // short for `routes: routes`
})
