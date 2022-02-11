<template>
  <div class="shaddow bg-white rounded-md p-3">
    <div class="text-[#A1A6AD] text-[15] mb-5">Сводная таблица</div>
    <template>
      <table>
        <Title />
        <tbody>
          <template v-if="details.length">
            <Row :row="row" v-for="(row,idx) in details" :key="`row-id-${idx}`" />
          </template>
        </tbody>
      </table>
    </template>
    <template v-if="false">
      <h2 class="text-center opacity-50">Введите данные о компании</h2>
    </template>
  </div>
</template>

<script>
import Title from "~/components/table/Title.vue";
import Row from "~/components/table/Row.vue";
export default {
  name: "Table",
  components: {
    Title,
    Row,
  },
  props: {
    details: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>