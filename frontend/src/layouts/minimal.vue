<template>
  <v-ons-page>
    <v-ons-toast v-for="(alert, index) in application.alerts" :visible.sync="alert.toastVisible" animation="ascend" :key="index">
      {{ alert.message }}
      <button @click="removeAlert(alert)">ok</button>
    </v-ons-toast>
    <slot/>
  </v-ons-page>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    /**
     * The name of the layout.
     */
    name: 'minimal-layout',

    data() {
      return {
        toastVisible: false,
      };
    },

    computed: {
      ...mapState('application', {
        application: state => state,
      }),
    },

    methods: {
      removeAlert(alert) {
        this.$store.dispatch('application/removeAlert', alert);
      },
    },
  };
</script>

<style scoped>

</style>
