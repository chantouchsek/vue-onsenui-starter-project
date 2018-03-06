/* ============
 * Main File
 * ============
 *
 * This will initialize the application.
 */

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import store from './store';
import Navigator from './components/Navigator';
import CustomToolbar from './partials/CustomToolbar';

Vue.config.productionTip = false;

Vue.use(VueOnsen);

Vue.component('custom-toolbar', CustomToolbar); // Common toolbar
/* eslint-disable no-new */
// new Vue(app).$mount('#app');

new Vue({
  el: '#app',
  render: h => h(Navigator),
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
