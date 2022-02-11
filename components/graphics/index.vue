<template>
  <div class="mt-5 bar-chart">
    <BarChart v-if="isShowChart" :chartData="chartData" :options="options" />
  </div>
</template>

<script>
import BarChart from "~/components/chart/ChartBar";

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      chartData: {},
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },

  props: {
    graph: {
      type: Array,
      default() {
        return [];
      },
    },
    isShowChart: Boolean,
  },
  watch: {
    graph() {
      this.fillData();
    },
  },
  mounted() {
    this.fillData();
  },
  computed: {
    setCoordinats() {
      const coor = this.graph;
      let x = [];
      let y = [];
      coor.forEach((t) => {
        x.push(t[0]);
        y.push(t[1]);
      });
      return { x, y };
    },
  },

  methods: {
    fillData() {
      this.chartData = {
        labels: [...this.setCoordinats.x],
        datasets: [
          {
            label: "Data One",
            data: [...this.setCoordinats.y],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>