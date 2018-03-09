/* eslint-disable no-new */
/* ============
 * Main File
 * ============
 *
 * This will initialize the application.
 */
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 *
 * http://stylus-lang.com/
 */
import '@/assets/stylus/app.styl';

/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';
/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios';
import VueOnsen from 'vue-onsenui';
import store from '@/store';
import AppNavigator from './components/Navigator';
import CustomToolbar from './partials/CustomToolbar';

Vue.config.productionTip = false;
Vue.config.debug = process.env.NODE_ENV !== 'production';

Vue.use(VueOnsen);

Vue.component('custom-toolbar', CustomToolbar); // Common toolbar

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';

// Bind Axios to Vue.
Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});

store.dispatch('auth/check');

new Vue({
  el: '#app',
  render: h => h(AppNavigator),
  /**
   * The Vuex Store
   */
  store,
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();

    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }
  },
});
