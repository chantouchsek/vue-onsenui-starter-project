<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo">
      <div slot="right">
        <v-ons-icon icon="fa-circle-thin" class="color-green"></v-ons-icon>
        <v-ons-icon icon="fa-star-o" class="color-green"></v-ons-icon>
      </div>
    </custom-toolbar>
    <section style="margin: 16px">
      <store-digest>
        <div class="store-title" slot="title">
          掲示板
        </div>
        <div class="list-items" slot="list-body">
          <v-ons-list>
            <v-ons-list-item modifier="chevron" tappable @click="pushList">タイムカード</v-ons-list-item>
            <v-ons-list-item modifier="chevron" tappable>スタッフリスト設定</v-ons-list-item>
          </v-ons-list>
        </div>
      </store-digest>
    </section>
  </v-ons-page>
</template>

<script>
  import storeDigest from '@/components/shared/storeDigest/index';
  import timeCardLists from '@/components/timeCard/list';

  export default {
    data() {
      return {
        toolbarInfo: {
          backLabel: 'Time Card',
          title: 'タイムカード',
        },
      };
    },
    components: {
      storeDigest,
    },
    methods: {
      pushList() {
        this.$store.dispatch('navigator/push', {
          extends: timeCardLists,
          data() {
            return {
              toolbarInfo: {
                backLabel: 'Time Card',
                title: 'タイムカード',
              },
            };
          },
        });
      },
    },
  };
</script>

<style scoped>
  .button-margin {
    margin: 6px 0;
  }
</style>
