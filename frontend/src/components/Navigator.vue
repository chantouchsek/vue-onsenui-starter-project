<template>
  <v-ons-navigator swipeable swipe-target-width="50px"
                   :page-stack="pageStack"
                   :pop-page="storePop"
                   :options="options"
                   @postpush="showPopTip"
  ></v-ons-navigator>
</template>

<script>
  /* eslint-disable no-unused-expressions,no-return-assign */

  import app from '@/app';
  import Splash from '@/components/Splash';

  export default {
    beforeCreate() {
      if (!this.$store.state.auth.authenticated) {
        this.$store.dispatch('navigator/push', Splash);
      } else {
        this.$store.dispatch('navigator/push', app);
      }
    },
    data() {
      return {
        shutUp: this.md,
      };
    },
    computed: {
      pageStack() {
        return this.$store.state.navigator.stack;
      },
      options() {
        return this.$store.state.navigator.options;
      },
    },
    methods: {
      storePop() {
        this.$store.dispatch('navigator/pop');
      },
      showPopTip() {
        !this.shutUp && this.$ons.notification.toast({
          message: 'Try swipe-to-pop from left side!',
          buttonLabel: 'Shut up!',
          timeout: 2000,
        }).then(i => this.shutUp = i === 0);
      },
    },
  };
</script>
