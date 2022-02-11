<template>
  <div class="container">
    <template v-if="currentTableList">
      <TableHead
        :value="this.currentTableList.id"
        @counterUp="counterUp"
        @counterDown="counterDown"
      />
      <GeneralInformation
        :size="currentTableList.size"
        :date="currentTableList.date"
        :exposure="currentTableList.exposure"
        :turn="currentTableList.turn"
      />
      <Table :details="currentTableList.details" />
      <Graphics :isShowChart="isShowChart" :graph="currentTableList.graph" />
    </template>
  </div>
</template>

<script>
import { defaultData } from "~/defaul-data";
import GeneralInformation from "~/components/table/GeneralInformation";
import Graphics from "~/components/graphics/index.vue";
export default {
  name: "IndexPage",

  data() {
    return {
      tableData: [],
      tableNumber: 0,
      currentTableList: null,

      isShowChart: false,
    };
  },

  components: {
    GeneralInformation,
    Graphics,
  },

  mounted() {
    this.tableData = defaultData;
    this.currentTableList = this?.tableData?.[0] || {};
    this.isShowChart = true;
  },

  watch: {
    tableNumber() {
      this.getCurrentTableList();
    },
  },

  computed: {
    getId() {
      return this?.currentTableList?.id || 0;
    },
  },

  methods: {
    counterUp() {
      this.tableNumber++;
    },

    counterDown() {
      this.tableNumber--;
    },

    getCurrentTableList() {
      if (
        this.tableNumber > this.tableData.length - 1 ||
        this.tableNumber < 0
      ) {
        this.tableNumber = 0;
      }

      this.currentTableList = this?.tableData?.[this.tableNumber] || {};
    },
  },
};
</script>
<style lang="scss">
.shaddow {
  box-shadow: 0px 2px 2px rgba(29, 35, 66, 0.05);
}
.bar-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
}
</style>
