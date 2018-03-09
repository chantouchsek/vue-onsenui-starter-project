<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo">
      <div slot="right">
        <v-ons-icon icon="fa-circle-thin" class="color-green"></v-ons-icon>
        <v-ons-icon icon="fa-star-o" class="color-green"></v-ons-icon>
      </div>
    </custom-toolbar>
    <section style="margin: 5px">
      <div class='calendar'>
        <div class='header'>
          <a class='arrow' @click='movePreviousMonth'>&lsaquo; <span>前月</span></a>
          <span class='title' @click='moveThisMonth'>
        Hello <br><br>
        {{ header.label }}
      </span>
          <a class='arrow' @click='moveNextMonth'><span>次月</span> &rsaquo;</a>
        </div>
        <v-ons-list>
          <v-ons-list-item tappable v-for="(item, index) in dataItems[0].items" :key="index">
            <div class="left">
              <v-ons-icon :style="{ color: item.color }" :icon="item.icon" class="list-item__icon"></v-ons-icon>
            </div>
            <div class="center">
              {{ item.value }} {{ item.date }} {{ item.label }}
            </div>
          </v-ons-list-item>
        </v-ons-list>
      </div>
    </section>
  </v-ons-page>
</template>

<script>
  /* eslint-disable no-plusplus,no-underscore-dangle */
  import Items from '@/data/items';

  const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const _monthLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const _today = new Date();
  const _todayComps = {
    year: _today.getFullYear(),
    month: _today.getMonth() + 1,
    day: _today.getDate(),
  };

  export default {
    data() {
      return {
        title: 'タイムカード',
        currentIndex: 0,
        items: Items,
        isSlidingToPrevious: false,
        month: _todayComps.month,
        year: _todayComps.year,
        end: false,
      };
    },
    computed: {
      dataItems() {
        return this.items.filter(item => item.month.includes(`${this.year}-${this.month}`));
      },
      // Our component exposes month as 1-based, but sometimes we need 0-based
      monthIndex() {
        return this.month - 1;
      },
      isLeapYear() {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
      },
      // Day/month/year components for previous month
      previousMonthComps() {
        if (this.month === 1) {
          return {
            days: _daysInMonths[11],
            month: 12,
            year: this.year - 1,
          };
        }
        return {
          days: (this.month === 3 && this.isLeapYear) ? 29 : _daysInMonths[this.month - 2],
          month: this.month - 1,
          year: this.year,
        };
      },
      // Day/month/year components for next month
      nextMonthComps() {
        if (this.month === 12) {
          return {
            days: _daysInMonths[0],
            month: 1,
            year: this.year + 1,
          };
        }
        return {
          days: (this.month === 2 && this.isLeapYear) ? 29 : _daysInMonths[this.month],
          month: this.month + 1,
          year: this.year,
        };
      },
      // State for calendar header (no dependencies yet...)
      months() {
        return _monthLabels.map((ml, i) => ({
          label: ml,
          label_1: ml.substring(0, 1),
          label_2: ml.substring(0, 2),
          label_3: ml.substring(0, 3),
          number: i + 1,
        }));
      },
      // State for calendar header
      header() {
        const month = this.months[this.monthIndex];
        return {
          month,
          year: this.year.toString(),
          shortYear: this.year.toString().substring(2, 4),
          label: `${this.year}年${month.label}月勤務実績`,
        };
      },
    },
    methods: {
      moveThisMonth() {
        this.month = _todayComps.month;
        this.year = _todayComps.year;
      },
      moveNextMonth() {
        const { month, year } = this.nextMonthComps;
        this.month = month;
        this.year = year;
      },
      movePreviousMonth() {
        const { month, year } = this.previousMonthComps;
        this.month = month;
        this.year = year;
      },
    },
  };
</script>

<style>
  .pull-hook-spinner {
    color: #666;
    transition: transform .25s ease-in-out;
  }

  .pull-hook-progress {
    background-color: white;
    width: 32px;
    height: 32px;
    margin: 30px auto 0;
    border-radius: 100%;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: inline-block;
    line-height: 0px;
  }

  .pull-hook-progress .progress-circular {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    left: 4px;
  }

  .pull-hook-progress .progress-circular__primary {
    transition: stroke-dashoffset 0s;
  }
</style>

<style scoped lang="sass">
  $themeColor: #ff7a58

  $headerPadding: 0.5rem 0
  $headerBorderWidth: 1px
  $headerBorderStyle: solid
  $headerBorderColor: #aaaaaa
  $headerBackground: $themeColor
  $headerColor: #000

  $weekdayPadding: 0.4rem 0
  $weekdayColor: #7a7a7a
  $weekdayBorderWidth: 1px
  $weekdayBorderStyle: solid
  $weekdayBorderColor: #aaaaaa
  $weekdayBackground: #eaeaea

  $dayColor: #3a3a3a
  $dayBorder: solid 1px #aaaaaa
  $dayBackgroundColor: white
  $dayWidth: 14.2857%
  $dayHeight: 50px

  $white: white
  $todayBackgroundColor: $themeColor

  $notInMonthColor: #cacaca
  $notInMonthBackgroundColor: #fafafa

  $selectedColor: #fafafa
  $selectedBackgroundColor: #5e7fa0

  $draggedColor: #fafafa
  $linkColor: #0076ff
  $draggedBackgroundColor: #8ca7c2

  $fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif

  *
    box-sizing: border-box

  .calendar-layout
    min-width: 400px

  .calendar
    display: flex
    flex-direction: column

  .header
    display: flex
    justify-content: stretch
    align-items: center
    padding: $headerPadding
    background-color: $white

    =pointer()
      cursor: pointer
      &:hover
        color: #dcdcdc

    .arrow
      +pointer
      padding: 0 0.4em 0.2em 0.4em
      font-size: 1.1rem
      font-weight: 500
      user-select: none
      flex-grow: 0
      color: $linkColor

    .title
      +pointer
      flex-grow: 1
      font-size: 1.2rem
      text-align: center
      color: $headerColor !important

</style>
