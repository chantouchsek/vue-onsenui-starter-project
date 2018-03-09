<template>
  <v-ons-page>
    <section style="margin-top: 5px">
      <v-ons-list modifier="inset">
        <v-ons-list-header><h4>Budget Sales List</h4></v-ons-list-header>
        <v-ons-list-item
          v-for="(budgetSale, index) in budgetSales"
          modifier="chevron" tappable :key="index"
          @click.prevent="push(budgetSale.pageTitle)">
          {{ budgetSale.date }}
        </v-ons-list-item>
      </v-ons-list>
    </section>
  </v-ons-page>
</template>

<script>
  import { mapState } from 'vuex';
  import budgetSalesShow from '@/components/budgetSales/show';

  export default {
    name: 'budget-sales-index',
    data() {
      return {
        pageTitle: 'Budget Sales Index',
        budgetSales: [
          {
            date: '2018-01-01',
            value: 56453,
            pageTitle: '予算・売上',
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
    computed: {
      ...mapState('user', {
        user: state => state,
      }),
    },
    methods: {
      push(key) {
        const vm = this;
        vm.$store.dispatch('navigator/push', {
          extends: budgetSalesShow,
          data() {
            return {
              toolbarInfo: {
                backLabel: 'Budget Sales',
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
