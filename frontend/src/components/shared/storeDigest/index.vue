<template>
  <v-ons-page>
    <div class="store-digest">
      <div class="store-name text-center">
        <slot name="title">Store</slot>
      </div>
      <div class="graph">
        <slot name="graph">Graph Component</slot>
      </div>
      <div class="reports">
        <v-ons-list>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
            <div class="left">
              {{ reports.budget.label }}
            </div>
            <div class="right">
              {{ reports.budget.value }}
            </div>
          </v-ons-list-item>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
            <div class="left">
              {{ reports.sales.label }}
            </div>
            <div class="right">
              {{ reports.sales.value }}
            </div>
          </v-ons-list-item>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
            <div class="left">
              {{ reports.achievement.label }}
            </div>
            <div class="right">
              {{ reports.achievement.value }}
            </div>
          </v-ons-list-item>
          <v-ons-list-item :modifier="md ? 'nodivider' : ''">
            <div class="left">
              {{ reports.target.label }}
            </div>
            <div class="right">
              {{ reports.target.value }}
            </div>
          </v-ons-list-item>
        </v-ons-list>
      </div>
    </div>
    <v-ons-list>
      <v-ons-list-header>SECTION HEADER</v-ons-list-header>
      <slot name="list-body"/>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'store-digest-index',
    data() {
      return {
        pageTitle: 'Budget Sales Index',
        reports: {
          budget: {
            label: '今月の予算',
            value: '¥3,870,000',
          },
          sales: {
            label: '今月の売り上げ',
            value: '¥3,870,000',
          },
          achievement: {
            label: '達成率・差異',
            value: '100% / 0',
          },
          target: {
            label: '目標率',
            value: '80%',
          },
        },
      };
    },
  };
</script>

<style scoped>

</style>
