<<<<<<< HEAD
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);
sync(store, router);
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
>>>>>>> 488d09fbca4c5581dbde949ccee82555d71b1304

new Vue({
  router,
  store,
<<<<<<< HEAD
  render: h => h(App),
}).$mount('#app');
=======
  vuetify,
  render: h => h(App)
}).$mount('#app')
>>>>>>> 488d09fbca4c5581dbde949ccee82555d71b1304
