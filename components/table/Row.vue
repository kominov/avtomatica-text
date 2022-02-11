<template>
  <tr>
    <td>{{row.unit}}</td>
    <td>{{date.day}}/{{date.month}}/{{date.year}}</td>
    <td>{{start.day}}/{{start.month}}/{{start.year}}</td>
    <td>{{row.length}}</td>
    <td :class="{'!text-[#14CDB7]': !row.idle }" class="text-[#E73A82]">{{row.idle ? 'да': 'нет'}}</td>
    <td>{{row.type}}</td>
  </tr>
</template>

<script>
import tsToDate from "~/helpers/tsToDate";

export default {
  name: "Row",
  data() {
    return {
      date: {},
      start: {},
    };
  },
  mounted() {
    this.date = tsToDate(this.row.date);
    this.start = tsToDate(this.row.start);
  },
  props: {
    row: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {},
  methods: {},
};
</script>

<style>
</style>