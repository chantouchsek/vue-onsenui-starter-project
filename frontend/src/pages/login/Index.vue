<template>
  <layouts id="login">
    <div class="background"></div>
    <div class="content">
      <div class="content-inner">
        <div class="note-login center">
          IDとPASSWORDを入力して<br>ログインしてください
        </div>
        <div class="center">
          <input type="text" class="id-input" placeholder="ID" v-model="user.username" />
        </div>
        <div class="center">
          <input type="password" class="password-input" placeholder="PASSWORD" v-model="user.password" />
        </div>
        <div class="center">
          <v-ons-button modifier="large" class="button-margin login-button" @click.native="login">ログイン</v-ons-button>
        </div>
      </div>
    </div>
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
