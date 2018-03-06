<template>
  <layouts>
    <v-ons-list>
      <v-ons-list-header>Form Login</v-ons-list-header>
      <v-ons-list-item :modifier="md ? 'nodivider' : ''">
        <div class="left">
          <v-ons-icon icon="md-face" class="list-item__icon"></v-ons-icon>
        </div>
        <label class="center">
          <v-ons-input float maxlength="20"
                       placeholder="Name"
                       v-model="user.username"
          >
          </v-ons-input>
        </label>
      </v-ons-list-item>

      <v-ons-list-item :modifier="md ? 'nodivider' : ''">
        <div class="left">
          <v-ons-icon icon="md-lock" class="list-item__icon"></v-ons-icon>
        </div>
        <label class="center">
          <v-ons-input float maxlength="20" type="password"
                       placeholder="Password"
                       v-model="user.password"
          >
          </v-ons-input>
        </label>
      </v-ons-list-item>
      <v-ons-list-item :modifier="md ? 'nodivider' : ''">
        <div class="center">
          <v-ons-button modifier="large" class="button-margin" @click.native="login">Login</v-ons-button>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </layouts>
</template>
<script>
  import Layouts from '@/layouts/minimal';

  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',

    /**
     * The data the page can use.
     *
     * @returns {Object} The data.
     */
    data() {
      return {
        user: {
          username: null,
          password: null,
        },
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Method used to login the user.
       * It'll dispatch the login action on the auth module.
       */
      login() {
        this.$store.dispatch('auth/login', this.user);
      },
    },
    components: {
      Layouts,
    },
  };
</script>
