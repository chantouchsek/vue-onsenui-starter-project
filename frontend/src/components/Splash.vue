<template>
  <v-ons-page id="splash">
    <div class="background"></div>
    <div class="content">
      <div class="content-inner">
        <div class="login" @click.prevent="goToLogin()" :class="{ highlight : isLogin }">ぼうけんをする</div>
        <div class="other" :class="{ highlight : isOther }">せって</div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
  import Login from '@/pages/login/Index';

  export default {
    name: 'splash',
    data() {
      return {
        isLogin: false,
        isOther: false,
      };
    },
    methods: {
      goToLogin() {
        const self = this;
        self.isLogin = true;
        setTimeout(() => {
          self.$store.dispatch('navigator/push', Login);
        }, 500);
      },
    },
  };
</script>

<style scoped>

</style>
