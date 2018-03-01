<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
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
      Tabbar,
      MenuPage,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ons-splitter-side[side=left][animation=overlay] {
    border-right: 1px solid #BBB;
  }
</style>
