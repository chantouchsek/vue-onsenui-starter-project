<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable collapse width="250px"
        :animation="md ? 'overlay' : 'reveal'"
        :swipe-target-width="md && 25"
        :open.sync="menuIsOpen">
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <tabbar />
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
  import Tabbar from './components/Tabbar';
  import MenuPage from './pages/Menu';
  import Login from './pages/login/Index';

  export default {
    name: 'app',

    computed: {
      menuIsOpen: {
        get() {
          return this.$store.state.splitter.open;
        },
        set(newValue) {
          this.$store.dispatch('splitter/toggle', newValue);
        },
      },
    },
    components: {
      Login,
      Tabbar,
      MenuPage,
    },
    beforeCreate() {
      if (!this.$store.state.auth.authenticated) {
        this.$store.dispatch('navigator/push', Login);
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ons-splitter-side[side=left][animation=overlay] {
    border-right: 1px solid #BBB;
  }
</style>
