<template>
  <v-ons-page>
    <section style="margin-top: 5px">
      <v-ons-list modifier="inset">
        <v-ons-list-header><h4>Daily Reports List</h4></v-ons-list-header>
        <v-ons-list-item
          v-for="(dailyReport, index) in dailyReports"
          modifier="chevron" tappable :key="index"
          @click.prevent="push(dailyReport.pageTitle)">
          {{ dailyReport.date }}
        </v-ons-list-item>
      </v-ons-list>
    </section>
  </v-ons-page>
</template>

<script>
  import dailyReportsShow from '@/components/dailyReports/show';

  export default {
    name: 'daily-reports-index',
    data() {
      return {
        pageTitle: 'Daily Reports Index',
        dailyReports: [
          {
            date: '2018-01-01',
            value: 56453,
            pageTitle: '日報・掲示板',
          },
          {
            date: '2018-01-02',
            value: 3342,
            pageTitle: '日報・掲示',
          },
          {
            date: '2018-01-03',
            value: 34465,
            pageTitle: '日報・掲',
          },
          {
            date: '2018-01-04',
            value: 7423,
            pageTitle: '日報',
          },
        ],
      };
    },
    methods: {
      push(key) {
        const vm = this;
        vm.$store.dispatch('navigator/push', {
          extends: dailyReportsShow,
          data() {
            return {
              toolbarInfo: {
                backLabel: 'Daily Reports',
                title: key,
              },
            };
          },
        });
      },
    },
  };
</script>

<style scoped>

</style>
